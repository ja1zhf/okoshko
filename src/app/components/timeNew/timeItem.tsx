import {
  Dispatch,
  SetStateAction,
} from "react";
import { TimeDiv, TableContainer, TimeInputWrapper, TimeInput, TimeButton } from "./style";

interface Props {
  selected: number[][];
  setSelected: Dispatch<SetStateAction<number[][]>>;
}

const timeStringToNumber = (timeString: string): number => {
    const numberString = timeString.replace(':', '');
    return parseInt(numberString, 10);
}

const numberToTimeString = (num: number): string => {
    const numStr = num.toString().padStart(4, '0');
    return `${numStr.slice(0, 2)}:${numStr.slice(2)}`;
}

const TimeItem = (props: Props) => {
  const { selected, setSelected } = props;

  const addEmptyArray = () => {
    setSelected((prev) => [...prev, [0, 0]]);
  }

  const removeArray = (index: number) => {
    setSelected(prev => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1)
    ]);
  }

  return (
    <TimeDiv $width={300}>
      <TableContainer>
        {
          selected.map((item, index) => (
            <TimeInputWrapper key={index}>
              <TimeInput type="time" value={numberToTimeString(item[0])} onChange={(e) => {
                setSelected(prev => {
                  const newSelected = prev.map(row => [...row]);
                  newSelected[index][0] = timeStringToNumber(e.target.value);
                  return newSelected;
                });
              }} />
              <TimeInput type="time" value={numberToTimeString(item[1])} onChange={(e) => {
                setSelected(prev => {
                  const newSelected = prev.map(row => [...row]);
                  newSelected[index][1] = timeStringToNumber(e.target.value);
                  return newSelected;
                });
              }} />
              <TimeButton onClick={() => removeArray(index)}>X</TimeButton>
            </TimeInputWrapper>
          ))
        }
        <TimeButton onClick={addEmptyArray}>+</TimeButton>
      </TableContainer>
    </TimeDiv>
  );
};

export default TimeItem;