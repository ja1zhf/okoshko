import styled from "styled-components";

export const CalendarDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TableContainer = styled.div`
  width: 100%;
`;

export const CalendarTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  & > h1 {
    font-size: 14pt;
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #f5f4f9;
    border: none;
    border-radius: 100%;
    cursor: pointer;
  }
`;
export const CalendarTable = styled.table`
  border-spacing: 12px;
  width: 100%;
  table-layout: fixed;
`;

export const CalendarCellEmpty = styled.td`
  text-align: center;
`;

export const CalendarCellNumber = styled(CalendarCellEmpty)<{
  $isToday: boolean;
  $isSelected: boolean;
  $isWeekend: boolean;
  $isAvailable?: boolean;
  $disabled?: boolean;
}>`
  background-color: ${(props) => (props.$isSelected ? "#794CC3" : "#F5F4F9")};
  color: ${(props) =>
    props.$isWeekend ? "#ff4d4d" : props.$isSelected ? "#F5F4F9" : "#000000"};
  cursor: pointer;

  ${(props) =>
    props.$isAvailable && `border: 2px solid ${props.theme.colors.primary};`}

  ${(props) => props.$disabled && "opacity: 0.5;"}

  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    position: relative;
    user-select: none;
    touch-action: none;
  }

  ${(props) => props.$isToday && "font-weight: 900;"}
`;
