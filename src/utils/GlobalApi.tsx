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
const getArticles = () => axiosClient.get('/articles?populate=*');
// API - запрос на получение конкретной статьи
const getSingleArticle = (id) => axiosClient.get('/articles/' + id + '?populate=*');
// API - запрос на получение записей по категории
const getArticlesByCategory = (categoryId) => axiosClient.get('/articles?filters[category][id][$in]='+categoryId+'&populate=*');
export default {
    getBenefists,
    getArticles,
    getSingleArticle,
    getArticlesByCategory
}