import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import { ButtonWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from "./HeroStyles";

function Hero() {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted loop />
      <Container>
        <MainHeading>Eai maluco pronto pra fazer as paradinhas?</MainHeading>
        <HeroText>O maior fazedor de paradas do quarteirão</HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Começe Agora</Button>
          </Link>
          <HeroButton>Descubra Mais</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
}
export default Hero;
