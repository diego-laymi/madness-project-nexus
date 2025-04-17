import React from "react";
import { HeroContainer, HeroImageFrame, HeroInfoFrame, InfoActions, InfoText, MainButton, SecondaryButton } from "./styles";

export function HeroSection() {
  return (
    <HeroContainer>
      <HeroImageFrame>
        <img src="./hero/hero_background.webp" alt="" />
        <img src="./hero/hero_image-1.webp" alt="" />
        <img src="./hero/hero_image-2.webp" alt="" />
        <img src="./hero/hero_image-3.webp" alt="" />
        <img src="./hero/hero_image-4.webp" alt="" />
        <img src="./hero/hero_image-5.webp" alt="" />
        <img src="./hero/hero_image-6.webp" alt="" />
        <img src="./hero/hero_image-7.webp" alt="" />
        <img src="./hero/hero_image-8.webp" alt="" />
      </HeroImageFrame>
      <HeroInfoFrame>
        <InfoText>
          <h1>
            CHALLENGE THE MADNESS
            ARE YOU READY FOR THE
            PROJECT NEXUS?
          </h1>
          <p>MADNESS: Project Nexus is a third-person action game filled with intensity and brutality. Featuring an engaging story campaign and an endless arena mode, build your ultimate killing machine and blast your way through hordes of enemies.</p>
        </InfoText>
        <InfoActions>
          <MainButton href="https://store.steampowered.com/app/488860/MADNESS_Project_Nexus/" target="_blank">
            <img src="./assets/corners_Red/cornerBottomLeft.png" alt="" />
            <img src="./assets/corners_Red/cornerTopLeft.png" alt="" />
            <img src="./assets/corners_Red/cornerBottomRight.png" alt="" />
            <img src="./assets/corners_Red/cornerTopRight.png" alt="" />
            START CARNAGE
          </MainButton>
          <SecondaryButton>
            <img src="./assets/corners_White/cornerBottomLeft.png" alt="" />
            <img src="./assets/corners_White/cornerTopLeft.png" alt="" />
            <img src="./assets/corners_White/cornerBottomRight.png" alt="" />
            <img src="./assets/corners_White/cornerTopRight.png" alt="" />
            WHAT IS MPN
          </SecondaryButton>
        </InfoActions>
      </HeroInfoFrame>
    </HeroContainer>
  );
}
