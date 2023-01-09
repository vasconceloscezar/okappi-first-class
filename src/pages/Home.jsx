import Carousel from "../components/Carousel";
import Content from "../components/Content";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { contentData } from "../data";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      {contentData.contents.map((content) => (
        <Content {...content} />
      ))}
      <Carousel />
    </>
  );
}
