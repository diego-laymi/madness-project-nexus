import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
`

export const HeroImageFrame = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  overflow-y: hidden;
  user-select: none;

  img:nth-child(1)
  {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    width: auto;
    height: 1405px;

    /* width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top; */
  }

  img:nth-child(2)
  {
    position: absolute;
    z-index: 2;

    top: 283px;
    right: 0;

    width: 261px;
    height: 554px;
  }
  img:nth-child(3)
  {
    position: absolute;
    z-index: 3;

    top: 356px;
    right: 141px;

    width: 312px;
    height: 473px;
  }
  img:nth-child(4)
  {
    position: absolute;
    z-index: 4;

    top: 285px;
    right: 370px;

    width: 473px;
    height: 661px;
  }
  img:nth-child(5)
  {
    position: absolute;
    z-index: 5;

    top: 380px;
    right: 680px;

    width: 308px;
    height: 610px;
  }
  img:nth-child(6)
  {
    position: absolute;
    z-index: 6;

    top: 540px;
    right: 544px;

    width: 323px;
    height: 425px;
  }
  img:nth-child(7)
  {
    position: absolute;
    z-index: 7;

    top: 560px;
    right: 0;

    width: 236px;
    height: 446px;
  }
  img:nth-child(8)
  {
    position: absolute;
    z-index: 8;

    bottom: 0;
    right: 128px;

    width: 472px;
    height: 340px;
  }
  img:nth-child(9)
  {
    position: absolute;
    z-index: 9;

    right: 650px;
    bottom: 0;

    width: 298px;
    height: 516px;
  }
`

export const HeroInfoFrame = styled.div`
  position: absolute;
  z-index: 10;
  left: 40px;
  bottom: 40px;
  width: 100%;
  max-width: 650px;

  display: flex;
  flex-direction: column;
  gap: 20px; 

  color: ${props => props.theme.black_100};  
`
export const InfoText = styled.div`
  h1
  {
    font-size: 40px;
    line-height: 120%;
    font-weight: 800;
    margin-bottom: 6px;
  }

  p
  {
    font-size: 18px;
    color: ${props => props.theme.black_100};
  }
`

export const InfoActions = styled.div`
  display: flex;
  gap: 20px;
`

export const BaseButton = styled.a`
  position: relative;
  border: none;

  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.04rem;
  
  transition: background-color 0.2s linear;
  user-select: none;
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