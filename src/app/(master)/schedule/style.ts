import styled from "styled-components";

export const SchedulePageTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const ScheduleButton = styled.button<{ $isPrimary?: boolean }>`
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
  background-color: ${(props) =>
    props.$isPrimary ? props.theme.colors.primary : props.theme.colors.gray};
`;

export const DatesDiv = styled.div`
  display: flex;
  gap: 6px;
  padding: 12px 0px;
  overflow: auto;

  & > p {
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.gray};
    color: ${(props) => props.theme.colors.gray};
    text-align: center;
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
  }
`;

export const AppointmentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > h2 {
    color: ${(props) => props.theme.colors.black};
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const AppointmentTimeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  border: none;
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;