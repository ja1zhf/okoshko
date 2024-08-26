import Link from "next/link";
import styled from "styled-components";

export const CategoryPlateLink = styled(Link)<{ $url: string }>`
  text-decoration: none;
  aspect-ratio: 69 / 64;
  padding: 12px 10px;
  border-radius: 20px;
  background: url(${(props) => props.$url});
  background-size: cover;
`;

export const CategoryPlateTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
`;

export const CategoryPlateDescription = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.4px;
`;
