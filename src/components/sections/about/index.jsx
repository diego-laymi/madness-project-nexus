import { useState } from "react";
import { RedBackground } from "../../../styles";
import { RedDividerLeft, RedDividerRight } from "../../dividers";
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
  Link,
  Text,
  Title,
} from "./styles";

export function AboutSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    {
      id: 1,
      img_url: "./images/game_images/0.webp",
    },
    {
      id: 2,
      img_url: "./images/game_images/1.webp",
    },
    {
      id: 3,
      img_url: "./images/game_images/2.webp",
    },
    {
      id: 4,
      img_url: "./images/game_images/3.webp",
    },
    {
      id: 5,
      img_url: "./images/game_images/4.webp",
    },
    {
      id: 6,
      img_url: "./images/game_images/5.webp",
    },
    {
      id: 7,
      img_url: "./images/game_images/6.webp",
    },
    {
      id: 8,
      img_url: "./images/game_images/7.webp",
    },
    {
      id: 9,
      img_url: "./images/game_images/8.webp",
    },
    {
      id: 10,
      img_url: "./images/game_images/9.webp",
    },
    {
      id: 11,
      img_url: "./images/game_images/10.webp",
    },
    {
      id: 12,
      img_url: "./images/game_images/11.webp",
    },
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

  return (
    <RedBackground>
      <RedDividerLeft />
      <AboutContainer id="about">
        <ContentWrapper>
          <Title>THE GAME</Title>
          <AboutWraper>
            <ImageSlider>
              {images.map((img) => (
                <GameImage
                  src={img.img_url}
                  key={img.id}
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
          <span />
          <Title variant="left">THE CLASSIC</Title>
          <AboutWraper>
            <InfoWrapper variant="right">
              <Text>
                <p>
                  Discover the classic Madness: Project Nexus and delve into the
                  origins of this iconic saga, while Madness: Project Nexus
                  offers cartoonish graphics and 3D action, Madness: Project
                  Nexus (Classic) features episodic gameplay and customization
                  in the Arena mode.
                </p>
                <br />
                <p>
                  Try the game for free and find out why it remains an essential
                  part of the Madness Combat series.
                </p>
              </Text>
              <Link
                href="https://www.newgrounds.com/portal/view/592473/"
                target="_blank"
              >
                PLAY ON NEWGROUNDS
                <HoverEffet>
                  <span />
                  <span />
                  <span />
                </HoverEffet>
              </Link>
            </InfoWrapper>
            <ClassicGameImage src="./images/classic_placeholder.webp" />
          </AboutWraper>
        </ContentWrapper>
      </AboutContainer>
      <RedDividerRight />
    </RedBackground>
  );
}
