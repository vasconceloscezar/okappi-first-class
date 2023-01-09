import React from "react";
import { Button, Heading, TextWrapper } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardText,
  PricingCardFeature,
  PricingCard,
} from "./PricingStyles";
import { pricingData } from "../../data";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
        <PricingWrapper>
          <Heading>{pricingData.headingTitle}</Heading>
          <TextWrapper mb="1.4rem" weight="600" size="1.1rem" color="white" align="center">
            {pricingData.headingText}
          </TextWrapper>
          <PricingContainer>
            {pricingData.pricingOptions.map((card, index) => (
              <PricingCard key={index}>
                <PricingCardInfo>
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.price}</PricingCardCost>
                  <PricingCardText>{card.description}</PricingCardText>
                  <PricingCardFeatures>
                    {card.features.map((feature, index) => (
                      <PricingCardFeature key={index}>{feature}</PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  <Button onClick={() => navigate("/signup")}>{pricingData.callToActionButton}</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
