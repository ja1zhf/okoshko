import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PopupTitle } from "./style";
import TimeItem from "@/app/components/timeNew/timeItem";
import { DatesDiv } from "../style";

interface Props {
  selectedDates: string[];
  setIsActive: Dispatch<SetStateAction<boolean>>;
  getAppointment: () => Promise<void>;
  getAppointmentsTimes: () => Promise<void>;
}

const PopupItem = (props: Props) => {
  const { selectedDates, setIsActive, getAppointment, getAppointmentsTimes } = props;

  const [selectedTime, setSelectedTime] = useState<number[][]>([[], [], [], [], []]);

  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  const click = async () => {
    let filteredTime = selectedTime.filter(item => !(item[0] === 0 && item[1] === 0))

    if(filteredTime.length > 0) {
      await fetch("https://dev.okoshko.space/table/slot/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          dates: selectedDates,
          start_times: filteredTime,
        }),
      });
    }

    setIsActive(false);
    getAppointment();
    if(selectedDates.length === 1) {
      getAppointmentsTimes();
    }
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
      <TimeItem selected={selectedTime} setSelected={setSelectedTime} />
      <SubmitButton onClick={click} whileTap={{ scale: 0.9 }}>
        Добавить
      </SubmitButton>
    </PopupDiv>
  );
};

export default PopupItem;
