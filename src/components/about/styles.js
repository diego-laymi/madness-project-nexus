import styled from "styled-components";

export const AboutContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 44px 0;
  width: calc(100% - 32px);
  max-width: 1840px;
  margin: 0 auto;
  gap: 60px;
  
  @media (min-width: 768px) 
  {
    padding: 20px;
    width: calc(100% - 21px);
  }

  @media (min-width: 1280px) 
  {
    padding: 20px;
    width: calc(100% - 80px);
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 8px;

  @media (min-width: 390px) 
  {
    gap: 16px;
  }

  @media (min-width: 1280px) 
  {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 20px;
  }

`

export const AboutWraper = styled.div`
  column-span: all;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1280px) 
  {
    grid-column: 1 / -1;
    flex-direction: row;
  }
`

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props => props.variant === 'right' ? 'end' : 'auto'};
  gap: 20px;

  @media (min-width: 1280px) 
  {
    > div
    {
      text-align: ${props => props.variant === "right" ? "right" : 'auto'};
      align-self: ${props => props.variant === "right" ? "end" : 'start'};
    } 
  }
`
export const GameImage = styled.img`
  flex: 1;  
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9; 
  user-select: none;
  border: 1px solid ${props => props.theme.red};
  object-fit: contain;
`

export const ClassicGameImage = styled.img`
  flex: 1;  
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9; 
  user-select: none;
  order: -1;
  border: 1px solid ${props => props.theme.red};
  object-fit: contain;

  @media (min-width: 1280px) 
  {
    flex: 1;  
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9; 
    user-select: none;
    order: 1;
  }
`

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  line-height: 42px;
  color: ${props => props.theme.black_950};
  text-shadow: ${props => props.theme.red_text_neon};
  -webkit-text-stroke: 1px ${props => props.theme.red};

  @media (min-width: 390px) 
  {
    font-size: 45px;
    line-height: 13px;
  }

  @media (min-width: 768px) 
  {
    font-size: 80px;
    line-height: 58px;
  }

  @media (min-width: 1280px) 
  {
    font-size: 80px;
    line-height: 75px;
    text-align: ${props => props.variant === "left" ? 'left' : 'right'};
  }

  @media (min-width: 1440px) 
  {
    font-size: 80px;
  }
`

export const Text = styled.div`
  font-size: 16px;
  width: 100%;

  @media (min-width: 768px) 
  {
    font-size: 18px;
    align-self: start;
  }

  @media (min-width: 1280px) 
  {
    font-size: 18px;
    width: 100%;
    max-width: 755px;
  }

  @media (min-width: 1440px) 
  {
    font-size: 20px;
  }
`

export const ImageActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  gap: 8px;

  > button 
  {
    span
    {
      order: 1;
    }
  }

  div
  {
    display: flex;
    align-items: end;
    gap: 8px;

    > span
    {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: ${props => props.theme.red};
    }
  }

  @media (min-width: 1280px) 
  {
    flex-direction: column;
    align-items: start;

    > button 
    {
      span
      {
        order: 0;
      }
    }   
  }
`

export const ImageButton = styled.button`
  height: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  border: none;
  width: max-content;

  color: ${props => props.theme.black_50};
  font-weight: 500;

  span
  {
    background-color: ${props => props.theme.black_950};
    width: 16px;
    height: 16px;
    border: 1px solid ${props => props.theme.red};
    transition: background-color 0.3s linear;
  }

  &:hover
  {
    span
    {
      background-color: ${props => props.theme.red};
    }
  }
`

export const MainLink = styled.a`
  z-index: 11;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  user-select: none;

  &:hover
  {
    div
    {
      span:nth-child(1)
      {
        transform: translateX(0);
      }

      span:nth-child(2)
      {
        transform: translateX(0);
      }

      span:nth-child(3)
      {
        transform: translateX(0);
      }
    }
  }
`

export const HoverEffet = styled.div`
  display: flex;
  gap: 5px;

  span
  {
    background-color: ${props => props.theme.red};
    height: 3px;
  }

  span:nth-child(1)
  {
    transform: translateX(586%);
    width: 38px;
    transition: all 0.6s ease-in-out;
  }

  span:nth-child(2)
  {
    transform: translateX(2088%);
    width: 8px;
    transition: all 0.4s ease-in-out;
  }

  span:nth-child(3)
  {
    transform: translateX(3614%);
    width: 4px;
    transition: all 0.2s ease-in-out;
  }
`