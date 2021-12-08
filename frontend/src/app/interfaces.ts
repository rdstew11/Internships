export interface JobPosting{
    id: number,
    title: String,
    company_name: String,
    city: String,
    state: String,
    description: String,
    start_date?: Date,
    end_date?: Date,
    approved?: Boolean,
    alumni?: Boolean,
    external_link?: String
    phone_number?: String,
    email: String,
};

export interface LoginCredentials{
    account_type: string,
    username: string,
    password: string,
}

export interface Company{
    id: number,
    name: string,
    jobs?: JobPosting[],
    website?: String,
    description: String,
    address: String,
    state: String,
    city: String,
    zipcode?: number,

}

export interface Student{
    id: number,
    firstname: string,
    lastname: string,
    gender?: string,
    gpa?: number,
    email: string,
    website?: string,
    linkedin?: string,
    biography: string,
    major: string,
    minor?: string,
    grad_date?: Date
}