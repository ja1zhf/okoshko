import styled from "styled-components";

export const IndicatorSpan = styled.span<{$top?: number; $right?: number}>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  top: ${({$top}) => $top ? $top : 0}px;
  right: ${({$right}) => $right ? $right : 0}px;
  background-color:rgb(255, 70, 70);
  color: ${(props) => props.theme.colors.white};
  font-size: 10px;
  border-radius: 100px;
`;