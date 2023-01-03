import Carousel from "../components/Carousel";
import Content from "../components/Content";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { contentOne, contentTwo, contentThree } from "../data/ContentData";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content {...contentOne} />
      <Content {...contentTwo} />
      <Content {...contentThree} />
      <Carousel />
    </>
  );
}
