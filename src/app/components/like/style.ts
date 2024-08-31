import styled from "styled-components";

export const LikeButton = styled.button<{ $isActive: boolean }>`
  padding: 0px;
  border: none;
  background-color: transparent;

  & > svg {
    width: 16px;
    height: 16px;
    fill: ${(props) =>
    props.$isActive ? "#DB3A3A" : "rgba(64, 30, 33, 0.24)"};
  }
`;
