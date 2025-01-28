import styled from "styled-components";

export const PopupTitle = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const Button = styled.label`
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  padding: 18px;
  border: none;
  border-radius: 2.5em;
  background-color: #f5f5f9;
  width: 200px;
  text-align: center;
`;

export const ServicesTypeButton = styled.button<{ $isActive: boolean }>`
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary : "#f5f5f9"};
  color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.black};
  padding: 2px 4px;
  border: none;
  border-radius: 2.5em;
`;
