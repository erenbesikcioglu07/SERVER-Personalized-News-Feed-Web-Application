import axios, { AxiosError } from 'axios';
import config from '.././config';

export const getNewsFromNewsAPI = async (keywords: string, filters: any) => {
    try {
        const response = await axios.get(`${config.newsApiUrl}/top-headlines`, {
            params: {
                q: keywords,
                apiKey: config.newsApiKey,
                category: filters.category,
                sources: filters.sources,
                country: !keywords && !filters.category && !filters.sources ? 'us' : undefined,
            }
        });
        return  response.data.articles.filter((article: any) => article.source.id !== null);

    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 500) {
                console.error('Internal Server Error from NewsAPI');
            } else {
                console.error('Error fetching news from NewsAPI:', error);
            }
        }
        throw error;
    }
};

export const getSourcesFromNewsAPI = async () => {
    try {
        const response = await axios.get(`${config.newsApiUrl}/sources`, {
            params: {
                apiKey: config.newsApiKey,
            }
        });
        return response.data.sources;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 500) {
                console.error('Internal Server Error from NewsAPI');
            } else {
                console.error('Error fetching news sources from NewsAPI:', error);
            }
        }
        throw error;
    }
}