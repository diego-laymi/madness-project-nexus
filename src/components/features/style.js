import styled from "styled-components";

export const ScrollContainer = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 1280px) 
  {
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    padding: 0 40px;
  }
`

export const FeatureContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 768px) 
  {
    height: 100vh;
    grid-template-columns: 1fr;
    gap: 20px;

    .title-2{
      display: none;
    }
    .title-3{
      display: none;
    }

    .text-2{
      display: none;
    }
    .text-3{
      display: none;
    }
  }

  @media (min-width: 1280px) 
  {
    grid-template-columns: 1fr 20px 1fr;
    gap: 20px;
  }

  @media (min-width: 1440px) 
  {

  }
`

export const FeatureInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 1280px) 
  {
    height: 100vh;
  }
`

export const FeatureInfoWrapper = styled.div`
  width: 100%;
`

export const ScrollPosition = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  @media (min-width: 1280px) 
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
`

export const SectionTitle = styled.h3`
  font-size: 72px;
  font-weight: 700;
  color: ${(props) => props.theme.black_950};
  text-shadow: ${(props) => props.theme.red_text_neon};
  paint-order: stroke fill;
  -webkit-text-stroke: 1px ${(props) => props.theme.red};
  margin-bottom: 8px;

  @media (min-width: 390px) 
  {
    font-size: 34px;
  }

  @media (min-width: 768px) 
  {
    margin-top: 12px;
    font-size: 48px;
  }

  @media (min-width: 1280px) 
  {
    margin-top: 0;
  }

  @media (min-width: 1440px) 
  {
    font-size: 72px;
  }
`

export const TextHighlight = styled.strong`
  position: relative;
  text-shadow: none;
  background-image: ${(props) => props.theme.gradient};
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 3px #FF0000);
`

export const Title = styled.h1`
  opacity: 0;
  font-size: 32px;
  line-height: 130%;

  @media (min-width: 1280px) 
  {
    font-size: 24px;
  }
`

export const Divider = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;

  span
  {
    height: 2px;
    background-color: ${props => props.theme.red};
  }

  span:nth-child(1)
  {
    width: 9px;
  }
  span:nth-child(2)
  {
    width: 14px;
  }
  span:nth-child(3)
  {
    width: 84px;
  }
`

export const Text = styled.p`
  opacity: 0;
  max-width: 750px;
  height: 150px;
  font-size: 20px;
  line-height:150%;
  color: ${props => props.theme.black_100};

  @media (min-width: 1280px) 
  {
    font-size: 16px;
  }

`


export const PositionButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.red};
  transition: background-color 0.2s linear;

  &:hover
  {
    background-color: ${props => props.theme.red};
  }
`

export const MobileFeatureInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const MobileFeatureInfoWrapper = styled.div`
  h3
  {
    margin-bottom: 8px;
  }

  h1
  {
    opacity: 1;
    margin-bottom: 4px;
    font-size: 20px;
  }

  p
  {
    height: auto;
    font-size: 16px;
    opacity: 1;
  }
`
// FeaturePreviewContainer 
export const FeaturePreviewContainer = styled.div`
  width: 100%;
  overflow: hidden;

  @media (min-width: 1280px) 
  {
    width: 100%;
    overflow: hidden;
    height: 100vh;
  }
`

// Video Container
export const FeaturePreviewWrapper = styled.div`
  height: 0%;
  display: flex;
  align-items: start;
  background-color: transparent;

  @media (min-width: 1280px) 
  {
    height: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;

  }
`

// Video Shape
export const FeatureFirstPreview = styled.div`
  position: relative;
  width: 100%;
  clip-path: polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(50% + 22px) calc(100% - 22px), 50% 100%, 0 100%, 0 22px);
  background-color: red;

  video
  {
    width: 100%;
    height: 100%;
    object-fit: cover;  
    clip-path: polygon(23px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 23px), calc(50% + 21px) calc(100% - 23px), calc(50% - 1px) calc(100% - 1px), 1px calc(100% - 1px), 1px 22px);
  }

  @media (min-width: 768px) 
  {
    opacity: 0;
  }

  @media (min-width: 1280px) 
  {
    display: flex;
    clip-path: polygon(44px 0, 100% 0, 100% calc(100% - 44px), calc(50% + 44px) calc(100% - 44px), 50% 100%, 0 100%, 0 44px);

    video
  {
    clip-path: polygon(44px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 45px), calc(50% + 44px) calc(100% - 45px), calc(50% - 1px) calc(100% - 1px), 1px calc(100% - 1px), 1px 44px);
  }
  }
`
export const FeatureSecondPreview = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  clip-path: polygon(calc(50% + 35px) 22px, calc(50% + 35px + 22px) 0, 100% 0, 100% 100%, calc(50% + 35px + 22px)  100%, calc(50% + 35px) calc(100% - 22px), 0 calc(100% - 22px), 0 22px);
  background-color: red;

  video
  {
    width: 100%;
    height: 100%;
    object-fit: cover;  
    clip-path: polygon(calc(50% + 36px) 23px, calc(50% + 35px + 23px) 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 1px), calc(50% + 35px + 23px)  calc(100% - 1px), calc(50% + 36px) calc(100% - 23px), 1px calc(100% - 23px), 1px 23px);
  }

  @media (min-width: 768px) 
  {
    opacity: 0;
  }

  @media (min-width: 1280px) 
  {
    display: flex;
    clip-path: polygon(calc(50% - 44px) 44px, calc(50%) 0px, 100% 0, 100% 100%, calc(50% + 40px) 100%, calc(50%) calc(100% - 44px), 0 calc(100% - 44px), 0 44px);

    video
    {
      clip-path: polygon(calc(50% - 44px) 45px, calc(50%) 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 1px), calc(50% + 40px) calc(100% - 1px), calc(50%) calc(100% - 45px), 1px calc(100% - 45px), 1px 45px);
    }
  }
`
export const FeatureThirdPreview = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  clip-path: polygon(100% calc(100% - 22px), calc(50% + 70px + 22px) calc(100% - 22px), calc(50% + 70px) 100%, calc(50% - 70px + 22px) 100%, calc(50% - 70px) calc(100% - 22px), 0px calc(100% - 22px), 0 0, calc(50% - 48px - 22px) 0, calc(50% - 48px) 22px, 100% 22px);
  background-color: red;

  video
  {
    width: 100%;
    height: 100%;
    object-fit: cover;  
    clip-path: polygon(calc(100% - 1px) calc(100% - 23px), calc(50% + 70px + 22px) calc(100% - 23px), calc(50% + 70px) calc(100% - 1px), calc(50% - 70px + 22px) calc(100% - 1px), calc(50% - 70px) calc(100% - 23px), 1px calc(100% - 23px), 1px 1px, calc(50% - 48px - 23px) 1px, calc(50% - 49px) 23px, calc(100% - 1px) 23px);
  }

  @media (min-width: 768px) 
  {
    opacity: 0;
  }

  @media (min-width: 1280px) 
  {
    display: flex;
    clip-path: polygon(100% calc(100% - 44px), calc(50% + 20%) calc(100% - 44px), calc(50% + 20% - 44px) 100%, calc(50% - 20% + 44px) 100%, calc(50% - 20%) calc(100% - 44px), 0px calc(100% - 44px), 0 0, calc(50% - 44px - 44px) 0, calc(50% - 48px) 44px, 100% 44px);

    video
    {
      clip-path: polygon(calc(100% - 1px) calc(100% - 45px), calc(50% + 20%) calc(100% - 45px), calc(50% + 20% - 44px) calc(100% - 1px), calc(50% - 20% + 44px) calc(100% - 1px), calc(50% - 20%) calc(100% - 45px), 1px calc(100% - 45px), 1px 1px, calc(50% - 48px - 40px) 1px, calc(50% - 48px) 45px, calc(100% - 1px) 45px);
    }
  }
`

