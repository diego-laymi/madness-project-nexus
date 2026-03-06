import { MainButtonStyled, SecondaryButtonStyled } from "./styles";

export function MainButton(props) {
  return (
    <MainButtonStyled {...props}>
      <img src="./assets/corners_Red/cornerBottomLeft.png" alt="" />
      <img src="./assets/corners_Red/cornerTopLeft.png" alt="" />
      <img src="./assets/corners_Red/cornerBottomRight.png" alt="" />
      <img src="./assets/corners_Red/cornerTopRight.png" alt="" />
      {props.children}
    </MainButtonStyled>
  );
}

export function SecondaryButton(props) {
  return (
    <SecondaryButtonStyled {...props}>
      <img src="./assets/corners_White/cornerBottomLeft.png" alt="" />
      <img src="./assets/corners_White/cornerTopLeft.png" alt="" />
      <img src="./assets/corners_White/cornerBottomRight.png" alt="" />
      <img src="./assets/corners_White/cornerTopRight.png" alt="" />
      {props.children}
    </SecondaryButtonStyled>
  );
}
