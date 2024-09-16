import styled from "styled-components";

export const ServicesPageTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const ServicesButton = styled.button`
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
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  border: none;
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ServicesTable = styled.table`
  & > thead {
    background-color: ${(props) => props.theme.colors.primary}CC;
    color: ${(props) => props.theme.colors.white};

    & > tr th:first-child {
      text-align: start;
    }
  }

  & > tbody {
    & > tr {
      background-color: ${(props) => props.theme.colors.primary}1A;

      & > td:first-child {
        text-align: start;
      }
    }

    & > tr:nth-child(2n) {
      background-color: ${(props) => props.theme.colors.primary}33;
    }
  }

  @media (max-width: 420px) {
    font-size: 14px;
  }

  @media (max-width: 390px) {
    font-size: 12px;
  }

  @media (max-width: 355px) {
    font-size: 10px;
  }
`;

export const ServicesTitleCell = styled.th`
  text-align: end;
  padding: 6px;
`;

export const ServicesCell = styled.td`
  text-align: end;
  padding: 6px;
`;

export const ServiceButtonDiv = styled.div`
  display: flex;
  gap: 4px;
`;

export const ServiceButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0px;

  & > svg {
    width: 18px;
    height: 18px;
  }
`;

export const ServicesPriceDiv = styled.div`
  display: flex;
  gap: 4px;
`;
