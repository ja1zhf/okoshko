"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const InputDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{
  $isEmpty: boolean;
  $disabled?: boolean;
  $isEmptyAndFocus: boolean;
}>`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
  width: 100%;
  background-color: ${(props) =>
    props.disabled ? "#8080801A" : "transparent"};
  border: none;
  outline: none;
  padding: 26px 12px 12px 12px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.$isEmpty ? props.theme.colors.red : "rgba(24, 23, 26, 0.12)"};
  box-sizing: border-box;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline-style: solid;
    outline-color: ${(props) => props.theme.colors.primary}4D;
    outline-width: thick;
  }

  &::placeholder {
    color: ${(props) => props.$isEmptyAndFocus && "transparent"};
  }
`;

export const InputLabel = styled(motion.label)<{ $isEmpty: boolean }>`
  position: absolute;
  top: 20px;
  left: 12px;
  color: ${(props) =>
    props.$isEmpty ? props.theme.colors.red : props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  pointer-events: none;
  transform-origin: left;
  transition: padding-left 0.2s ease;
`;
