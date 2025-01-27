import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PopupTitle } from "./style";
import TimeItem from "@/app/components/timeNew/timeItem";
import { DatesDiv } from "../style";

interface Props {
  selectedDates: string[];
  setIsActive: Dispatch<SetStateAction<boolean>>;
  getAppointment: () => Promise<void>;
}

const PopupItem = (props: Props) => {
  const { selectedDates, setIsActive, getAppointment } = props;

  const [selectedTime, setSelectedTime] = useState<number[]>([]);

  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  const click = async () => {
    await fetch("https://dev.okoshko.space/table/slot/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        dates: selectedDates,
        start_times: selectedTime,
      }),
    });

    setIsActive(false);
    getAppointment();
    // else if (isActive === 1) {
    //   await fetch("https://dev.okoshko.space/table/slot/appointments/create", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     credentials: "include",
    //     body: JSON.stringify({
    //       phone: phoneInput,
    //       date: selectedDates[0],
    //       start_time: selectedTime[0],
    //       service_id: selectedService,
    //     }),
    //   });
    //
    //   setIsActive(0);
    // }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PopupDiv ref={divRef}>
      <PopupTitle>Добавить окошко</PopupTitle>
      <DatesDiv>
        {selectedDates.map((date, index) => (
          <p key={index}>{date}</p>
        ))}
      </DatesDiv>
      <TimeItem />
      <SubmitButton onClick={click} whileTap={{ scale: 0.9 }}>
        Добавить
      </SubmitButton>
    </PopupDiv>
  );
};

export default PopupItem;
