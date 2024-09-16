import styled from "styled-components";

export const TimeDiv = styled.div<{ $width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: ${(props) => props.$width}px;
  overflow-y: scroll;
`;

export const TimeTitle = styled.h2``;

export const TimeTable = styled.table`
  border-spacing: 12px;
  width: 100%;
`;

export const TableContainer = styled.div`
  width: 100%;
`;

export const TimeCell = styled.td<{ $selected: boolean }>`
  text-align: center;
  background-color: ${(props) => (props.$selected ? "#794CC3" : "#f5f4f9")};
  color: ${(props) => (props.$selected ? "#f5f4f9" : "#000000")};
  border-radius: 24px;
  padding: 8px 0;
  cursor: pointer;
  user-select: none;
  touch-action: none;
`;
