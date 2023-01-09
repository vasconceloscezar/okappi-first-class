import React, { useEffect } from "react";
import { Container, Section } from "../../globalStyles";
import { ContentRow, TextWrapper, TopLine, Heading, ContentButton, Subtitle, ImgWrapper, Img, ContentColumn } from "./ContentStyles.js";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function Content(props) {
  const { primary, topLineText, headline, description, buttonLabel, img, alt, isPrimary, isTextToRight } = props;
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={isPrimary} ref={ref}>
      <Container>
        <ContentRow reverse={isTextToRight}>
          <ContentColumn>
            <TextWrapper>
              <TopLine initial={initial} transition={{ delay: 0.3, duration: 0.6 }} animate={animation}>
                {topLineText}
              </TopLine>
              <Heading initial={initial} transition={{ delay: 0.5, duration: 0.6 }} animate={animation} inverse={isPrimary}>
                {headline}
              </Heading>
              <Subtitle initial={initial} transition={{ delay: 0.7, duration: 0.6 }} animate={animation} inverse={isPrimary}>
                {description}
              </Subtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                inverse={isPrimary}
                primary={primary}
              >
                {buttonLabel}
              </ContentButton>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn initial={initial} transition={{ delay: 0.5, duration: 0.6 }} animate={animation}>
            <ImgWrapper>
              <Img src={img} alt={alt} whileHover={{ rotate: 2, scale: 1.02 }} transition={{ duration: 0.5 }} />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
}
