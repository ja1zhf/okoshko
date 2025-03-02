"use client";

import { useEffect, useState } from "react";
import CalendarItem from "@/app/components/calendar/calendarItem";
import { PageDarkOverlay, PageDiv } from "@/app/styles/style";
import {
  AppointmentsDiv,
  AppointmentTimeButton,
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

  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const [appointmentsTimes, setAppointmentsTimes] = useState<
    AppointmentTimeType[]
  >([]);

  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  const click = () => {
    setIsActive(true);

    let temp: string[] = [];

    selectedDays.map((day) => {
      temp.push(formatDate(day, selectedMonth, selectedYear));
    });

    setSelectedDates(temp);
  };

  const getAppointmentsTimes = async () => {
    const response = await fetch(
      `https://dev.okoshko.space/table/slot/appointments/by_date?date=${formatDate(selectedDays[0], selectedMonth, selectedYear)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    const result: { slots: AppointmentTimeType[] } = await response.json();

    if (result.slots) {
      setAppointmentsTimes(result.slots);
    } else {
      setAppointmentsTimes([]);
    }
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

  useEffect(() => {
    if (selectedDays.length === 1) {
      getAppointmentsTimes();
    }
  }, [selectedDays]);

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
            getAppointmentsTimes={getAppointmentsTimes}
          />
        </PageDarkOverlay>
      )}
      {selectedAppointment > 0 && (
        <PageDarkOverlay>
          <AppointmentPopupItem
            title={appointmentTitle}
            selectedAppointment={selectedAppointment}
            setSelectedAppointment={setSelectedAppointment}
            getAppointmentsTimes={getAppointmentsTimes}
          />
        </PageDarkOverlay>
      )}
      {selectedDays.length === 1 && (
        <AppointmentsDiv>
          <h2>Ваши окошки на {selectedDays[0]} число</h2>
          <div>
            {appointmentsTimes.map((time, index) => (
              <AppointmentTimeButton
                $active={time.is_available}
                key={index}
                onClick={() => {
                  if (time.is_available) {
                    setAppointmentTitle(
                      `${time.date} ${formatTime(time.start_time)}-${formatTime(endsWith45(time.end_time) ? replaceWith00(time.end_time + 100) : time.end_time + 15)}`,
                    );
                    setSelectedAppointment(time.id);
                  }
                }}
              >
                {formatTime(time.start_time)}-
                {formatTime(
                  endsWith45(time.end_time)
                    ? replaceWith00(time.end_time + 100)
                    : time.end_time + 15,
                )}
              </AppointmentTimeButton>
            ))}
          </div>
        </AppointmentsDiv>
      )}
    </PageDiv>
  );
};

export default Page;
