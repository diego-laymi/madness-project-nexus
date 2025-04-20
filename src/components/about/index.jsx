import { useEffect, useState } from "react";
import {
  AboutContainer,
  AboutWraper,
  ClassicGameImage,
  ContentWrapper,
  GameImage,
  HoverEffet,
  ImageActions,
  ImageButton,
  InfoWrapper,
  MainLink,
  Text,
  Title,
} from "./styles";

export function AboutSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AboutContainer>
      <ContentWrapper>
        <Title>THE GAME</Title>
        <span />
        <AboutWraper>
          <GameImage src="./images/mpn_placeholder.png" />
          <InfoWrapper>
            <Text>
              <p>
                Take control of Hank, Sanford, Deimos, and other iconic
                characters from the world of Madness Combat in a game filled
                with action and brutality. Shoot, stab, strike, cut, and
                dismember bodies in over 16 hours of insane combat.
              </p>
              <br />
              <p>
                Get ready to face chaotic battle arenas, master an insane
                variety of weapons, and push your limits as you dive into a
                world where every choice could be your last.
              </p>
            </Text>
            <ImageActions>
              <ImageButton>
                <span />
                PREVIOUS
              </ImageButton>
              <div>
                <span />
                <ImageButton>
                  <span />
                  NEXT
                </ImageButton>
              </div>
            </ImageActions>
          </InfoWrapper>
        </AboutWraper>
      </ContentWrapper>
      <ContentWrapper id="classic">
        {isMobile ? (
          <>
            <Title variant="left">THE CLASSIC</Title>
            <span />
          </>
        ) : (
          <>
            <span />
            <Title variant="left">THE CLASSIC</Title>
          </>
        )}
        <AboutWraper>
          <InfoWrapper variant="right">
            <Text>
              <p>
                Discover the classic Madness: Project Nexus and delve into the
                origins of this iconic saga, while Madness: Project Nexus offers
                cartoonish graphics and 3D action, Madness: Project Nexus
                (Classic) features episodic gameplay and customization in the
                Arena mode.
              </p>
              <br />
              <p>
                Try the game for free and find out why it remains an essential
                part of the Madness Combat series.
              </p>
            </Text>
            <MainLink
              href="https://www.newgrounds.com/portal/view/592473/"
              target="_blank"
            >
              PLAY ON NEWGROUNDS
              <HoverEffet>
                <span />
                <span />
                <span />
              </HoverEffet>
            </MainLink>
          </InfoWrapper>
          <ClassicGameImage src="./images/classic_placeholder.webp" />
        </AboutWraper>
      </ContentWrapper>
    </AboutContainer>
  );
}
