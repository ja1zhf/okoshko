import { Dispatch, SetStateAction } from "react";
import { Select, SelectLabel } from "./style";

interface Props {
  title: string;
  options: { id: number; title: string }[];
  selectedOption: number;
  setSelectedOption: Dispatch<SetStateAction<number>>;
}

const SelectItem = (props: Props) => {
  const { title, options, selectedOption, setSelectedOption } = props;

  return (
    <div>
      <SelectLabel>{title}</SelectLabel>
      <Select
        value={selectedOption}
        onChange={(e) => setSelectedOption(parseInt(e.target.value))}
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
