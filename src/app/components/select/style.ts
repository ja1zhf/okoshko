import styled from "styled-components";

export const SelectLabel = styled.label`
  position: absolute;
  margin: 8px 0px 0px 12px;
  color: ${(props) => props.theme.colors.gray};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const Select = styled.select`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 26px 12px 12px 12px;
  border-radius: 10px;
  border: 1px solid rgba(24, 23, 26, 0.12);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline-style: solid;
    outline-color: ${(props) => props.theme.colors.primary}4D;
    outline-width: thick;
  }
`;
