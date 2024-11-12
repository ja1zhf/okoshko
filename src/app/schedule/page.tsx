"use client";

import { useContext, useEffect, useState } from "react";
import CalendarItem from "../components/calendar/calendarItem";
import { PageDarkOverlay, PageDiv } from "../styles/style";
import { ButtonsDiv, ScheduleButton, SchedulePageTitle } from "./style";
import PopupItem from "./components/popupItem";
import UserContext from "@/contexts/userContext";
import { notFound } from "next/navigation";
import { formatDate } from "@/tools/tools";

const Page = () => {
  const { user } = useContext(UserContext);

  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [isActive, setIsActive] = useState(0);

  const [appointments, setAppointments] = useState<AppointmentType[]>([]);

  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  const click = (type: number) => {
    setIsActive(type);

    let temp: string[] = [];

    selectedDays.map((day) => {
      temp.push(formatDate(day, selectedMonth, selectedYear));
    });

    setSelectedDates(temp);
  };

  if (!user || user.role === "user") {
    notFound();
  }

  const getAppointment = async () => {
    const response = await fetch(
      `https://dev.okoshko.space/table/slot/get/my`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    const result = await response.json();

    setAppointments(result);
  };

  useEffect(() => {
    getAppointment();
  }, []);

  return (
    <PageDiv>
      <SchedulePageTitle>Расписание</SchedulePageTitle>
      <CalendarItem
        isMultiSelections={true}
        selectedDays={selectedDays}
        currentMonth={selectedMonth}
        currentYear={selectedYear}
        appointments={appointments}
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
            getAppointment={getAppointment}
          />
        </PageDarkOverlay>
      ) : (
        <></>
      )}
    </PageDiv>
  );
};

export default Page;
