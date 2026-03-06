import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { MainButton, SecondaryButton } from "../../ui/button";
import {
  HeroContainer,
  HeroImageFrame,
  HeroInfoFrame,
  HeroInfoWrapper,
  InfoActions,
  InfoText,
  ScrollIndicator,
  ScrollIndicatorContainer,
} from "./styles";

export function HeroSection() {
  const containerRef = useRef();
  const mouse = {
    x: 0,
    y: 0,
  };

  function parallaxEffect(event) {
    const winWidht = window.innerWidth / 2;
    const winHeight = window.innerWidth / 2;

    mouse.x = event.pageX - winWidht;
    mouse.y = event.pageY - winHeight;

    const mouseX = -(mouse.y / winHeight);
    const mouseY = mouse.x / winWidht;

    gsap.to(".bg", {
      duration: 1,
      rotationX: mouseX * 3,
      rotationY: mouseY * 3,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    gsap.to(".lyr-1", {
      duration: 1,
      rotationX: mouseX * 6,
      rotationY: mouseY * 6,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    gsap.to(".lyr-2", {
      duration: 1,
      rotationX: mouseX * 6,
      rotationY: mouseY * 6,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    gsap.to(".lyr-char", {
      duration: 1,
      rotationX: mouseX * 9,
      rotationY: mouseY * 9,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });
  }

  useGSAP(
    () => {
      // Run hero parallax effect
      const parallaxSection = document.getElementById("parallax");
      parallaxSection.addEventListener("mousemove", parallaxEffect);

      // Run scroll indicator effect
      const scrollIndicatorFillTimeline = gsap.timeline({ repeat: -1 });

      scrollIndicatorFillTimeline
        .to(".fill-1", { backgroundColor: "#FE0101", duration: 0.14 })
        .to(
          ".shadow-1",
          {
            filter: "drop-shadow(0px 0px 3px #FE0101)",
            duration: 0.14,
          },
          "<",
        )
        .to(".shadow-1", {
          filter: "none",
          duration: 0.14,
        })
        .to(".fill-1", { backgroundColor: "#000000", duration: 0.14 }, "<")
        .to(".fill-2", { backgroundColor: "#FE0101", duration: 0.14 }, "<")
        .to(
          ".shadow-2",
          {
            filter: "drop-shadow(0px 0px 3px #FE0101)",
            duration: 0.14,
          },
          "<",
        )
        .to(".shadow-2", {
          filter: "none",
          duration: 0.14,
        })
        .to(".fill-2", { backgroundColor: "#000000", duration: 0.14 }, "<")
        .to(".fill-3", { backgroundColor: "#FE0101", duration: 0.14 }, "<")
        .to(
          ".shadow-3",
          {
            filter: "drop-shadow(0px 0px 3px #FE0101)",
            duration: 0.14,
          },
          "<",
        )
        .to(".shadow-3", {
          filter: "none",
          duration: 0.14,
        })
        .to(".fill-3", { backgroundColor: "#000000", duration: 0.15 }, "<");
    },
    { scope: containerRef },
  );

  return (
    <HeroContainer ref={containerRef}>
      <HeroImageFrame id="parallax">
        <img className="bg" src="/hero/hero_background.webp" alt="" />
        <img className="lyr-1" src="/hero/hero_image-1.webp" alt="" />
        <img className="lyr-char" src="/hero/hero_image-2.webp" alt="" />
        <img className="lyr-char" src="/hero/hero_image-3.webp" alt="" />
        <img className="lyr-1" src="/hero/hero_image-4.webp" alt="" />
        <img className="lyr-char" src="/hero/hero_image-5.webp" alt="" />
        <img className="lyr-2" src="/hero/hero_image-6.webp" alt="" />
        <img className="lyr-2" src="/hero/hero_image-7.webp" alt="" />
        <img className="lyr-2" src="/hero/hero_image-8.webp" alt="" />
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
              START CARNAGE
            </MainButton>
            <SecondaryButton href="#about">WHAT IS MPN</SecondaryButton>
          </InfoActions>
        </HeroInfoWrapper>
        <ScrollIndicatorContainer>
          <div className="shadow-1">
            <ScrollIndicator>
              <div className="fill-1" />
            </ScrollIndicator>
          </div>
          <div className="shadow-2">
            <ScrollIndicator>
              <div className="fill-2" />
            </ScrollIndicator>
          </div>
          <div className="shadow-3">
            <ScrollIndicator>
              <div className="fill-3" />
            </ScrollIndicator>
          </div>
        </ScrollIndicatorContainer>
      </HeroInfoFrame>
    </HeroContainer>
  );
}
