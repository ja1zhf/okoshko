import styled from "styled-components";

export const CalendarDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & > div {
    width: fit-content;
  }
`;

export const CalendarTable = styled.table`
  border-spacing: 12px;
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

export const CalendarCellEmpty = styled.td`
  text-align: center;
  width: 40px;
  height: 40px;
`;

export const CalendarCellNumber = styled(CalendarCellEmpty) <{
  $isToday: boolean;
  $isSelected: boolean;
  $isWeekend: boolean;
}>`
  ${(props) => props.$isToday && "font-weight: 900;"}
  background-color: ${(props) => (props.$isSelected ? "#794CC3" : "#F5F4F9")};
  color: ${(props) =>
    props.$isWeekend ? "#ff4d4d" : props.$isSelected ? "#F5F4F9" : "#000000"};
  border-radius: 100%;
  cursor: pointer;
  user-select: none;
`;
