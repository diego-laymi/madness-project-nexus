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
  ImageSlider,
  InfoWrapper,
  MainLink,
  Text,
  Title,
} from "./styles";

import img_0 from "../../../public/images/mpn_Images/0.webp";
import img_1 from "../../../public/images/mpn_Images/1.webp";
import img_10 from "../../../public/images/mpn_Images/10.webp";
import img_11 from "../../../public/images/mpn_Images/11.webp";
import img_2 from "../../../public/images/mpn_Images/2.webp";
import img_3 from "../../../public/images/mpn_Images/3.webp";
import img_4 from "../../../public/images/mpn_Images/4.webp";
import img_5 from "../../../public/images/mpn_Images/5.webp";
import img_6 from "../../../public/images/mpn_Images/6.webp";
import img_7 from "../../../public/images/mpn_Images/7.webp";
import img_8 from "../../../public/images/mpn_Images/8.webp";
import img_9 from "../../../public/images/mpn_Images/9.webp";

export function AboutSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const images = [
    img_0,
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
    img_10,
    img_11,
  ];

  function nextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function prevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AboutContainer id="about">
      <ContentWrapper>
        <Title>THE GAME</Title>
        <span />
        <AboutWraper>
          <ImageSlider>
            {images.map((img) => (
              <GameImage
                src={img}
                key={img}
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            ))}
          </ImageSlider>
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
              <ImageButton onClick={prevImage}>
                <span />
                PREVIOUS
              </ImageButton>
              <div>
                <span />
                <ImageButton onClick={nextImage}>
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
