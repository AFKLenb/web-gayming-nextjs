'use client';
import Games from '@/components/Games/Games';
import useArticles from '@/hooks/useArticles';
import useGames from '@/hooks/useGames';
import React from 'react';

export default function page() {

  const getGames = useGames();

  return (
    <>
      <Games getGames={getGames} />
    </>
  )
}
