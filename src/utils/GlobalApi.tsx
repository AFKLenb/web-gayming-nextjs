const axios = require('axios');
// ПОЛУЧАЕМ ТОКЕН
const API_TOKEN = process.env.STRAPI_BACKEND_API_TOKEN;
// РЕГАЕМСЯ через токен bearer
const axionsClient = axios.create({
    baseURL: `${process.env.STRAPI_BACKEND_URL}/api`,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
});

const getBenefists = () => axionsClient.get('/benefits?populate=*');

export default {
    getBenefists,
}