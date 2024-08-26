"use client";

import Link from "next/link";
import styled from "styled-components";

export const CategorySearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 16px 20px;
`;

export const CategoryInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CategorySearchBackLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
  width: fit-content;
`;

export const CategorySearchTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const CategoryDateAndBlockDiv = styled.div`
  & > h2 {
    color: ${(props) => props.theme.colors.black};
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  }
`;
