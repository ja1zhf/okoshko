"use client";

import { useEffect, useState } from "react";
import CalendarItem from "@/app/components/calendar/calendarItem";
import { PageDarkOverlay, PageDiv } from "@/app/styles/style";
import {
  AppointmentsDiv,
  ButtonsDiv,
  ScheduleButton,
  SchedulePageTitle,
} from "./style";
import PopupItem from "./components/popupItem";
import {
  endsWith45,
  formatDate,
  formatNum,
  formatTime,
  replaceWith00,
} from "@/tools/tools";
import AppointmentPopupItem from "./components/appointmentPopupItem";

const Page = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [appointmentTitle, setAppointmentTitle] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(0);

  const times = [
    [600, 645],
    [800, 930],
    [1000, 1030],
  ];

  const [appointments, setAppointments] = useState<AppointmentType[]>([]);

  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  const click = () => {
    setIsActive(true);

    let temp: string[] = [];

    selectedDays.map((day) => {
      temp.push(formatDate(day, selectedMonth, selectedYear));
    });

    setSelectedDates(temp);
  };

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
        {selectedDays.length > 0 && (
          <ScheduleButton $isPrimary onClick={click}>
            Добавить окошко
          </ScheduleButton>
        )}
      </ButtonsDiv>
      {isActive && (
        <PageDarkOverlay>
          <PopupItem
            selectedDates={selectedDates}
            setIsActive={setIsActive}
            getAppointment={getAppointment}
          />
        </PageDarkOverlay>
      )}
      {selectedAppointment > 0 && (
        <PageDarkOverlay>
          <AppointmentPopupItem
            title={appointmentTitle}
            selectedAppointment={selectedAppointment}
            setSelectedAppointment={setSelectedAppointment}
           />
        </PageDarkOverlay>
      )}
      {selectedDays.length === 1 && (
        <AppointmentsDiv>
          <h2>Ваши окошки на {selectedDays[0]} число</h2>
          <div>
            {times.map((time, index) => (
              <button key={index} onClick={() => {
                setAppointmentTitle(`${selectedDays[0]}-${formatNum(selectedMonth + 1)} ${formatTime(time[0])}-${formatTime(endsWith45(time[1]) ? replaceWith00(time[1] + 100) : time[1] + 15)}`);
                setSelectedAppointment(index + 1);
              }}>
                {formatTime(time[0])}-
                {formatTime(endsWith45(time[1]) ? replaceWith00(time[1] + 100) : time[1] + 15)}
              </button>
            ))}
          </div>
        </AppointmentsDiv>
      )}
    </PageDiv>
  );
};

export default Page;
