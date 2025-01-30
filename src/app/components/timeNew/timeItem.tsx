import {
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { TimeCell, TimeDiv, TimeTable, TableContainer } from "./style";
import { formatTime } from "@/tools/tools";

interface Props {
  selected: number[][];
  setSelected: Dispatch<SetStateAction<number[][]>>;
}

const TimeItem = (props: Props) => {
  const { selected, setSelected } = props;

  const time = [
    [600, 615, 630, 645],
    [700, 715, 730, 745],
    [800, 815, 830, 845],
    [900, 915, 930, 945],
    [1000, 1015, 1030, 1045],
    [1100, 1115, 1130, 1145],
    [1200, 1215, 1230, 1245],
    [1300, 1315, 1330, 1345],
    [1400, 1415, 1430, 1445],
    [1500, 1515, 1530, 1545],
    [1600, 1615, 1630, 1645],
    [1700, 1715, 1730, 1745],
    [1800, 1815, 1830, 1845],
    [1900, 1915, 1930, 1945],
    [2000, 2015, 2030, 2045],
    [2100, 2115, 2130, 2145],
    [2200, 2215, 2230, 2245],
    [2300, 2315, 2330, 2345],
  ];

  const [isStartSelection, setIsStartSelection] = useState(false);

  const isOverlapping = (start: number, end: number) => {
    return selected.some(([rangeStart, rangeEnd]) => {
      return start <= rangeEnd && end >= rangeStart;
    });
  };

  const isSelected = (time: number) => {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i][0] === time) {
        return { isFind: true, position: "start" };
      } else if (selected[i][1] === time) {
        return { isFind: true, position: "end" };
      } else if (selected[i][0] < time && selected[i][1] > time) {
        return { isFind: true, position: "middle" };
      } else if (selected[i][0] > time && selected[i][1] < time) {
        return { isFind: true, position: "middle" };
      }
    }

    return { isFind: false, position: "none" };
  };

  const clickOnTime = (time: number) => {
    if (!isSelected(time).isFind) {
      if (!isStartSelection) {
        let temp = [...selected];
        temp.push([time]);

        setSelected(temp);
        setIsStartSelection(true);
      } else {
        let temp = [...selected];

        if (!isOverlapping(temp[temp.length - 1][0], time)) {
          temp[temp.length - 1].push(time);
          temp[temp.length - 1].sort((a, b) => a - b);
        } else {
          temp.splice(temp.length - 1, 1);
        }

        setSelected(temp);
        setIsStartSelection(false);
      }
    } else {
      let temp = [...selected];

      if(!isStartSelection) {
        let index = temp.findIndex(
          ([start, end]) => time >= start && time <= end,
        );

        if (index !== -1) {
          temp.splice(index, 1);
        }
      } else {
          temp.splice(temp.length - 1, 1);
      }

      setSelected(temp);
      setIsStartSelection(false);
    }
  };

  return (
    <TimeDiv $width={300}>
      <TableContainer>
        <TimeTable cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            {time.map((children, index) => (
              <tr key={index}>
                {children.map((time, i) => {
                  const isSelectedTime = isSelected(time);

                  return (
                    <td key={i}>
                      <TimeCell
                        $isSelected={isSelectedTime.isFind}
                        $position={isSelectedTime.position}
                        onClick={() => clickOnTime(time)}
                      >
                        {formatTime(time)}
                      </TimeCell>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </TimeTable>
      </TableContainer>
    </TimeDiv>
  );
};

export default TimeItem;
