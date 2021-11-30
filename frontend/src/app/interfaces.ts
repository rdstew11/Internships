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
    name: string,
    resumeLink?: string,
    gpa?: number,
    email: string,
    phone?: string,
    website?: string,
    biography?: string,
    graduation_date?: Date
}