import styled from "styled-components";

export const OrdersPageTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const OrdersListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > div:first-child {
    border: none;
    padding: none;
  }
`;

export const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid rgba(24, 23, 26, 0.12);
  padding-top: 16px;
`;

export const OrderDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

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
`;

export const OrderMasterInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 12px;

    & > img {
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

      & > div {
        display: flex;
        gap: 10px;

        & > div {
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

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    background-color: #e5e5ef;
    border-radius: 20%;

    & > svg {
      width: 25px;
      height: 25px;
      fill: ${(props) => props.theme.colors.black};
    }
  }
`;

export const OrderServicesListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div {
    display: flex;
    justify-content: space-between;

    & > p {
      color: ${(props) => props.theme.colors.black};
      font-feature-settings:
        "liga" off,
        "clig" off;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 125%;
    }

    & > p:last-child {
      text-align: end;
    }
  }
`;

export const OrderButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const OrderCancelButton = styled.button`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  width: 100%;
  padding: 18px;
  border: none;
  border-radius: 2.5em;
  background-color: #f5f5f9;
`;
