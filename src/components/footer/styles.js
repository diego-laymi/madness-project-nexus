import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1840px;
  height: auto;
  margin: 0 auto;
  padding: 0 16px;
`
export const FooterContent = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px)
  {
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 20px;
  }
`

// GameInfo 
export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px)
  {
    max-width: 435px;
  }

  @media (min-width: 1280px)
  {
    max-width: 600px;
  }
`

export const GameInfoImg = styled.img`
  width: 100%;
  height: auto;
`

// GameTrademark
export const GameTradeMark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: ${props => props.mt ? `${props.mt}px` : 'none'};

`

export const TradeMark = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  user-select: none;

  img
  {
    max-width: 277px;
    height: auto;
  }

  p
  {
    max-width:372px;
    font-size: 12px;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
  }
`

// GameLinks
export const GameLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px)
  {
    max-width: 285px;
  }

  @media (min-width: 884px) 
  {
    max-width: none;
	  width: min-content;
    align-items: start;
  }
`

export const GameLinkPillar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const GameLinksContainer = styled.div`
  height: max-content;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: ${props => props.mt ? `${props.mt}px` : 'none'};
`

export const GameLink = styled.a`
  position: relative;
  z-index: 1;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.red_transparent};
  transition: all 0.3s linear;
  user-select: none;  

  &:hover
  {
    background-color: ${props => props.theme.red_hover};
  }

  img:nth-child(1)
  {
    width: 8px;
    height: 8px;

    position: absolute;
    bottom: 0;
    left: 0;
  }

  img:nth-child(2)
  {
    position: absolute;
    width: 8px;
    height: 8px;

    top: 0;
    left: 0;
  }

  img:nth-child(3)
  {
    position: absolute;
    width: 8px;
    height: 8px;

    bottom: 0;
    right: 0;
  }

  img:nth-child(4)
  {
    position: absolute;
    width: 8px;
    height: 8px;

    top: 0;
    right: 0;
  }
`

// Disclaimer
export const Disclaimer = styled.p`
  max-width: 600px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 150%;
  color: ${props => props.theme.black_300};

  @media (min-width: 768px)
  {
    font-size: 14px;
  }

  @media (min-width: 884px)
  {
    text-align: left;
  }

`

// Pillar

export const PillarLeft = styled.span`
  height: ${props => props.height ? `${props.height}px` : props.heightMod ? `calc(100% - ${props.heightMod}px)` : '100%'};
  width: 100%;
  min-width: 60px;
  background-image: ${props => props.theme.pilar_gradient_left};
  clip-path: polygon(100% 100%, 16px 100%, 0 calc(100% - 16px), 0 0, calc(100% - 16px) 0, 100% 16px);

`

export const PillarRight = styled.span`
  height: ${props => props.height ? `${props.height}px` : props.heightMod ? `calc(100% - ${props.heightMod}px)` : '100%'};
  width: 100%;
  min-width: 60px;
  background-image: ${props => props.theme.pilar_gradient_right};
  clip-path: polygon(100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px, 16px 0, 100% 0);
`

export const PillarContainer = styled.div`
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  display: flex;
  gap: 20px;
`

export const PillarGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  padding-top: ${props => props.pt ? `${props.pt}px` : '0'};
`

export const Group = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const PilarGroups = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
`

export const FooterImage = styled.img`
  width: 600px;
  height: auto;

  @media (max-width: 1280px) 
  {
	width: 428px;
  }
`

export const TradeMarkImage = styled.img`
  width: 277px;
  height: auto;
`

export const TabletFooterWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const TabletGameLinks = styled.div`
  height: 360px;
  display: flex;
  gap: 15px;
`

export const TableFooterInfo = styled.div`
  display: flex;
  gap: 15px;
`

// Links
export const TabletGameLogo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const TabletPilarContainer = styled.div`
height: 100%;
  display: flex;
  gap: 15px;
`

export const TabletGameImage = styled.img`
  max-width: 435px;
  height: auto;
`

export const TableLinksContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 15px;
`

// Info
export const TabletTradeMark = styled.div`
  width: 435px;
  display: flex;
  justify-content: center;
`

// Mobile 

export const MobileFooterWrapper = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  gap: 32px;
  margin-top: 48px;
  margin-bottom: 32px;
  padding: 0 16px;
`

export const MibileGameLogo = styled.img`
  width: 100%;
  height: auto;  
`

export const MobileLinksWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`