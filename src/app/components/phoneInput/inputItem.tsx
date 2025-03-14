import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Input, InputDiv, InputLabel } from "./style";

interface Props {
  title: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").replace(/^7/, ""); // Оставляем только цифры, убираем начальную 7
  let formatted = "+7";

  if (digits.length > 0) formatted += ` (${digits.slice(0, 3)}`;
  if (digits.length >= 4) formatted += `) ${digits.slice(3, 6)}`;
  if (digits.length >= 7) formatted += `-${digits.slice(6, 8)}`;
  if (digits.length >= 9) formatted += `-${digits.slice(8, 10)}`;

  return formatted;
};

const PhoneInputItem = (props: Props) => {
  const { title, inputValue, setInputValue } = props;

  const [isFocused, setIsFocused] = useState(false);

  const [isBlur, setIsBlur] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value === "") {
      setInputValue("");
      return;
    }
    setInputValue(formatPhoneNumber(value));
  };

  return (
    <InputDiv>
      <Input
        type="text"
        value={inputValue ? inputValue : ""}
        maxLength={18}
        placeholder="+7 (___) ___-__-__"
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsBlur(true);
        }}
        onChange={handleChange}
        $isEmpty={!inputValue.length && isBlur}
        $isEmptyAndFocus={!inputValue.length && !isFocused}
      />
      <InputLabel
        initial={{ x: 3, y: 0, scale: 1.2, opacity: 1 }}
        animate={{
          x: isFocused || inputValue ? 0 : 3,
          y: isFocused || inputValue ? -12 : 0,
          scale: isFocused || inputValue ? 1 : 1.2,
          opacity: isFocused || inputValue ? 0.6 : 1,
        }}
        transition={{ duration: 0.2 }}
        $isEmpty={!inputValue.length && isBlur}
      >
        {title}
        {!inputValue.length && isBlur && "(не может быть пустым)"}
      </InputLabel>
    </InputDiv>
  );
};

export default PhoneInputItem;
