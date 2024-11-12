import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PopupTitle } from "./style";
import TimeItem from "@/app/components/time/timeItem";
import InputItem from "@/app/components/input/inputItem";
import { DatesDiv } from "../style";
import SelectItem from "@/app/components/select/selectItem";

interface Props {
  isActive: number;
  selectedDates: string[];
  setIsActive: Dispatch<SetStateAction<number>>;
  getAppointment: () => Promise<void>;
}

const PopupItem = (props: Props) => {
  const { isActive, selectedDates, setIsActive, getAppointment } = props;

  const [selectedTime, setSelectedTime] = useState<number[]>([]);

  const [services, setServices] = useState<{ id: number; title: string }[]>([]);

  const [phoneInput, setPhoneInput] = useState("");
  const [selectedService, setSelectedService] = useState(0);

  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(0);
    }
  };

  const click = async () => {
    if (isActive === 2) {
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

      setIsActive(0);
      getAppointment();
    } else if (isActive === 1) {
      await fetch("https://dev.okoshko.space/table/slot/appointments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          phone: phoneInput,
          date: selectedDates[0],
          start_time: selectedTime[0],
          service_id: selectedService,
        }),
      });

      setIsActive(0);
    }
  };

  useEffect(() => {
    (async function () {
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

      const result: { status: number; services: ServiceData[] } =
        await response.json();

      let temp: { id: number; title: string }[] = [];

      result.services.map((service) => {
        temp.push({ id: service.id, title: service.title });
      });

      setSelectedService(temp[0].id);
      setServices(temp);
    })();

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PopupDiv ref={divRef}>
      <PopupTitle>
        {isActive === 1 ? "Добавить запись" : "Добавить окошко"}
      </PopupTitle>
      <DatesDiv>
        {selectedDates.map((date, index) => (
          <p key={index}>{date}</p>
        ))}
      </DatesDiv>
      {isActive === 1 && (
        <>
          <InputItem
            isNumber={true}
            canBeEmpty={false}
            title="Номер телефона клиент"
            inputValue={phoneInput}
            setInputValue={setPhoneInput}
          />
          <SelectItem
            title="Услуга"
            options={services}
            selectedOption={selectedService}
            setSelectedOption={setSelectedService}
          />
        </>
      )}
      <TimeItem
        width={300}
        isMultiSelections={!(isActive === 1)}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <SubmitButton onClick={click} whileTap={{ scale: 0.9 }}>
        Добавить
      </SubmitButton>
    </PopupDiv>
  );
};

export default PopupItem;
