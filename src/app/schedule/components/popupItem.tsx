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

  const categories = [
    "Ногти",
    "Брови и ресницы",
    "Лицо",
    "Волосы",
    "Тело",
    "Эпиляция",
  ];

  const [selectedTime, setSelectedTime] = useState<number[]>([]);

  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedService, setSelectedService] = useState("");

  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(0);
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

    setIsActive(0);
    getAppointment();
  };

  useEffect(() => {
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
            inputValue={input}
            setInputValue={setInput}
          />
          {
            // <SelectItem
            //   title="Категория"
            //   options={categories}
            //   selectedOption={selectedCategory}
            //   setSelectedOption={setSelectedCategory}
            // />
            // <SelectItem
            //   title="Услуга"
            //   options={categories}
            //   selectedOption={selectedService}
            //   setSelectedOption={setSelectedService}
            //   />
          }
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
