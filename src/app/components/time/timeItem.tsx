import { Dispatch, SetStateAction, TouchEvent, useRef, useState } from "react";
import { TimeCell, TimeDiv, TimeTable, TimeTitle, TableContainer } from "./style";

interface Props {
  width: number;
  isMultiSelections: boolean;
  selectedTime: number[];
  setSelectedTime: Dispatch<SetStateAction<number[]>>;
}

const formatTime = (time: number): string => {
  const numStr = time.toString().padStart(4, "0");

  const hours = numStr.slice(0, 2);
  const minutes = numStr.slice(2);

  return `${hours}:${minutes}`;
};

const TimeItem = (props: Props) => {
  const { width, isMultiSelections, selectedTime, setSelectedTime } = props;

  const time = {
    morning: [
      [600, 615, 630, 645],
      [700, 715, 730, 745],
      [800, 815, 830, 845],
      [900, 915, 930, 945],
      [1000, 1015, 1030, 1045],
      [1100, 1115, 1130, 1145],
    ],
    day: [
      [1200, 1215, 1230, 1245],
      [1300, 1315, 1330, 1345],
      [1400, 1415, 1430, 1445],
      [1500, 1515, 1530, 1545],
      [1600, 1615, 1630, 1645],
      [1700, 1715, 1730, 1745],
    ],
    evening: [
      [1800, 1815, 1830, 1845],
      [1900, 1915, 1930, 1945],
      [2000, 2015, 2030, 2045],
      [2100, 2115, 2130, 2145],
      [2200, 2215, 2230, 2245],
      [2300, 2315, 2330, 2345],
    ],
    night: [
      [0, 15, 30, 45],
      [100, 115, 130, 145],
      [200, 215, 230, 245],
      [300, 315, 330, 345],
      [400, 415, 430, 445],
      [500, 515, 530, 545],
    ],
  };

  const previousTimeRef = useRef<number | null>(null);
  const [startSelection, setStartSelection] = useState(-1);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isSelection, setIsSelection] = useState(false);

  const click = (time: number) => {
    if (selectedTime.includes(time)) {
      setSelectedTime((prevSelected) => prevSelected.filter((t) => t !== time));
    } else {
      if (isMultiSelections) {
        setSelectedTime((prevSelected) => [...prevSelected, time]);
      } else {
        setSelectedTime([time]);
      }
    }
  };

  const mouseDown = (time: number) => {
    setIsMouseDown(true);
    setStartSelection(time);

    if (selectedTime.includes(time)) {
      setIsSelection(false);
    } else {
      setIsSelection(true);
    }
  };

  const mouseOver = (time: number) => {
    if (isMouseDown) {
      let start = startSelection < time ? startSelection : time;
      let end = startSelection > time ? startSelection : time;

      for (let i = start; i <= end; i += 15) {
        if (i % 100 > 45) i = i - (i % 100) + 100;

        if (!selectedTime.includes(i) && isSelection) {
          setSelectedTime((prevSelected) => [...prevSelected, i]);
        } else if (!isSelection) {
          setSelectedTime((prevSelected) =>
            prevSelected.filter((t) => t !== i),
          );
        }
      }
    }
  };

  const touchMove = (event: TouchEvent<HTMLTableSectionElement>) => {
    if (isMouseDown) {
      const touch = event.touches[0];
      const element = document.elementFromPoint(touch.clientX, touch.clientY);

      if (element instanceof HTMLElement && element.hasAttribute("data-time")) {
        const currentTime = parseInt(element.getAttribute("data-time")!, 10);

        if (previousTimeRef.current !== currentTime) {
          let start =
            startSelection < currentTime ? startSelection : currentTime;
          let end = startSelection > currentTime ? startSelection : currentTime;

          for (let i = start; i <= end; i += 15) {
            if (i % 100 > 45) i = i - (i % 100) + 100;

            if (!selectedTime.includes(i) && isSelection) {
              setSelectedTime((prevSelected) => [...prevSelected, i]);
            } else if (!isSelection) {
              setSelectedTime((prevSelected) =>
                prevSelected.filter((t) => t !== i),
              );
            }
          }
          previousTimeRef.current = currentTime;
        }
      }
    }
  };

  const mouseUp = () => {
    setIsMouseDown(false);
    setStartSelection(-1);
  };

  return (
    <TimeDiv $width={width}>
      <TableContainer> 
        <TimeTitle>Утро</TimeTitle>
        <TimeTable>
          <tbody
            {...(isMultiSelections && {
              onTouchMove: (event) => touchMove(event),
              onTouchEnd: () => mouseUp(),
            })}
          >
            {time.morning.map((children, index) => (
              <tr key={index}>
                {children.map((time) => (
                  <TimeCell
                    key={time}
                    data-time={time}
                    $selected={selectedTime.includes(time)}
                    onClick={() => click(time)}
                    {...(isMultiSelections && {
                      onMouseDown: () => mouseDown(time),
                      onTouchStart: () => mouseDown(time),
                      onMouseOver: () => mouseOver(time),
                      onMouseUp: () => mouseUp(),
                    })}
                  >
                    {formatTime(time)}
                  </TimeCell>
                ))}
              </tr>
            ))}
          </tbody>
        </TimeTable>
      </TableContainer>
      <TableContainer>
        <TimeTitle>День</TimeTitle>
        <TimeTable>
          <tbody
            {...(isMultiSelections && {
              onTouchMove: (event) => touchMove(event),
              onTouchEnd: () => mouseUp(),
            })}
          >
            {time.day.map((children, index) => (
              <tr key={index}>
                {children.map((time) => (
                  <TimeCell
                    key={time}
                    data-time={time}
                    $selected={selectedTime.includes(time)}
                    onClick={() => click(time)}
                    {...(isMultiSelections && {
                      onMouseDown: () => mouseDown(time),
                      onTouchStart: () => mouseDown(time),
                      onMouseOver: () => mouseOver(time),
                      onMouseUp: () => mouseUp(),
                    })}
                  >
                    {formatTime(time)}
                  </TimeCell>
                ))}
              </tr>
            ))}
          </tbody>
        </TimeTable>
      </TableContainer>
      <TableContainer>
        <TimeTitle>Вечер</TimeTitle>
        <TimeTable>
          <tbody
            {...(isMultiSelections && {
              onTouchMove: (event) => touchMove(event),
              onTouchEnd: () => mouseUp(),
            })}
          >
            {time.evening.map((children, index) => (
              <tr key={index}>
                {children.map((time) => (
                  <TimeCell
                    key={time}
                    data-time={time}
                    $selected={selectedTime.includes(time)}
                    onClick={() => click(time)}
                    {...(isMultiSelections && {
                      onMouseDown: () => mouseDown(time),
                      onTouchStart: () => mouseDown(time),
                      onMouseOver: () => mouseOver(time),
                      onMouseUp: () => mouseUp(),
                    })}
                  >
                    {formatTime(time)}
                  </TimeCell>
                ))}
              </tr>
            ))}
          </tbody>
        </TimeTable>
      </TableContainer>
      <TableContainer>
        <TimeTitle>Ночь</TimeTitle>
        <TimeTable>
          <tbody
            {...(isMultiSelections && {
              onTouchMove: (event) => touchMove(event),
              onTouchEnd: () => mouseUp(),
            })}
          >
            {time.night.map((children, index) => (
              <tr key={index}>
                {children.map((time) => (
                  <TimeCell
                    key={time}
                    data-time={time}
                    $selected={selectedTime.includes(time)}
                    onClick={() => click(time)}
                    {...(isMultiSelections && {
                      onMouseDown: () => mouseDown(time),
                      onTouchStart: () => mouseDown(time),
                      onMouseOver: () => mouseOver(time),
                      onMouseUp: () => mouseUp(),
                    })}
                  >
                    {formatTime(time)}
                  </TimeCell>
                ))}
              </tr>
            ))}
          </tbody>
        </TimeTable>
      </TableContainer>
    </TimeDiv>
  );
};

export default TimeItem;
