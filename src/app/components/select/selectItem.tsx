import { Dispatch, SetStateAction } from "react";
import { Select, SelectLabel } from "./style";

interface Props {
  title: string;
  options: { id: number | string; title: string }[];
  selectedOption: number | string;
  setSelectedOption:
    | Dispatch<SetStateAction<number>>
    | Dispatch<SetStateAction<string>>;
}

const SelectItem = (props: Props) => {
  const { title, options, selectedOption, setSelectedOption } = props;

  return (
    <div>
      <SelectLabel>{title}</SelectLabel>
      <Select
        value={selectedOption}
        {...(typeof options[0]?.id === "number"
          ? {
              onChange: (e) =>
                setSelectedOption(parseInt(e.target.value) as any),
            }
          : {
              onChange: (e) => setSelectedOption(e.target.value as any),
            })}
      >
        {options.map((option, index) => (
          <option key={index} value={option.id}>
            {option.title}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectItem;
