const axios = require("axios");
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});

// API - запросы
const getBenefists = () => axiosClient.get('/benefits?populate=*');
// API - запрос на получение статьей
const getArticles = () => axiosClient.get('/articles?sort[]=id:desc&populate=*');
// API - запрос на получение статьей для баннера
const getArticlesBanner = () => axiosClient.get('/articles?filters[isBanner][$eq]=true&populate=*');
// API - запрос на получение статьей с ограничением
const getSortArticles = () => axiosClient.get('/articles?pagination[pageSize]=4&sort[]=id:desc&populate=*');
// API - запрос на получение конкретной статьи
const getSingleArticle = (id) => axiosClient.get('/articles?filters[slug][$eqi]='+id+'&populate=*');
// API - запрос на получение записей по категории
const getArticlesByCategory = (categoryId) => axiosClient.get('/articles?filters[category][id][$in]='+categoryId+'&populate=*');
// API - запрос на получение тарифов
const getPackages = () => axiosClient.get('/packages?populate=*');
// API - запрос на получение каталога игр
const getGames = () => axiosClient.get('/games?populate=*');
// API - запрос на получение каталога игр с фильтром для главной страницы
const getSortGames = () => axiosClient.get('/games?pagination[pageSize]=8&populate=*');
export default {
    getBenefists,
    getArticles,
    getArticlesBanner,
    getSortArticles,
    getSingleArticle,
    getArticlesByCategory,
    getPackages,
    getGames,
    getSortGames
}