# Internships - CPSC Job Portal

This project is configured to work with an Nginx webserver distributed on a Linux operating system. Everything needed to start the website can be found in the **dist** folder.

## Installing Nginx

Refer to the [official Nginx tutorial](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/) for full installation details.
A brief summary for Debian systems:

**1. Update Packages**

> sudo apt-get update

**2. Install Nginx**

> sudo apt-get install nginx

**3. Run Nginx**

> sudo nginx


## Configuring Nginx

The project uses an [Nginx reverse-proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) to pass HTTP requests to both the backend server and the frontend.
The configuration file can be found at **dist/backend/internships.conf**

**1. Move internships.conf to sites-available**

> sudo mv [path to "internships.conf"] /etc/nginx/sites-available/

**2. Enable internships.conf**

> cd /etc/nginx/sites-enabled

> sudo ln -s ../sites-available/internships.conf .

if default.conf is still enabled, remove that link

> sudo rm default

**3. Make sure Nginx is still working 

> sudo nginx -t

This command should yield

>nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
>
>nginx: configuration file /etc/nginx/nginx.conf test is successful

**4. Restart Nginx**

> sudo systemctl restart nginx

## Setting up the Frontend

The Nginx reverse proxy will be passing any http request that doesn't path to the backend, to the frontend. It is pointing these requests to the **index.html** located
at **/var/www/frontend/index.html**. To make this work, the **dist/frontend** needs to be put there.

**1. Move the frontend folder**

> sudo mv [path to **frontend** folder] /var/www/

## Setting up the backend

The backend server will be ran in the background using **pm2**

**1. Navigate to backend folder**

> cd [path to dist/backend]

**2. Install npm dependencies**

> npm init

> npm install

**3. Install pm2**

"-g" flag is used to install pm2 globally

> npm install pm2 -g

**4. Start server using pm2**

> pm2 start index.js

**5. Ensure server is running**

> pm2 status

**index** should have a "running" status

**6. Generate RSA key**

> ssh-keygen -t rsa -b 2048 -f itRS256.key


## Setup PSQL database

**1. Ensure PSQL is installed**

> sudo apt-get install postgres

**2. Login to postgres**

Enter your password as prompted

> sudo psql -U postgres -h localhost

**3. Create a postgres account for the database**

Database is called "internships"

> CREATE USER [username]

Set a password

> \p [username]

**4. Initialize Database**

> \i init.sql

**5. Quit postgres**

> \q

**6. Put username and password into a .env**
Should look like:
>USERNAME=[yourusername] 
>
>PASSWORD=[yourpassword]  
>
>DATABASE=internships  
>
>HOST=localhost


