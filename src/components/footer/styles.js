import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  padding: 0px 20px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const PillarLeft = styled.span`
  width: 100%;
  min-width: 60px;
  background-image: ${(props) => props.theme.pilar_gradient_left};
  clip-path: polygon(
    100% 100%,
    16px 100%,
    0 calc(100% - 16px),
    0 0,
    calc(100% - 16px) 0,
    100% 16px
  );
`;

export const PillarRight = styled.span`
  height: 100%;
  width: 100%;
  min-width: 60px;
  background-image: ${(props) => props.theme.pilar_gradient_right};
  clip-path: polygon(
    100% calc(100% - 16px),
    calc(100% - 16px) 100%,
    0 100%,
    0 16px,
    16px 0,
    100% 0
  );
`;

export const PillarGroup = styled.div`
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  display: flex;
  gap: 16px;
`;

export const PillarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  height: stretch;
`;

// Footer Container
export const FooterContent = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 3;

  .game-part {
    margin-top: -50px;
  }

  > .pillar-divider {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1900px) {
    > .pillar-divider {
      display: flex;
    }
  }
`;

// Game Infor Slot
export const GameSlot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
  gap: 20px;

  ${PillarContainer} {
    display: none;
  }

  @media (min-width: 768px) {
    ${PillarContainer} {
      display: flex;
      margin-top: -50px;
    }
  }

  @media (min-width: 768px) {
    ${PillarContainer} {
      display: flex;
      margin-top: -50px;
    }
  }
`;

export const GameLogo = styled.img`
  height: auto;
  width: 100%;
  max-width: 440px;

  @media (min-width: 1280px) {
    max-width: 592px;
  }
`;

export const Disclaimer = styled.p`
  max-width: 288px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 150%;
  color: ${(props) => props.theme.black_300};

  a {
    color: ${(props) => props.theme.white};

    &:hover {
      color: ${(props) => props.theme.red};
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1618px) {
    max-width: 596px;
    text-align: left;
  }
`;

// Copyright Slot
export const CopyrightSlot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  height: stretch;
  width: 300px;

  @media (min-width: 768px) {
    width: auto;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    width: 288px;
  }
`;

export const TradeMark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  user-select: none;
  width: 100%;

  img {
    max-width: 277px;
    height: auto;
  }

  p {
    max-width: 372px;
    font-size: 12px;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 440px;
  }

  @media (min-width: 1280px) {
    width: 100%;
    max-width: 592px;
  }
`;

// Social Slot
export const SocialSlot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: stretch;

  .pillar-container: {
    margin-top: -50px;
  }
`;

export const SocialAndDisclamerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  > ${PillarContainer} {
    display: none;
  }

  @media (min-width: 768px) {
    ${PillarGroup} {
      height: 100%;
    }
  }

  @media (min-width: 1280px) {
    flex-direction: row;
  }

  @media (min-width: 1618px) {
    > ${PillarContainer} {
      display: flex;
    }
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
