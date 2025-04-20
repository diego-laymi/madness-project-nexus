import styled from "styled-components";

export const DividerContainer = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    z-index: 10;
  }
`;
