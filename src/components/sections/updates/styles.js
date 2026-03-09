import styled from "styled-components";

export const UpdatesContainer = styled.section`
  position: relative;
  width: calc(100% - 32px);
  max-width: 1840px;
  margin: 44px auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
  z-index: 3;

  @media (min-width: 1280px) {
    flex-direction: row;
    width: calc(100% - 80px);
    gap: 20px;
    align-items: center;

    div:first-child {
      order: 1;
    }
  }

  @media (min-width: 1430px) {
    align-items: start;
  }
`;

export const Title = styled.h3`
  font-size: 72px;
  font-weight: 700;
  line-height: 70px;
  color: ${(props) => props.theme.black_950};
  text-shadow: ${(props) => props.theme.white_text_neon};
  -webkit-text-stroke: 1px ${(props) => props.theme.white};

  &::selection {
    color: ${(props) => props.theme.black_950};
    background: ${(props) => props.theme.white};
  }

  @media (min-width: 1280px) {
    margin-top: 32px;
  }
`;

export const UpdatesWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const UpdateItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(225, 225, 225, 0.3);

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .coner-1,
  .coner-2,
  .coner-3,
  .coner-4 {
    user-select: none;
    width: 24px;
    height: 24px;
    position: absolute;
  }

  .coner-1 {
    bottom: -2px;
    left: -2px;
  }

  .coner-2 {
    top: -2px;
    left: -2px;
  }

  .coner-3 {
    bottom: -2px;
    right: -2px;
  }

  .coner-4 {
    top: -2px;
    right: -2px;
  }
`;

export const ItemTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  h4 {
    font-size: 24px;
    font-weight: 600;
    line-height: 130%;
    color: ${(props) => props.theme.black_50};
    letter-spacing: 0.03rem;

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    color: ${(props) => props.theme.black_100};
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ImageContainer = styled.div`
  object-fit: cover;
  overflow: hidden;
  border: 1px solid rgba(225, 225, 225, 0.25);
  width: 100%;
  height: 253px;
  user-select: none;

  @media (min-width: 768px) {
    width: 45%;
    height: 253px;
  }

  @media (min-width: 1280px) {
    width: 100%;
    order: 1;
  }

  @media (min-width: 1430px) {
    width: 446px;
    height: 253px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const UpdateLink = styled.a`
  text-decoration: none;
  z-index: 5;
  user-select: text;

  &:hover {
    h4,
    p {
      color: ${(props) => props.theme.red};
      text-decoration: underline;
    }

    ${ImageContainer} {
      border: 1px solid ${(props) => props.theme.red};
    }
  }

  &::selection {
    color: ${(props) => props.theme.black_950};
    background: ${(props) => props.theme.white};
  }
`;

export const Link = styled.a`
  margin-left: auto;
  max-width: fit-content;
  text-align: center;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  user-select: none;

  &:hover {
    div {
      span:nth-child(3) {
        transform: translateX(-232%);
      }

      span:nth-child(2) {
        transform: translateX(-395%);
      }

      span:nth-child(1) {
        transform: translateX(-240%);
      }
    }
  }

  @media (min-width: 1280px) {
    order: 1;
    text-align: right;
  }
`;

export const HoverEffet = styled.div`
  display: flex;
  gap: 5px;

  span {
    background-color: ${(props) => props.theme.red};
    height: 3px;
  }

  span:nth-child(3) {
    transform: translateX(0);
    width: 38px;
    transition: all 0.3s ease-in-out;
  }

  span:nth-child(2) {
    transform: translateX(0);
    width: 8px;
    transition: all 0.4s ease-in-out;
  }

  span:nth-child(1) {
    transform: translateX(0);
    width: 4px;
    transition: all 0.5s ease-in-out;
  }
`;
