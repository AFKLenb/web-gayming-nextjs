const axios = require('axios');
// ПОЛУЧАЕМ ТОКЕН
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// РЕГАЕМСЯ через токен bearer
const axionsClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
});

const getBenefists = () => axionsClient.get('/benefits?populate=*');

export default {
    getBenefists,
}