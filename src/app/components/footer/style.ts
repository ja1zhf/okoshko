import Link from "next/link";
import styled from "styled-components";

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.grayDark};
  height: 100%;
  padding: 40px 20px 20px 20px;
`;

export const FooterLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
  width: fit-content;
  text-decoration: none;
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
`;

export const FooterBlockDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterLineDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(220, 218, 224, 0.4);
`;
