'use client';
import Articles from '@/components/Articles/Articles';
import useArticles from '@/hooks/useArticles';
import React from 'react';

export default function page() {

  const getArticles = useArticles();

  return (
    <>
      <Articles getArticles={getArticles} />
    </>
  )
}
