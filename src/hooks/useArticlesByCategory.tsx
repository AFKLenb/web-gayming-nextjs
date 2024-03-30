'use client';
import GlobalApi from '@/utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const useArticlesByCategory = (categoryId) => {

        const [articlesList, setArticlesList] = useState([]);

        useEffect(() =>{
            getArticlesByCategory();
        }, [categoryId])

    const getArticlesByCategory = () => {
        GlobalApi.getArticlesByCategory(categoryId).then(resp => {
            setArticlesList(resp.data.data);
        });
    }
    
    return articlesList;
}

export default useArticlesByCategory
