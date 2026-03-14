import styled from "styled-components";

export const GameLink = styled.a`
  position: relative;
  z-index: 1;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.theme.red_transparent};
  transition: all 0.3s linear;
  user-select: none;

  &:hover {
    background-color: ${(props) => props.theme.red_hover};
  }

  img:nth-child(1) {
    width: 8px;
    height: 8px;

    position: absolute;
    bottom: 0;
    left: 0;
  }

  img:nth-child(2) {
    position: absolute;
    width: 8px;
    height: 8px;

    top: 0;
    left: 0;
  }

  img:nth-child(3) {
    position: absolute;
    width: 8px;
    height: 8px;

    bottom: 0;
    right: 0;
  }

  img:nth-child(4) {
    position: absolute;
    width: 8px;
    height: 8px;

    top: 0;
    right: 0;
  }
`;
