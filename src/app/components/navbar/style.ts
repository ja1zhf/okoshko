"use client";

import Link from "next/link";
import styled from "styled-components";

export const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  height: fit-content;
`;

export const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const AppTitle = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.8px;
  text-decoration: none;
`;

export const NavbarText = styled.p`
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
`;
