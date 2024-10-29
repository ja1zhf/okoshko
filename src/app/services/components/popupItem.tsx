import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PopupTitle } from "./style";
import InputItem from "@/app/components/input/inputItem";

interface Props {
  id: number;
  isEdit: boolean;
  title: string;
  time: string;
  price: string;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  request: () => Promise<void>;
}

const PopupItem = (props: Props) => {
  const { id, isEdit, title, time, price, setIsActive, request } = props;

  const divRef = useRef<HTMLDivElement>(null);

  const [titleInput, setTitleInput] = useState(title);
  const [timeInput, setTimeInput] = useState(time);
  const [breakInput, setBreakInput] = useState("");
  const [priceInput, setPriceInput] = useState(price);

  const click = async () => {
    if (!isEdit) {
      const response = await fetch(
        `https://dev.okoshko.space/service/services/create/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            title: titleInput,
            description: "",
            price: priceInput,
            duration: timeInput,
          }),
        },
      );

      const result = await response.json();

      if (result.status === 201) {
        setIsActive(false);
        request();
      }
    } else {
      await fetch(`https://dev.okoshko.space/service/service/update/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title: titleInput,
          description: "",
          price: priceInput,
          duration: timeInput,
        }),
      });

      setIsActive(false);
      request();
    }
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
        title="Стоимость"
        isNumber={true}
        canBeEmpty={false}
        inputValue={priceInput}
        setInputValue={setPriceInput}
      />
      <SubmitButton onClick={click}>
        {isEdit ? "Изменить" : "Добавить"}
      </SubmitButton>
    </PopupDiv>
  );
};

export default PopupItem;
