import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import {
  MainContainer,
  TopSection,
  BottomSection,
  ProfileImage,
  ScrollIndicator,
  ScrollText,
} from "./NewHeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainContainer>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <TopSection>
        <ScrollAnimation animateIn="fadeIn">
          <TypeAnimation
            cursor={true}
            sequence={[
              "Hi, I'm Meghraj.",
              1000,
              "An Embedded Hardware Engineer.",
              1000,
              () => setShowScrollDown(true),
            ]}
            speed={50}
            deletionSpeed={65}
            wrapper="h1"
            repeat={Infinity}
          />
        </ScrollAnimation>
      </TopSection>
      <BottomSection>
        <ScrollAnimation animateIn="fadeIn">
          <ProfileImage src="/profile-pic.png" alt="man-svgrepo" />
        </ScrollAnimation>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollIndicator to="projects" id="scrollDown">
              <ScrollText>
                Scroll down
                <img src="/scroll-down.svg" alt="scroll-down" />
              </ScrollText>
            </ScrollIndicator>
          </ScrollAnimation>
        )}
      </BottomSection>
    </MainContainer>
  );
}

export default Hero;
