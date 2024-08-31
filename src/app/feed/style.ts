"use client";

import styled from "styled-components";

export const FeedTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const FeedHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeedFilterButton = styled.button`
  border: none;
  padding: 0px;
  background-color: transparent;
`;

export const MastersListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  & > div:first-child {
    border: none;
    padding: 0px;
  }
`;

export const MasterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 18px;
  border-top: 1px solid rgba(24, 23, 26, 0.12);
`;

export const MasterInfoDiv = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;

  & > a img {
    border-radius: 20%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    & > h3 {
      color: ${(props) => props.theme.colors.black};
      font-feature-settings:
        "liga" off,
        "clig" off;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 125%;
    }

    & > p {
      color: ${(props) => props.theme.colors.gray};
      font-feature-settings:
        "liga" off,
        "clig" off;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 125%;
    }

    & > div {
      display: flex;
      gap: 8px;

      & > .scores {
        display: flex;
        gap: 2px;

        & > svg {
          width: 14px;
          height: 14px;
          fill: #bdae95;
        }

        & > p {
          color: #bdae95;
          font-feature-settings:
            "liga" off,
            "clig" off;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 125%;
        }
      }

      & > .reviews {
        & > p {
          color: ${(props) => props.theme.colors.primary};
          font-feature-settings:
            "liga" off,
            "clig" off;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 125%;
        }
      }
    }
  }
`;

export const MasterLikeDiv = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const MasterServicesDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div {
    display: flex;
    justify-content: space-between;

    & > a {
      text-decoration: none;

      & > h2 {
        color: ${(props) => props.theme.colors.primary};
        font-feature-settings:
          "liga" off,
          "clig" off;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 125%;
      }
    }

    & > p {
      color: ${(props) => props.theme.colors.black};
      font-feature-settings:
        "liga" off,
        "clig" off;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 125%;
    }
  }

  & > a {
    text-decoration: none;
    width: fit-content;

    p {
      color: ${(props) => props.theme.colors.primary};
      font-feature-settings:
        "liga" off,
        "clig" off;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 125%;
    }
  }
`;

export const FeedPageCountDiv = styled.div`
  display: flex;
  gap: 36px;
  justify-content: center;
  padding: 24px 0px;

  & > a {
    color: ${(props) => props.theme.colors.primary};
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    text-decoration: none;
  }
`;
