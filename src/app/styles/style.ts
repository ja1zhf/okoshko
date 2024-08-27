"use client";

import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
`;

export const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
