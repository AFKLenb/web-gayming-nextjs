
import About from "@/components/About/About";
import Articles from "@/components/Articles/Articles";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Articles />
    </>
  );
}