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
