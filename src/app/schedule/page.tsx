"use client";

import { useState } from "react";
import CalendarItem from "../components/calendar/calendarItem";
import { PageDarkOverlay, PageDiv } from "../styles/style";
import { ButtonsDiv, ScheduleButton, SchedulePageTitle } from "./style";
import PopupItem from "./components/popupItem";

const Page = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [isActive, setIsActive] = useState(0);

  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  const click = (type: number) => {
    setIsActive(type);

    let temp: string[] = [];

    selectedDays.map((day) => {
      temp.push(
        `${selectedYear}-${selectedMonth < 10 ? "0" + selectedMonth : selectedMonth}-${day < 10 ? "0" + day : day}`,
      );
    });

    setSelectedDates(temp);
  };

  return (
    <PageDiv>
      <SchedulePageTitle>Расписание</SchedulePageTitle>
      <CalendarItem
        isMultiSelections={true}
        selectedDays={selectedDays}
        currentMonth={selectedMonth}
        currentYear={selectedYear}
        setSelectedDays={setSelectedDays}
        setCurrentMonth={setSelectedMonth}
        setCurrentYear={setSelectedYear}
      />
      <ButtonsDiv>
        {selectedDays.length == 1 && (
          <ScheduleButton onClick={() => click(1)}>
            Добавить запись
          </ScheduleButton>
        )}
        {selectedDays.length > 0 && (
          <ScheduleButton $isPrimary onClick={() => click(2)}>
            Добавить окошко
          </ScheduleButton>
        )}
      </ButtonsDiv>
      {isActive ? (
        <PageDarkOverlay>
          <PopupItem
            isActive={isActive}
            selectedDates={selectedDates}
            setIsActive={setIsActive}
          />
        </PageDarkOverlay>
      ) : (
        <></>
      )}
    </PageDiv>
  );
};

export default Page;
