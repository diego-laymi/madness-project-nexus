import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  height: 100dvh;
  width: 100%;
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
  overflow: hidden;
`

export const HeroInfoFrame = styled.div`
  position: absolute;
  inset: 0;
  width: calc(100vw - 32px);
  max-width: 1840px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  padding-bottom: 40px;

  @media(min-width: 678px)
  {
    width: calc(100vw - 80px);
    padding-bottom: 40px;
  }
`

export const HeroInfoWrapper = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px; 
  color: ${props => props.theme.black_100};
  z-index: 10;   
  backdrop-filter: blur(3px);
  border-radius: 12px;
`

export const InfoText = styled.div`
  h1
  {
    font-size: 30px;
    text-align: center;
    line-height: 120%;
    font-weight: 800;
    margin-bottom: 12px;
  }

  p
  {
    font-size: 14px;
    text-align: center;
    color: ${props => props.theme.black_100};
  }

  @media(min-width: 678px)
  {
    h1
    {
      font-size: 40px;
      text-align: left;
      margin-bottom: 8px;
    }
    
    p
    {
      font-size: 18px;
      text-align: left;
    }
  }
`

export const InfoActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (min-width: 678px)
  {
    justify-content: start;
  }
`

export const BaseButton = styled.a`
  position: relative;
  border: none;

  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04rem;
  
  transition: background-color 0.2s linear;
  user-select: none;

  @media (min-width: 678px)
  {
    font-size: 18px;
  }
`

export const MainButton = styled(BaseButton)`
  padding: 12px 15.5px;
  background-color: ${props => props.theme.red_transparent};
  background-image: url('./backgrounds/redScanlines.png');

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

export const SecondaryButton = styled(BaseButton)`
  padding: 12px 16px;
  background-color: ${props => props.theme.white_transparent};
  background-image: url('./backgrounds/whiteScanlines.png');
  
  &:hover
  {
    background-color: ${props => props.theme.white_hover};
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

export const ScrollIndicatorContainer = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 12;
  right: 0;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 678px)
  {
    visibility: visible;
  }
`

export const Shadow = styled.div`
`
export const ScrollIndicator = styled.span`
  display: block;
  position: relative;
  width: 30px;
  height: 15px;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  background-color: ${props => props.theme.red};

  div
  {
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(50% calc(100% - 1px), 2px 1px, calc(100% - 2px) 1px);
    background-color: #000000;
  }
`

export const HeroImageFrame = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  overflow: hidden;
  user-select: none;
  z-index: 1;

  img:nth-child(1)
  {
    position: absolute;
    z-index: 1;
    top: 0;
    height: 100%;
    left: 50%;
    transform: translate(-52%);
  }

  img:nth-child(2)
  {
    position: absolute;
    z-index: 2;

    bottom: 180px;
    right: -2px;

    width: 80px;
    height: auto;
  }

  img:nth-child(3)
  {
    position: absolute;
    z-index: 3;

    bottom: 100px;
    right: 50px;

    width: 150px;
    height: auto;
  }

  img:nth-child(4)
  {
    position: absolute;
    z-index: 4;

    bottom: 130px;
    right: 140px;

    width: 170px;
    height: auto;
  }

  img:nth-child(5)
  {
    position: absolute;
    z-index: 5;

    bottom: 70px;
    left: 0px;

    width: 130px;
    height: auto;
  }

  img:nth-child(6)
  {
    position: absolute;
    z-index: 6;

    bottom: 100px;
    right: 200px;

    width: 150px;
    height: auto;
  }

  img:nth-child(7)
  {
    position: absolute;
    z-index: 7;

    bottom: 40px;
    right: -2px;

    width: 130px;
    height: auto;
  }

  img:nth-child(8)
  {
    position: absolute;
    z-index: 8;

    bottom: 0;
    right: 30px;

    width: 220px;
    height: auto;
  }

  img:nth-child(9)
  {
    position: absolute;
    z-index: 9;

    left: 0;
    bottom: 0;

    width: 150px;
    height: auto;
  }

  @media (min-width: 768px)
  {
    img:nth-child(1)
    {
      transform: translate(-50%, -3%);
      scale: 107%;
    }

    img:nth-child(2)
    {
      width: 190px;
    }

    img:nth-child(3)
    {
      right: auto;
      left: 50%;
      width: 300px;
    }

    img:nth-child(4)
    {
      right: auto;
      left: 50%;
      transform: translate(-69%);
      width: 360px;
    }

    img:nth-child(5)
    {
      width: 240px;
    }

    img:nth-child(6)
    {
      right: auto;
      left: 50%;
      transform: translate(-105%);
      width: 290px;
    }

    img:nth-child(7)
    {
      bottom: 0;
      width: 236px;
    }

    img:nth-child(8)
    {
      right: 180px;
      width: 472px;
    }

    img:nth-child(9)
    {
      width: 298px;
    }
  }

  @media (min-width: 1280px){
    z-index: 2;

    img:nth-child(1)
    {
      transform: translate(0%);
      left: auto;
      right: 0;
      width: 990px;
      height: auto;
      scale: 107%;
    }

    img:nth-child(2)
    {
      top: 285px;
      right: -5px;

      width: 260px;
    }

    img:nth-child(3)
    {
      left: auto;
      bottom: auto;
      top: 356px;
      right: 141px;

      width: 312px;
    }

    img:nth-child(4)
    {
      left: auto;
      bottom: auto;
      transform: translate(0%);

      top: 285px;
      right: 370px;
      
      width: 473px;
    }

    img:nth-child(5)
    {
      left: auto;
      bottom: auto;
      top: 380px;
      right: 680px;

      width: 308px;
    }

    img:nth-child(6)
    {
      left: auto;
      bottom: auto;
      transform: translate(0%);
      top: 500px;
      right: 544px;

      width: 323px;
    }

    img:nth-child(7)
    {
      bottom: auto;
      top: 560px;
      right: -5px;

      width: 236px;
    }

    img:nth-child(8)
    {
      right: 128px;
      width: 472px;
    }

    img:nth-child(9)
    {
      left: auto;
      right: 600px;
      width: 280px;
    }    
  }
`
