import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PopupTitle } from "./style";
import TimeItem from "@/app/components/timeNew/timeItem";
import { DatesDiv } from "../style";
import InputItem from "@/app/components/input/inputItem";
import SelectItem from "@/app/components/select/selectItem";

interface Props {
  title: string;
  selectedAppointment: number;
  setSelectedAppointment: Dispatch<SetStateAction<number>>;
}

const AppointmentPopupItem = (props: Props) => {
  const { title, selectedAppointment, setSelectedAppointment } = props;

  const divRef = useRef<HTMLDivElement>(null);

  const [phoneInput, setPhoneInput] = useState("");
  const [selectedService, setSelectedService] = useState(0);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setSelectedAppointment(0);
    }
  };

  const click = async () => {
    setSelectedAppointment(0);

      // await fetch("https://dev.okoshko.space/table/slot/appointments/create", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   credentials: "include",
      //   body: JSON.stringify({
      //     phone: phoneInput,
      //     date: selectedDates[0],
      //     start_time: selectedTime[0],
      //     service_id: selectedService,
      //   }),
      // });
  };

  useEffect(() => {
    (async function() {
      const response = await fetch(
        `https://dev.okoshko.space/service/my-services`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      const result = await response.json();
      console.log(result);
    })();

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PopupDiv ref={divRef}>
      <PopupTitle>Добавить запись</PopupTitle>
      <DatesDiv>
        <p>{title}</p>
      </DatesDiv>
      <InputItem title="Номер пользователя" isNumber={true} canBeEmpty={false} inputValue={phoneInput} setInputValue={setPhoneInput} />
      {/* <SelectItem title="Услуга" options={]} /> */}
      <SubmitButton onClick={click} whileTap={{ scale: 0.9 }}>
        Добавить
      </SubmitButton>
    </PopupDiv>
  );
};

export default AppointmentPopupItem;
