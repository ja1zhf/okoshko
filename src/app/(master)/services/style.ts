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

export const ServicesListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > button {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 12px;
    border: none;
    border-radius: 16px;
    background-color: #F5F5F9;

    & > .info {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 2px;

      & > h3 {
        color: ${(props) => props.theme.colors.black};
        font-feature-settings:
          "liga" off,
          "clig" off;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%;
        transition: color 0.2s ease;
        text-align: start;
      }

      & > p {
        color: ${(props) => props.theme.colors.black};
        font-feature-settings:
          "liga" off,
          "clig" off;
        font-size: 16px;
        font-style: normal;
        font-weight: 450;
        line-height: 150%;
        transition: color 0.2s ease;
      }

      & > .photos {
        display: flex;
        gap: 4px;

        & > img {
          border-radius: 6px;
        }
      }
    }

    & > .buttons {
      display: flex;
      gap: 8px;
    }
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
  justify-content: space-between;
`;

export const ServicesTypesDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

  }

  .submit {
    margin-left: 16px;
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    padding: 6px 12px;
    border: none;
    border-radius: 2.5em;
    height: fit-content;
  }
`;