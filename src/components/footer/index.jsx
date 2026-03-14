import { useMediaQuery } from "react-responsive";
import { DiscordIcon, SteamIcon, TwitterIcon, YouTubeIcon } from "../icons";
import { IconLink } from "../ui/icon-link";
import {
  CopyrightSlot,
  Disclaimer,
  FooterContainer,
  FooterContent,
  GameLogo,
  GameSlot,
  LinksWrapper,
  PillarContainer,
  PillarGroup,
  PillarLeft,
  PillarRight,
  SocialAndDisclamerWrapper,
  SocialSlot,
  Socials,
  SocialWrapper,
  TradeMark,
} from "./styles";

export function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 1279 });
  const isLaptop = useMediaQuery({ minWidth: 1280, maxWidth: 1618 });

  return (
    <FooterContainer>
      <FooterContent>
        {/* Game Info Slot */}
        <GameSlot>
          {isMobile && (
            <PillarContainer>
              <PillarGroup height={170}>
                <PillarLeft />
                <PillarRight />
                <PillarLeft />
              </PillarGroup>
              <PillarGroup height={120}>
                <PillarRight />
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
            </PillarContainer>
          )}

          {!isMobile && (
            <PillarContainer>
              <PillarGroup height={170}>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
              <PillarGroup height={170}>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
              <PillarGroup height={170}>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
              <PillarGroup height={isLaptop ? 120 : 170}>
                <PillarLeft />
                <PillarRight />
              </PillarGroup>
            </PillarContainer>
          )}
          <GameLogo src="/mpn_logo.png" alt="" />
        </GameSlot>

        {/* Pillar Divider on Big Screens */}
        <PillarContainer className="pillar-divider game-part">
          <PillarGroup>
            <PillarLeft />
            <PillarRight />
          </PillarGroup>
        </PillarContainer>

        {/* Copyright Slot on Big Screens */}
        {!isMobile && (
          <CopyrightSlot>
            <PillarContainer>
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
          </CopyrightSlot>
        )}

        {/* Pillar Divider on Big Screens */}
        <PillarContainer className="pillar-divider">
          <PillarGroup>
            <PillarLeft />
            <PillarRight />
          </PillarGroup>
        </PillarContainer>

        {/* Social Slot */}
        <SocialSlot>
          <SocialAndDisclamerWrapper>
            <Socials>
              <PillarContainer>
                <PillarGroup>
                  <PillarLeft />
                  <PillarRight />
                </PillarGroup>
                <PillarGroup>
                  <PillarLeft />
                  <PillarRight />
                </PillarGroup>
              </PillarContainer>
              <SocialWrapper>
                <LinksWrapper>
                  <IconLink
                    href="https://discord.gg/projectnexus"
                    target="_blank"
                  >
                    <DiscordIcon />
                  </IconLink>
                  <IconLink href="https://x.com/MProjectNexus" target="_blank">
                    <TwitterIcon />
                  </IconLink>
                  <IconLink
                    href="https://www.youtube.com/@MADNESSProjectNexus/"
                    target="_blank"
                  >
                    <YouTubeIcon />
                  </IconLink>
                  <IconLink
                    href="https://store.steampowered.com/app/488860/MADNESS_Project_Nexus/"
                    target="_blank"
                  >
                    <SteamIcon />
                  </IconLink>
                </LinksWrapper>
                <PillarContainer>
                  <PillarGroup height={isMobile ? 150 : "100%"}>
                    <PillarLeft />
                    <PillarRight />
                  </PillarGroup>
                  <PillarGroup height={isMobile ? 150 : "100%"}>
                    <PillarLeft />
                    <PillarRight />
                  </PillarGroup>
                </PillarContainer>
              </SocialWrapper>
            </Socials>
            {!isMobile && (
              <Disclaimer>
                Images belong to their respective owners. Website designed by{" "}
                <a href="https://github.com/diego-laymi">@FullMiga</a>. Contact
                for inquiries or removal requests
              </Disclaimer>
            )}
          </SocialAndDisclamerWrapper>
        </SocialSlot>
      </FooterContent>

      {/* Copyright Slot on Mobile */}
      {isMobile && (
        <CopyrightSlot>
          <TradeMark>
            <img src="./gibbingtree_Logo.png" alt="" />
            <p>
              MADNESS: Project Nexus is a trademark <br />
              of GIBBING TREE, LLC. ALL rights reserved.
            </p>
          </TradeMark>
          <Disclaimer>
            Images belong to their respective owners. Website designed by{" "}
            <a href="https://github.com/diego-laymi">@FullMiga</a>. Contact for
            inquiries or removal requests
          </Disclaimer>
        </CopyrightSlot>
      )}
    </FooterContainer>
  );
}
