import {
  Divider,
  FeatureContainer,
  FeatureFirstPreview,
  FeatureInfoContainer,
  FeatureInfoWrapper,
  FeaturePreviewContainer,
  FeaturePreviewWrapper,
  FeatureSecondPreview,
  FeatureThirdPreview,
  MobileFeatureInfoContainer,
  MobileFeatureInfoWrapper,
  PositionButton,
  ScrollContainer,
  ScrollPosition,
  SectionTitle,
  Text,
  TextHighlight,
  Title,
} from "./style";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export function FeatureSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 430);

  function ScrollToFeature(feature) {
    const scrollContainer = document.querySelector("#cont");
    const st = ScrollTrigger.getAll().find(
      (trigger) => trigger.trigger.id === "cont"
    );

    const start = st.start;
    const middle = st.start + scrollContainer.clientHeight * 2;
    const end = st.end;

    if (feature === "campaign") {
      gsap.to(window, {
        scrollTo: start,
        duration: 1,
      });
      return;
    }

    if (feature === "arenacombat") {
      gsap.to(window, {
        scrollTo: middle,
        duration: 1,
      });
      return;
    }

    if (feature === "playground") {
      gsap.to(window, {
        scrollTo: end,
        duration: 1,
      });
      return;
    }
  }

  const scrollTimline = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cont",
        start: "top top",
        scrub: true,
        pin: true,
        end: "bottom+=3000px",
        snap: {
          snapTo: 0.5,
          duration: 0.7,
        },
      },
    });

    timeline.addLabel("campaign");

    timeline.to(".preview-1", { opacity: 0 });
    if (window.innerWidth >= 1280) {
      timeline.to(".desk-prev-1", { opacity: 0, display: "none" }, "<");
    }
    timeline.to(".title-1", { opacity: 0, display: "none" }, "<");
    timeline.to(".text-1", { opacity: 0, display: "none" }, "<");

    timeline.addLabel("arenacombat");
    timeline.to(".preview-2", { opacity: 1 });
    timeline.to(".title-2", { opacity: 1, display: "block" }, "<");
    timeline.to(".text-2", { opacity: 1, display: "block" }, "<");
    timeline.to(".position-2", { backgroundColor: "#FE0101" }, "<");
    timeline.to(".preview-2", { opacity: 0 });
    if (window.innerWidth >= 1280) {
      timeline.to(".desk-prev-2", { display: "none" }, "<");
    }
    timeline.to(".title-2", { opacity: 0, display: "none" }, "<");
    timeline.to(".text-2", { opacity: 0, display: "none" }, "<");

    timeline.addLabel("playground");
    timeline.to(".preview-3", { opacity: 1 });
    timeline.to(".title-3", { opacity: 1, display: "block" }, "<");
    timeline.to(".text-3", { opacity: 1, display: "block" }, "<");
    timeline.to(".position-3", { backgroundColor: "#FE0101" }, "<");
  };

  useGSAP(() => {
    if (isMobile) return;

    gsap.set(".position-1", { backgroundColor: "#ff0000" });
    gsap.set(".preview-1", { opacity: 1 });
    gsap.set(".title-1", { opacity: 1 });
    gsap.set(".text-1", { opacity: 1 });

    scrollTimline();
  }, []);

  useEffect(() => {
    const handleWindowResizing = () => {
      setIsMobile(window.innerWidth < 430);
    };
    window.addEventListener("resize", handleWindowResizing);
    return () => window.removeEventListener("resize", handleWindowResizing);
  }, []);

  return (
    <ScrollContainer id="cont">
      <FeatureContainer>
        {isMobile ? (
          <>
            <MobileFeatureInfoContainer>
              <SectionTitle>
                UNLEASH <TextHighlight>CHAOS</TextHighlight> <br />
                <TextHighlight>AND</TextHighlight> MASTER <br />
                THE <TextHighlight>MADNESS</TextHighlight>
              </SectionTitle>
            </MobileFeatureInfoContainer>
            <MobileFeatureInfoContainer>
              <FeatureFirstPreview>
                <video autoPlay muted loop>
                  <source
                    src="./videos/feature_campaign.webm"
                    type="video/webm"
                  />
                </video>
              </FeatureFirstPreview>
              <MobileFeatureInfoWrapper>
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
              </MobileFeatureInfoWrapper>
            </MobileFeatureInfoContainer>
            <MobileFeatureInfoContainer>
              <FeatureSecondPreview>
                <video autoPlay muted loop>
                  <source
                    src="./videos/feature_arenacombat.webm"
                    type="video/webm"
                  />
                </video>
              </FeatureSecondPreview>
              <MobileFeatureInfoWrapper>
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
              </MobileFeatureInfoWrapper>
            </MobileFeatureInfoContainer>
            <MobileFeatureInfoContainer>
              <FeatureThirdPreview>
                <video autoPlay muted loop>
                  <source
                    src="./videos/feature_playground.webm"
                    type="video/webm"
                  />
                </video>
              </FeatureThirdPreview>
              <MobileFeatureInfoWrapper>
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
              </MobileFeatureInfoWrapper>
            </MobileFeatureInfoContainer>
          </>
        ) : (
          <>
            <FeatureInfoContainer>
              <FeatureInfoWrapper>
                <SectionTitle>
                  UNLEASH <TextHighlight>CHAOS</TextHighlight> <br />
                  <TextHighlight>AND</TextHighlight> MASTER <br />
                  THE <TextHighlight>MADNESS</TextHighlight>
                </SectionTitle>
                <Title className="title-1">STORY CAMPAIGN</Title>
                <Title className="title-2">ARENA COMBAT</Title>
                <Title className="title-3">THE PLAYGROUND</Title>
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
                <Text className="text-2">
                  Create your custom warrior from scratch! Train across
                  specialized skill trees and develop a unique Madness fighter
                  ready to take on endless waves of enemies. Battle through
                  deadly game shows, haunted houses, and high-speed trains,
                  craft your own weapons and upgrade them.
                </Text>
                <Text className="text-3">
                  Take control in a safe combat zone where you call the shots.
                  Watch squads of enemies face off with weapons of your choice —
                  or nothing at all. Or dive into the action yourself and teach
                  them a lesson in a Madness Combat.
                </Text>
              </FeatureInfoWrapper>
            </FeatureInfoContainer>
            <ScrollPosition>
              <PositionButton
                onClick={() => ScrollToFeature("campaign")}
                className="position-1"
              ></PositionButton>
              <PositionButton
                onClick={() => ScrollToFeature("arenacombat")}
                className="position-2"
              ></PositionButton>
              <PositionButton
                onClick={() => ScrollToFeature("playground")}
                className="position-3"
              ></PositionButton>
            </ScrollPosition>
            <FeaturePreviewContainer>
              <FeaturePreviewWrapper className="desk-prev-1">
                <FeatureFirstPreview className="preview-1">
                  <video autoPlay muted loop>
                    <source
                      src="./videos/feature_campaign.webm"
                      type="video/webm"
                    />
                  </video>
                </FeatureFirstPreview>
              </FeaturePreviewWrapper>
              <FeaturePreviewWrapper className="desk-prev-2">
                <FeatureSecondPreview className="preview-2">
                  <video autoPlay muted loop>
                    <source
                      src="./videos/feature_arenacombat.webm"
                      type="video/webm"
                    />
                  </video>
                </FeatureSecondPreview>
              </FeaturePreviewWrapper>
              <FeaturePreviewWrapper className="desk-prev-3">
                <FeatureThirdPreview className="preview-3">
                  <video autoPlay muted loop>
                    <source
                      src="./videos/feature_playground.webm"
                      type="video/webm"
                    />
                  </video>
                </FeatureThirdPreview>
              </FeaturePreviewWrapper>
            </FeaturePreviewContainer>
          </>
        )}
      </FeatureContainer>
    </ScrollContainer>
  );
}
