import Link from "next/link";
import styled from "styled-components";

export const RegisterPageTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const RegisterLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  text-decoration: none;
`;

export const NumberLink = styled(Link)`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
