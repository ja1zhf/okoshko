import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PopupTitle } from "./style";
import InputItem from "@/app/components/input/inputItem";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const PopupItem = (props: Props) => {
  const { setIsActive } = props;

  const divRef = useRef<HTMLDivElement>(null);

  const [titleInput, setTitleInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [breakInput, setBreakInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  const click = () => {
    console.log(titleInput, timeInput, breakInput, priceInput);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(false);
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
      <PopupTitle>Добавление услуги</PopupTitle>
      <InputItem
        title="Название услуги"
        isNumber={false}
        canBeEmpty={false}
        inputValue={titleInput}
        setInputValue={setTitleInput}
      />
      <InputItem
        title="Время выполнения"
        isNumber={true}
        canBeEmpty={false}
        inputValue={timeInput}
        setInputValue={setTimeInput}
      />
      <InputItem
        title="Перерыв после услуги"
        isNumber={true}
        canBeEmpty={false}
        inputValue={breakInput}
        setInputValue={setBreakInput}
      />
      <InputItem
        title="Стоимость"
        isNumber={true}
        canBeEmpty={false}
        inputValue={priceInput}
        setInputValue={setPriceInput}
      />
      <SubmitButton onClick={click}>Добавить</SubmitButton>
    </PopupDiv>
  );
};

export default PopupItem;
