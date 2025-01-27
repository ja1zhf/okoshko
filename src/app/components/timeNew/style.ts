import styled from "styled-components";

export const TimeDiv = styled.div<{ $width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: ${(props) => props.$width}px;
  overflow-y: scroll;
`;

export const TimeTable = styled.table`
  border-spacing: 0px;
  border-collapse: collapse;
  width: 100%;
`;

export const TableContainer = styled.div`
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
