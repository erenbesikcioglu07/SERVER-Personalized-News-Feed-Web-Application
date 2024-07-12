import dotenv from 'dotenv';

dotenv.config();

const config = {
    newsApiKey: process.env.NEWSAPI_KEY,
    newsApiUrl: process.env.NEWSAPI_URL,
    guardianApiKey: process.env.GUARDIAN_API_KEY,
    guardianApiUrl: process.env.GUARDIAN_API_URL
};

export default config;