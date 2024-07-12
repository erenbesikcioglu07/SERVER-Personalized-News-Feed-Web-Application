import {Request,Response} from "express";
import {getNewsFromGuardianAPI} from "../newsApi/newsGuardian";


export const newsGuardianApi = async (req:Request, res:Response) => {
    const { keywords, fromDate, toDate, sources, category } = req.query;
    try {
        const filters = {
            fromDate,
            toDate,
            category
        };
        const articles = await getNewsFromGuardianAPI(keywords as string, filters);
        res.json(articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Error fetching apiNews news' });
    }
}