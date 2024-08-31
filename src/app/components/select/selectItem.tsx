import { Select, SelectLabel } from "./style";

interface Props {
  title: string;
  options: string[];
}

const SelectItem = (props: Props) => {
  const { title, options } = props;

  return (
    <div>
      <SelectLabel>{title}</SelectLabel>
      <Select>
        {options.map((option, index) => (
          <option key={index} value={"option-" + index}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectItem;
