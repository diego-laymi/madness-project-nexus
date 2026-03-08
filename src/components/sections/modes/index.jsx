import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import {
  DescriptionContainer,
  Divider,
  FirstModePreview,
  ModePreviewWrapper,
  ModesContainer,
  ModesInfoContainer,
  ModesInfoWrapper,
  ModesPreviewContainer,
  PositionButton,
  ScrollContainer,
  ScrollPosition,
  SecondModePreview,
  SectionTitle,
  Text,
  TextHighlight,
  ThirdModePreview,
  Title,
  TitleContainer,
} from "./style";

export function ModesSections() {
  const modeRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 1279 });

  function ScrollToMode(mode) {
    const st = ScrollTrigger.getAll().find(
      (trigger) => trigger.trigger === modeRef.current,
    );

    const start = st.start;
    const end = st.end;
    const totalScroll = end - start;

    switch (mode) {
      case "campaign":
        gsap.to(window, {
          scrollTo: start,
          duration: 1,
        });
        break;
      case "arenacombat":
        gsap.to(window, {
          scrollTo: start + totalScroll * 0.5,
          duration: 1,
        });
        break;
      case "playground":
        gsap.to(window, {
          scrollTo: end,
          duration: 1,
        });
        break;
      default:
        break;
    }
  }

  const scrollTimeline = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: modeRef.current,
        start: "top top",
        scrub: true,
        pin: true,
        end: "bottom+=3000px",
        snap: {
          snapTo: 0.5,
          duration: 2,
        },
      },
    });

    timeline
      .to(".preview-container-1", {
        opacity: 0,
        duration: 2,
        display: "none",
        ease: "power2.inOut",
      })
      .to(
        ".preview-1",
        {
          y: -200,
          duration: 2,
          ease: "power2.inOut",
        },
        "<",
      )
      .fromTo(
        ".preview-title-1, .description-1",
        {
          yPercent: 0,
          opacity: 1,
        },
        {
          yPercent: -30,
          opacity: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "<",
      )
      .fromTo(
        ".preview-2",
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.inOut",
        },
      )
      .fromTo(
        ".preview-title-2, .description-2",
        {
          yPercent: -20,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,

          duration: 2,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(".mode-2", { backgroundColor: "#FE0101" }, "<")
      .to(".preview-container-2", {
        opacity: 0,
        duration: 2,
        display: "none",
        ease: "power2.inOut",
      })
      .to(
        ".preview-2",
        {
          y: -200,
          duration: 2,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".preview-title-2, .description-2",
        {
          yPercent: -20,
          opacity: 0,

          duration: 2,
          ease: "power2.inOut",
        },
        "<",
      )
      .fromTo(
        ".preview-3",
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.inOut",
        },
      )
      .fromTo(
        ".preview-title-3, .description-3",
        {
          yPercent: -20,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,

          duration: 2,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(".mode-3", { backgroundColor: "#FE0101" }, "<");
  };

  useGSAP(
    () => {
      if (isMobile) return;

      // Set first mode preview
      gsap.set(".mode-1", { backgroundColor: "#FE0101" });
      gsap.set(".preview-1", { opacity: 1 });
      gsap.set(".preview-title-1, .description-1", { opacity: 1 });

      // Highlight title animation looop
      const highlightTextTimeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });
      highlightTextTimeline.fromTo(
        ".highlight",
        {
          opacity: 0.65,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
      );

      scrollTimeline();
    },
    { scope: modeRef },
  );

  return (
    <ScrollContainer ref={modeRef}>
      <ModesContainer>
        {isMobile ? (
          <>
            <ModesInfoContainer>
              <SectionTitle>
                UNLEASH <TextHighlight>CHAOS</TextHighlight> <br />
                <TextHighlight>AND</TextHighlight> MASTER <br />
                THE <TextHighlight>MADNESS</TextHighlight>
              </SectionTitle>
            </ModesInfoContainer>
            <ModesInfoContainer>
              <FirstModePreview>
                <video autoPlay muted loop>
                  <source
                    src="/videos/feature_campaign.webm"
                    type="video/webm"
                  />
                </video>
              </FirstModePreview>
              <ModesInfoWrapper>
                <Title className="title-1">CAMPAIGN</Title>
                <Divider>
                  <span className="bar-1" />
                  <span className="bar-2" />
                  <span className="bar-3" />
                </Divider>
                <Text className="text-1">
                  Take the reins of the antiheroes of the Madness universe!
                  Infiltrate fortified bases, survive cultist-infested tunnels,
                  fight dynamite-wielding cannibal bandits, and face towering
                  Mag Agents over three times your size, all while uncovering
                  the dark secrets of Project Nexus itself.
                </Text>
              </ModesInfoWrapper>
            </ModesInfoContainer>
            <ModesInfoContainer>
              <SecondModePreview>
                <video autoPlay muted loop>
                  <source
                    src="/videos/feature_arenacombat.webm"
                    type="video/webm"
                  />
                </video>
              </SecondModePreview>
              <ModesInfoWrapper>
                <Title className="title-1">ARENA COMBAT</Title>
                <Divider>
                  <span className="bar-1" />
                  <span className="bar-2" />
                  <span className="bar-3" />
                </Divider>
                <Text className="text-1">
                  Create your custom warrior from scratch! Train across
                  specialized skill trees and develop a unique Madness fighter
                  ready to take on endless waves of enemies. Battle through
                  deadly game shows, haunted houses, and high-speed trains,
                  craft your own weapons and upgrade them.
                </Text>
              </ModesInfoWrapper>
            </ModesInfoContainer>
            <ModesInfoContainer>
              <ThirdModePreview>
                <video autoPlay muted loop>
                  <source
                    src="/videos/feature_playground.webm"
                    type="video/webm"
                  />
                </video>
              </ThirdModePreview>
              <ModesInfoWrapper>
                <Title className="title-1">THE PLAYGROUND</Title>
                <Divider>
                  <span className="bar-1" />
                  <span className="bar-2" />
                  <span className="bar-3" />
                </Divider>
                <Text className="text-1">
                  Take control in a safe combat zone where you call the shots.
                  Watch squads of enemies face off with weapons of your choice —
                  or nothing at all. Or dive into the action yourself and teach
                  them a lesson in a Madness Combat.
                </Text>
              </ModesInfoWrapper>
            </ModesInfoContainer>
          </>
        ) : (
          <>
            <ModesInfoContainer>
              <ModesInfoWrapper>
                <SectionTitle>
                  UNLEASH{" "}
                  <TextHighlight className="highlight">CHAOS</TextHighlight>{" "}
                  <br />
                  <TextHighlight className="highlight">AND</TextHighlight>{" "}
                  MASTER <br />
                  THE{" "}
                  <TextHighlight className="highlight">MADNESS</TextHighlight>
                </SectionTitle>
                <TitleContainer>
                  <Title className="preview-title-1">STORY CAMPAIGN</Title>
                  <Title className="preview-title-2">ARENA COMBAT</Title>
                  <Title className="preview-title-3">THE PLAYGROUND</Title>
                </TitleContainer>
                <Divider className="divider">
                  <span className="bar" />
                  <span className="bar" />
                  <span className="bar" />
                </Divider>
                <DescriptionContainer>
                  <Text className="description-1">
                    Take the reins of the antiheroes of the Madness universe!
                    Infiltrate fortified bases, survive cultist-infested
                    tunnels, fight dynamite-wielding cannibal bandits, and face
                    towering Mag Agents over three times your size, all while
                    uncovering the dark secrets of Project Nexus itself.
                  </Text>
                  <Text className="description-2">
                    Create your custom warrior from scratch! Train across
                    specialized skill trees and develop a unique Madness fighter
                    ready to take on endless waves of enemies. Battle through
                    deadly game shows, haunted houses, and high-speed trains,
                    craft your own weapons and upgrade them.
                  </Text>
                  <Text className="description-3">
                    Take control in a safe combat zone where you call the shots.
                    Watch squads of enemies face off with weapons of your choice
                    — or nothing at all. Or dive into the action yourself and
                    teach them a lesson in a Madness Combat.
                  </Text>
                </DescriptionContainer>
              </ModesInfoWrapper>
            </ModesInfoContainer>
            <ScrollPosition>
              <PositionButton
                onClick={() => ScrollToMode("campaign")}
                className="mode-1"
              />
              <PositionButton
                onClick={() => ScrollToMode("arenacombat")}
                className="mode-2"
              />
              <PositionButton
                onClick={() => ScrollToMode("playground")}
                className="mode-3"
              />
            </ScrollPosition>
            <ModesPreviewContainer>
              <ModePreviewWrapper className="preview-container-1">
                <FirstModePreview className="preview-1">
                  <video autoPlay muted loop>
                    <source
                      src="./videos/feature_campaign.webm"
                      type="video/webm"
                    />
                  </video>
                </FirstModePreview>
              </ModePreviewWrapper>
              <ModePreviewWrapper className="preview-container-2">
                <SecondModePreview className="preview-2">
                  <video autoPlay muted loop>
                    <source
                      src="./videos/feature_arenacombat.webm"
                      type="video/webm"
                    />
                  </video>
                </SecondModePreview>
              </ModePreviewWrapper>
              <ModePreviewWrapper className="preview-container-3">
                <ThirdModePreview className="preview-3">
                  <video autoPlay muted loop>
                    <source
                      src="./videos/feature_playground.webm"
                      type="video/webm"
                    />
                  </video>
                </ThirdModePreview>
              </ModePreviewWrapper>
            </ModesPreviewContainer>
          </>
        )}
      </ModesContainer>
    </ScrollContainer>
  );
}
