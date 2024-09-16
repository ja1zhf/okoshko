import {
  Dispatch,
  SetStateAction,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  CalendarCellEmpty,
  CalendarCellNumber,
  CalendarDiv,
  CalendarTable,
  CalendarTitle,
  TableContainer
} from "./style";

interface Props {
  isMultiSelections: boolean;
  selectedDays: number[];
  setSelectedDays: Dispatch<SetStateAction<number[]>>;
}

const CalendarItem = (props: Props) => {
  const { isMultiSelections, selectedDays, setSelectedDays } = props;

  const weeksNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();

  const previousDayRef = useRef<number | null>(null);
  const currentDay = today.getDate();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [days, setDays] = useState<number[][]>([[]]);

  const [startSelection, setStartSelection] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isSelection, setIsSelection] = useState(false);

  useEffect(() => {
    const firstDayOfMonth: Date = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth: Date = new Date(currentYear, currentMonth + 1, 0);
    let tempDays: number[][] = [
      Array.from(
        {
          length: (firstDayOfMonth.getDay() || 7) - 1,
        },
        () => 0,
      ),
    ];

    for (let day = 1, week = 0; day <= lastDayOfMonth.getDate(); day++) {
      if (tempDays[week].length < 7) {
        tempDays[week].push(day);
      } else {
        week++;
        tempDays.push([]);
        tempDays[week].push(day);
      }
    }

    setDays(tempDays);
  }, [currentMonth]);

  const changeMonth = (isNegative: boolean) => {
    setSelectedDays([]);

    if (!isNegative) {
      if (currentMonth + 1 < 12) {
        setCurrentMonth(currentMonth + 1);
      } else {
        setCurrentYear(currentYear + 1);
        setCurrentMonth(0);
      }
    } else {
      if (currentMonth - 1 >= 0) {
        setCurrentMonth(currentMonth - 1);
      } else {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      }
    }
  };

  const click = (day: number) => {
    if (selectedDays.includes(day)) {
      setSelectedDays((prevSelected) => prevSelected.filter((d) => d !== day));
    } else {
      if (isMultiSelections) {
        setSelectedDays((prevSelected) => [...prevSelected, day]);
      } else {
        setSelectedDays([day]);
      }
    }
  };

  const mouseDown = (day: number) => {
    setIsMouseDown(true);
    setStartSelection(day);

    if (selectedDays.includes(day)) {
      setIsSelection(false);
    } else {
      setIsSelection(true);
    }
  };

  const mouseOver = (day: number) => {
    if (isMouseDown) {
      let start = startSelection < day ? startSelection : day;
      let end = startSelection > day ? startSelection : day;

      for (let i = start; i <= end; i++) {
        if (!selectedDays.includes(i) && isSelection) {
          setSelectedDays((prevSelected) => [...prevSelected, i]);
        } else if (!isSelection) {
          setSelectedDays((prevSelected) =>
            prevSelected.filter((d) => d !== i),
          );
        }
      }
    }
  };

  const touchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      const touch = event.touches[0];
      const element = document.elementFromPoint(touch.clientX, touch.clientY);

      if (element instanceof HTMLElement && element.hasAttribute("data-day")) {
        const currentDay = parseInt(element.getAttribute("data-day")!, 10);

        if (previousDayRef.current !== currentDay) {
          let start = startSelection < currentDay ? startSelection : currentDay;
          let end = startSelection > currentDay ? startSelection : currentDay;

          for (let i = start; i <= end; i++) {
            if (!selectedDays.includes(i) && isSelection) {
              setSelectedDays((prevSelected) => [...prevSelected, i]);
            } else if (!isSelection) {
              setSelectedDays((prevSelected) =>
                prevSelected.filter((d) => d !== i),
              );
            }
          }
          previousDayRef.current = currentDay;
        }
      }
    }
  };

  const mouseUp = () => {
    setIsMouseDown(false);
    setStartSelection(0);
  };

  return (
    <CalendarDiv>
      <TableContainer>
        <CalendarTitle>
          <button onClick={() => changeMonth(true)}>{"<"}</button>
          <h1>
            {monthsNames[currentMonth]}, {currentYear}
          </h1>
          <button onClick={() => changeMonth(false)}>{">"}</button>
        </CalendarTitle>
        <CalendarTable>
          <thead>
            <tr>
              {weeksNames.map((name, index) => (
                <th key={index}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody
            {...(isMultiSelections && {
              onTouchMove: (event) => touchMove(event),
              onTouchEnd: () => mouseUp(),
            })}
          >
            {days.map((child, indexRow) => (
              <tr key={indexRow}>
                {child.map((day, indexColumn) =>
                  day ? (
                    <CalendarCellNumber
                      key={day}
                      id={`${day}`}
                      data-day={day}
                      $isToday={
                        day === currentDay &&
                        currentMonth === today.getMonth() &&
                        currentYear === today.getFullYear()
                      }
                      $isSelected={selectedDays.includes(day)}
                      $isWeekend={indexColumn > 4}
                      onClick={() => click(day)}
                      {...(isMultiSelections && {
                        onMouseDown: () => mouseDown(day),
                        onTouchStart: () => mouseDown(day),
                        onMouseOver: () => mouseOver(day),
                        onMouseUp: () => mouseUp(),
                      })}
                    >
                      {day}
                    </CalendarCellNumber>
                  ) : (
                    <CalendarCellEmpty key={`${indexRow}${indexColumn}`} />
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </CalendarTable>
      </TableContainer>
    </CalendarDiv>
  );
};

export default CalendarItem;
