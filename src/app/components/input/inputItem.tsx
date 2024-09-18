import { Dispatch, SetStateAction, useState } from "react";
import { Input, InputDiv, InputLabel } from "./style";

interface Props {
  title: string;
  inputValue: string | undefined | null;
  setInputValue: Dispatch<SetStateAction<string | undefined | null>>;
}

const InputItem = (props: Props) => {
  const { title, inputValue, setInputValue } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputDiv>
      <Input
        value={inputValue ? inputValue : ""}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e: any) => setInputValue(e.target.value)}
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
      >
        {title}
      </InputLabel>
    </InputDiv>
  );
};

export default InputItem;
