// import {getNewsFromNewsAPI} from "./newsApi";
// import {getNewsFromGuardianAPI} from "./newsGuardian";
//
// export const getCombinedNews = async (keywords: string, filters: any) => {
//     try {
//         const [newsApiArticles, guardianArticles] = await Promise.all([
//             getNewsFromNewsAPI(keywords, filters),
//             getNewsFromGuardianAPI(keywords, filters)
//         ]);
//
//         const combinedArticles = [...newsApiArticles, ...guardianArticles];
//         return combinedArticles;
//     } catch (error) {
//         console.error('Error combining news from multiple sources:', error);
//         throw error;
//     }
// };