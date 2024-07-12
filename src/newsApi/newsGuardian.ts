import axios from 'axios';
import config from '../config';

export const getNewsFromGuardianAPI = async (keywords: string, filters: any) => {
    try {
        const response = await axios.get(`${config.guardianApiUrl}/search`, {
            params: {
                q: keywords,
                from: filters.fromDate,
                to: filters.toDate,
                "api-key": config.guardianApiKey,
                category: filters.category
            }
        });
        return response.data.response.results;
    } catch (error) {
        console.error('Error fetching news from The Guardian:', error);
        throw error;
    }
};