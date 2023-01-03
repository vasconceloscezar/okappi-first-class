import Content from "../components/Content";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
    </>
  );
}
