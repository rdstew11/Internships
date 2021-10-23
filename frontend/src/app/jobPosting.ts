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