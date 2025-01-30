import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Input, InputDiv, InputLabel } from "./style";

interface Props {
  title: string;
  isNumber: boolean;
  canBeEmpty: boolean;
  isDisabled?: boolean;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const InputItem = (props: Props) => {
  const { title, isNumber, canBeEmpty, isDisabled, inputValue, setInputValue } = props;

  const [isFocused, setIsFocused] = useState(false);

  const [isBlur, setIsBlur] = useState(false);

  return (
    <InputDiv>
      <Input
        value={inputValue ? inputValue : ""}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsBlur(true);
        }}
        {...(isDisabled && {
          disabled: true,
          $disabled: true,
        })}
        {...(isNumber && {
          onInput: (e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.replace(/\D/g, "");
          },
        })}
        onChange={(e: any) => setInputValue(e.target.value)}
        $isEmpty={!canBeEmpty && !inputValue.length && isBlur}
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
        $isEmpty={!canBeEmpty && !inputValue.length && isBlur}
      >
        {title}
        {!canBeEmpty &&
          !inputValue.length &&
          isBlur &&
          "(не может быть пустым)"}
      </InputLabel>
    </InputDiv>
  );
};

export default InputItem;
