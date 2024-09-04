"use client";

import { useState } from "react";
import CalendarItem from "../components/calendar/calendarItem";
import { PageDarkOverlay, PageDiv } from "../styles/style";
import { ButtonsDiv, ScheduleButton, SchedulePageTitle } from "./style";
import PopupItem from "./components/popupItem";

const Page = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [isActive, setIsActive] = useState(0);

  return (
    <PageDiv>
      <SchedulePageTitle>Расписание</SchedulePageTitle>
      <CalendarItem
        isMultiSelections={true}
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
      />
      <ButtonsDiv>
        {selectedDays.length == 1 && (
          <ScheduleButton onClick={() => setIsActive(1)}>
            Изменить запись
          </ScheduleButton>
        )}
        {selectedDays.length > 0 && (
          <ScheduleButton $isPrimary onClick={() => setIsActive(2)}>
            Изменить окошко
          </ScheduleButton>
        )}
      </ButtonsDiv>
      {isActive ? (
        <PageDarkOverlay>
          <PopupItem isActive={isActive} setIsActive={setIsActive} />
        </PageDarkOverlay>
      ) : (
        <></>
      )}
    </PageDiv>
  );
};

export default Page;
