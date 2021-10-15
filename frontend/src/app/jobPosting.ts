export interface JobPosting{
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
};