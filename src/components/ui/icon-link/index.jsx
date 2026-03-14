import { GameLink } from "./styles";

export function IconLink(props) {
  return (
    <GameLink {...props}>
      <img src="/assets/corners_Red/cornerBottomLeft.png" alt="" />
      <img src="/assets/corners_Red/cornerTopLeft.png" alt="" />
      <img src="/assets/corners_Red/cornerBottomRight.png" alt="" />
      <img src="/assets/corners_Red/cornerTopRight.png" alt="" />
      {props.children}
    </GameLink>
  );
}
