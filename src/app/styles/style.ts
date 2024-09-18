"use client";

import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  position: relative;
  top: 20px;
  margin-top: -20px;
`;

export const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 400px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 16px 20px;
`;

export const CategoryBlockDiv = styled.div`
  height: 100%;
  background-color: #f5f5f9;
  border-radius: 20px;
`;

export const CategoryPlateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 0px 16px;
  border-radius: 20px;
`;

export const PageDarkOverlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #00000033;
  z-index: 2;
  touch-action: none;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  border: none;
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const PopupDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  width: 85%;
  padding: 24px;
`;

export const NotFoundTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings: "liga" off, "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const NotFoundBackLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-feature-settings: "liga" off, "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  text-decoration: none;
`;
