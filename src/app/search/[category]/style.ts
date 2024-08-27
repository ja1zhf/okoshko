"use client";

import Link from "next/link";
import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & > div {
    width: 100%;
  }

  & > div h2 {
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

export const CategorySearchButton = styled.button`
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  border: none;
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.primary};
`;
