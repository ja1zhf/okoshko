import { Dispatch, SetStateAction } from "react";
import { Select, SelectLabel } from "./style";

interface Props {
  title: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

const SelectItem = (props: Props) => {
  const { title, options, selectedOption, setSelectedOption } = props;

  return (
    <div>
      <SelectLabel>{title}</SelectLabel>
      <Select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectItem;
