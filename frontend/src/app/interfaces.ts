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
    name: String,
    jobs?: JobPosting[],
    website?: String,
    description: String,
    street_address: String,
    state: String,
    city: String,
    zipcode: number,

}