'use client';
import About from "@/components/About/About";
import Articles from "@/components/Articles/Articles";
import Games from "@/components/Games/Games";
import Hero from "@/components/Hero/Hero";
import Packages from "@/components/Packages/Packages";
import useSortArticles from "@/hooks/useSortArticles";
import useSortGames from "@/hooks/useSortGames";

export default function Home() {

  const getArticles = useSortArticles();

  const getGames = useSortGames();

  return (
    <>
      <Hero />
      <About />
      <Packages />
      <Articles getArticles={getArticles} />
      <Games getGames={getGames} />
    </>
  );
}