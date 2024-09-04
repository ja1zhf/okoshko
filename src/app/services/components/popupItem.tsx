import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { PopupTitle } from "./style";
import InputItem from "@/app/components/input/inputItem";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const PopupItem = (props: Props) => {
  const { setIsActive } = props;

  const divRef = useRef<HTMLDivElement>(null);

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
      <InputItem title="Название услуги" />
      <InputItem title="Время выполнения" />
      <InputItem title="Перерыв после услуги" />
      <InputItem title="Стоимость" />
      <SubmitButton>Добавить</SubmitButton>
    </PopupDiv>
  );
};

export default PopupItem;
