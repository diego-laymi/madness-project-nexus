import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  HeroContainer,
  HeroImageFrame,
  HeroInfoFrame,
  HeroInfoWrapper,
  InfoActions,
  InfoText,
  MainButton,
  ScrollIndicator,
  ScrollIndicatorContainer,
  SecondaryButton,
  Shadow,
} from "./styles";

export function HeroSection() {
  const mouse = {
    x: 0,
    y: 0,
  };

  function parallaxEffect(event) {
    const winWidht = window.innerWidth / 2;
    const winHeight = window.innerWidth / 2;

    mouse.x = event.pageX - winWidht;
    mouse.y = event.pageY - winHeight;

    const tiltX = -(mouse.y / winHeight);
    const tiltY = mouse.x / winWidht;

    gsap.to(".bg", {
      duration: 1,
      rotationX: tiltX * 3,
      rotationY: tiltY * 3,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    gsap.to(".lyr-1", {
      duration: 1,
      rotationX: tiltX * 6,
      rotationY: tiltY * 6,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    gsap.to(".lyr-2", {
      duration: 1,
      rotationX: tiltX * 6,
      rotationY: tiltY * 6,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    gsap.to(".lyr-char", {
      duration: 1,
      rotationX: tiltX * 12,
      rotationY: tiltY * 12,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });
  }

  useGSAP(() => {
    const parallaxSection = document.getElementById("parallaxContainer");
    parallaxSection.addEventListener("mousemove", parallaxEffect);

    const scrllIndTl = gsap.timeline({ repeat: -1 });
    const scrllIndShwTl = gsap.timeline({ repeat: -1 });

    scrllIndTl
      .to(".si-1", { backgroundColor: "#ff0000", duration: 0.2 })
      .to(".si-1", { backgroundColor: "#000000", duration: 0.2 })
      .to(".si-2", { backgroundColor: "#ff0000", duration: 0.2 })
      .to(".si-2", { backgroundColor: "#000000", duration: 0.2 })
      .to(".si-3", { backgroundColor: "#ff0000", duration: 0.2 })
      .to(".si-3", { backgroundColor: "#000000", duration: 0.2 });

    scrllIndShwTl
      .to(".sh-1", {
        filter: "drop-shadow(0px 0px 3px rgba(255, 0, 0, 1))",
        duration: 0.2,
      })
      .to(".sh-1", {
        filter: "none",
        duration: 0.2,
      })
      .to(".sh-2", {
        filter: "drop-shadow(0px 0px 3px rgba(255, 0, 0, 1))",
        duration: 0.2,
      })
      .to(".sh-2", {
        filter: "none",
        duration: 0.2,
      })
      .to(".sh-3", {
        filter: "drop-shadow(0px 0px 3px rgba(255, 0, 0, 1))",
        duration: 0.2,
      })
      .to(".sh-3", {
        filter: "none",
        duration: 0.2,
      });
  });

  return (
    <HeroContainer>
      <HeroImageFrame id="parallaxContainer">
        <img className="bg" src="./hero/hero_background2.webp" alt="" />
        <img className="lyr-1" src="./hero/hero_image-1.webp" alt="" />
        <img className="lyr-char" src="./hero/hero_image-2.webp" alt="" />
        <img className="lyr-char" src="./hero/hero_image-3.webp" alt="" />
        <img className="lyr-1" src="./hero/hero_image-4.webp" alt="" />
        <img className="lyr-char" src="./hero/hero_image-5.webp" alt="" />
        <img className="lyr-2" src="./hero/hero_image-6.webp" alt="" />
        <img className="lyr-2" src="./hero/hero_image-7.webp" alt="" />
        <img className="lyr-2" src="./hero/hero_image-8.webp" alt="" />
      </HeroImageFrame>
      <HeroInfoFrame>
        <HeroInfoWrapper>
          <InfoText>
            <h1>CHALLENGE THE MADNESS ARE YOU READY FOR THE PROJECT NEXUS?</h1>
            <p>
              MADNESS: Project Nexus is a third-person action game filled with
              intensity and brutality. Featuring an engaging story campaign and
              an endless arena mode, build your ultimate killing machine and
              blast your way through hordes of enemies.
            </p>
          </InfoText>
          <InfoActions>
            <MainButton
              href="https://store.steampowered.com/app/488860/MADNESS_Project_Nexus/"
              target="_blank"
            >
              <img src="./assets/corners_Red/cornerBottomLeft.png" alt="" />
              <img src="./assets/corners_Red/cornerTopLeft.png" alt="" />
              <img src="./assets/corners_Red/cornerBottomRight.png" alt="" />
              <img src="./assets/corners_Red/cornerTopRight.png" alt="" />
              START CARNAGE
            </MainButton>
            <SecondaryButton href="#about">
              <img src="./assets/corners_White/cornerBottomLeft.png" alt="" />
              <img src="./assets/corners_White/cornerTopLeft.png" alt="" />
              <img src="./assets/corners_White/cornerBottomRight.png" alt="" />
              <img src="./assets/corners_White/cornerTopRight.png" alt="" />
              WHAT IS MPN
            </SecondaryButton>
          </InfoActions>
        </HeroInfoWrapper>
        <ScrollIndicatorContainer>
          <Shadow className="sh-1">
            <ScrollIndicator>
              <div className="si-1"></div>
            </ScrollIndicator>
          </Shadow>
          <Shadow className="sh-2">
            <ScrollIndicator>
              <div className="si-2"></div>
            </ScrollIndicator>
          </Shadow>
          <Shadow className="sh-3">
            <ScrollIndicator>
              <div className="si-3"></div>
            </ScrollIndicator>
          </Shadow>
        </ScrollIndicatorContainer>
      </HeroInfoFrame>
    </HeroContainer>
  );
}
