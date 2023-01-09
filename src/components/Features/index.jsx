import React from "react";
import { Container, Section } from "../../globalStyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from "./FeaturesStyles";
import { featuresData } from "../../data";

export default function Features() {
  const initial = {
    y: 80,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>{featuresData.title}</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {featuresData.options.map((el, index) => (
            <FeatureColumn initial={initial} whileInView={animate} transition={{ duration: 0.5 }} key={index}>
              <FeatureImageWrapper className={el.imgClass}>{el.icon}</FeatureImageWrapper>
              <FeatureName>{el.name}</FeatureName>
              <FeatureText>{el.description}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
}
