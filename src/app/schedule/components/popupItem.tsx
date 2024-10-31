import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PopupTitle } from "./style";
import TimeItem from "@/app/components/time/timeItem";
import InputItem from "@/app/components/input/inputItem";
import { DatesDiv } from "../style";

interface Props {
  isActive: number;
  selectedDates: string[];
  setIsActive: Dispatch<SetStateAction<number>>;
}

const PopupItem = (props: Props) => {
  const { isActive, selectedDates, setIsActive } = props;

  const [selectedTime, setSelectedTime] = useState<number[]>([]);

  const [input, setInput] = useState("");

  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(0);
    }
  };

  const click = async () => {
    const response = await fetch(
      "https://dev.okoshko.space/table/slot/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          dates: selectedDates,
          start_times: selectedTime,
        }),
      },
    );

    const result = await response.json();

    console.log(result);
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
        <InputItem
          isNumber={false}
          canBeEmpty={true}
          title="Клиент"
          inputValue={input}
          setInputValue={setInput}
        />
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
