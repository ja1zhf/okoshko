import styled from "styled-components";

export const TimeDiv = styled.div<{ $width: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  height: ${(props) => props.$width}px;
`;

export const TimeTable = styled.table`
  border-spacing: 0px;
  border-collapse: collapse;
  width: 100%;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px;
`;

export const TimeCell = styled.p<{ $isSelected: boolean; $position: string }>`
  text-align: center;
  background-color: ${(props) => (props.$isSelected ? "#794CC3" : "#f5f4f9")};
  color: ${(props) => (props.$isSelected ? "#f5f4f9" : "#000000")};
  ${(props) =>
    props.$position === "start" &&
    "border-radius: 24px 0px 0px 24px; margin: 6px 0px 6px 6px;"}
  ${(props) =>
    props.$position === "end" &&
    "border-radius: 0px 24px 24px 0px; margin: 6px 6px 6px 0px;"}
  ${(props) => props.$position === "middle" && "margin: 6px 0px;"}
  ${(props) =>
    props.$position === "none" && "border-radius: 24px; margin: 6px;"}
  padding: 8px 0px;
  cursor: pointer;
  user-select: none;
  touch-action: none;
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const TimeInput = styled.input`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(24, 23, 26, 0.12);
  box-sizing: border-box;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline-style: solid;
    outline-color: ${(props) => props.theme.colors.primary}4D;
    outline-width: thick;
  }
`;

export const TimeButton = styled.button`
  display: flex;
  width: 32px;
  flex-shrink: 0;
  height: 32px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  user-select: none;
`;