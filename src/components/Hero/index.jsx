import { Link } from "react-router-dom";
import { heroData } from "../../data";
import { Button, Container, MainHeading } from "../../globalStyles";
import { ButtonWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from "./HeroStyles";

function Hero() {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted loop />
      <Container>
        <MainHeading>{heroData.mainTitle}</MainHeading>
        <HeroText>{heroData.text}</HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>{heroData.callToActionButton}</Button>
          </Link>
          <HeroButton>{heroData.knowMoreButton}</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
}
export default Hero;
