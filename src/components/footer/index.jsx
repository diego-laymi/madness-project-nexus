import { useEffect, useState } from "react";
import { DiscordIcon, SteamIcon, TwitterIcon, YouTubeIcon } from "../icons";
import {
  Disclaimer,
  FooterContainer,
  FooterContent,
  GameInfo,
  GameInfoImg,
  GameLink,
  GameLinkPillar,
  GameLinks,
  GameLinksContainer,
  GameTradeMark,
  PillarContainer,
  PillarGroup,
  PillarLeft,
  PillarRight,
  TradeMark,
} from "./styles";

export function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResizing = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResizing);

    return () => window.removeEventListener("resize", handleWindowResizing);
  }, []);
  return (
    <FooterContainer>
      <FooterContent>
        <GameInfo>
          {windowWidth >= 768 && windowWidth < 1280 && (
            <PillarContainer height={220}>
              <PillarGroup>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
              <PillarGroup>
                <PillarLeft />
                <PillarRight heightMod={50} />
              </PillarGroup>
              <PillarGroup pt={50}>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
            </PillarContainer>
          )}

          {windowWidth >= 1280 && (
            <PillarContainer height={172}>
              <PillarGroup>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
              <PillarGroup>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
              <PillarGroup>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
              <PillarGroup>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
            </PillarContainer>
          )}
          <GameInfoImg src="./mpn_Logo.png" />
          {windowWidth >= 768 && windowWidth < 1280 && (
            <>
              <TradeMark>
                <img src="./gibbingtree_Logo.png" alt="" />
                <p>
                  MADNESS: Project Nexus is a trademark <br />
                  of GIBBING TREE, LLC. ALL rights reserved.
                </p>
              </TradeMark>
            </>
          )}
        </GameInfo>

        {windowWidth >= 1800 && (
          <PillarContainer height={359}>
            <PillarGroup>
              <PillarLeft />
              <PillarRight />
            </PillarGroup>
          </PillarContainer>
        )}

        {windowWidth >= 1280 && (
          <GameTradeMark mt={50}>
            <PillarContainer height={172}>
              <PillarGroup>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
              <PillarGroup>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
            </PillarContainer>
            <TradeMark>
              <img src="./gibbingtree_Logo.png" alt="" />
              <p>
                MADNESS: Project Nexus is a trademark <br />
                of GIBBING TREE, LLC. ALL rights reserved.
              </p>
            </TradeMark>
          </GameTradeMark>
        )}

        {windowWidth >= 1800 && (
          <PillarContainer height={359}>
            <PillarGroup>
              <PillarLeft heightMod={50} />
              <PillarRight heightMod={50} />
            </PillarGroup>
          </PillarContainer>
        )}

        <GameLinks>
          <GameLinksContainer mt={windowWidth >= 768 ? "50" : 0}>
            {windowWidth >= 1400 && (
              <PillarContainer>
                <PillarGroup>
                  <PillarLeft />
                  <PillarRight />
                </PillarGroup>
              </PillarContainer>
            )}
            {windowWidth >= 1555 && (
              <PillarContainer>
                <PillarGroup>
                  <PillarLeft />
                  <PillarRight />
                </PillarGroup>
              </PillarContainer>
            )}

            <GameLinkPillar>
              <GameLink href="#">
                <img src="./assets/corners_Red/cornerBottomLeft.png" alt="" />
                <img src="./assets/corners_Red/cornerTopLeft.png" alt="" />
                <img src="./assets/corners_Red/cornerBottomRight.png" alt="" />
                <img src="./assets/corners_Red/cornerTopRight.png" alt="" />
                <DiscordIcon />
              </GameLink>
              <PillarLeft
                height={
                  windowWidth < 768
                    ? "150"
                    : windowWidth >= 768 && windowWidth < 1280
                    ? "237"
                    : windowWidth >= 1280 && "154"
                }
              />
            </GameLinkPillar>
            <GameLinkPillar>
              <GameLink href="#">
                <img src="./assets/corners_Red/cornerBottomLeft.png" alt="" />
                <img src="./assets/corners_Red/cornerTopLeft.png" alt="" />
                <img src="./assets/corners_Red/cornerBottomRight.png" alt="" />
                <img src="./assets/corners_Red/cornerTopRight.png" alt="" />
                <TwitterIcon />
              </GameLink>
              <PillarRight
                height={
                  windowWidth < 768
                    ? "150"
                    : windowWidth >= 768 && windowWidth < 1280
                    ? "237"
                    : windowWidth >= 1280 && "154"
                }
              />
            </GameLinkPillar>
            <GameLinkPillar>
              <GameLink href="#">
                <img src="./assets/corners_Red/cornerBottomLeft.png" alt="" />
                <img src="./assets/corners_Red/cornerTopLeft.png" alt="" />
                <img src="./assets/corners_Red/cornerBottomRight.png" alt="" />
                <img src="./assets/corners_Red/cornerTopRight.png" alt="" />
                <YouTubeIcon />
              </GameLink>
              <PillarLeft
                height={
                  windowWidth < 768
                    ? "150"
                    : windowWidth >= 768 && windowWidth < 1280
                    ? "237"
                    : windowWidth >= 1280 && "154"
                }
              />
            </GameLinkPillar>
            <GameLinkPillar>
              <GameLink href="#">
                <img src="./assets/corners_Red/cornerBottomLeft.png" alt="" />
                <img src="./assets/corners_Red/cornerTopLeft.png" alt="" />
                <img src="./assets/corners_Red/cornerBottomRight.png" alt="" />
                <img src="./assets/corners_Red/cornerTopRight.png" alt="" />
                <SteamIcon />
              </GameLink>
              <PillarRight
                height={
                  windowWidth < 768
                    ? "150"
                    : windowWidth >= 768 && windowWidth < 1280
                    ? "237"
                    : windowWidth >= 1280 && "154"
                }
              />
            </GameLinkPillar>
          </GameLinksContainer>
          {windowWidth >= 768 && (
            <Disclaimer>
              All images used on this page are property of their respective
              copyright holders. If you want your image removed or want to chat,
              please contact us at fullmiga.dev@gmail.com.
            </Disclaimer>
          )}
        </GameLinks>

        {windowWidth < 768 && (
          <TradeMark>
            <img src="./gibbingtree_Logo.png" alt="" />
            <p>
              MADNESS: Project Nexus is a trademark <br />
              of GIBBING TREE, LLC. ALL rights reserved.
            </p>
          </TradeMark>
        )}

        {windowWidth < 768 && (
          <Disclaimer>
            All images used on this page are property of their respective
            copyright holders. If you want your image removed or want to chat,
            please contact us at fullmiga.dev@gmail.com.
          </Disclaimer>
        )}
      </FooterContent>
    </FooterContainer>
  );
}
