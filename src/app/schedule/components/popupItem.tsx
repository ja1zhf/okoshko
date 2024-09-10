import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PopupTitle } from "./style";
import TimeItem from "@/app/components/time/timeItem";
import InputItem from "@/app/components/input/inputItem";

interface Props {
  isActive: number;
  setIsActive: Dispatch<SetStateAction<number>>;
}

const PopupItem = (props: Props) => {
  const { isActive, setIsActive } = props;

  const [selectedTime, setSelectedTime] = useState<number[]>([]);

  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(0);
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
      <PopupTitle>
        {isActive === 1 ? "Добавить запись" : "Добавить окошко"}
      </PopupTitle>
      {isActive === 1 && <InputItem title="Клиент" />}
      <TimeItem
        width={300}
        isMultiSelections={!(isActive === 1)}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <SubmitButton>Добавить</SubmitButton>
    </PopupDiv>
  );
};

export default PopupItem;
