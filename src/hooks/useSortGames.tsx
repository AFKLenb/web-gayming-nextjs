'use client';
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSortGames = () => {

    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        getGames();
    }, [])

    const getGames = () => {
        GlobalApi.getSortGames().then(resp => {
            setGamesList(resp.data.data);
        });
    }

    return gamesList;
}

export default useSortGames
