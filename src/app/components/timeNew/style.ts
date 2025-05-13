import styled from "styled-components";

export const TimeDiv = styled.div<{ $width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: 4px;
  width: 100%;
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
  gap: 4px;
`;

export const TimeInput = styled.input`
  padding: 10px 14px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
`;

export const TimeButton = styled.button`
  padding: 10px 14px;
  border: none;
  border-radius: 4px;
  width: fit-content;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;