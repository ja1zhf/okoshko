"use client";

import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  gap: 0px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.gray};

  & > p {
    color: ${(props) => props.theme.colors.gray};
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }

  & > input {
    color: ${(props) => props.theme.colors.black};
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 16px;
    font-style: normal;
    font-weight: 450;
    line-height: 150%;
    border: none;
    outline: none;
  }
`;
