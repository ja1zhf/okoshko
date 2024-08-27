"use client";

import { useState } from "react";
import CalendarItem from "../components/calendar/calendarItem";
import { PageDiv } from "../styles/style";
import {
  MasterAvatar,
  MasterBioDiv,
  MasterBlockDiv,
  MasterDescriptionText,
  MasterLineDiv,
  MasterLocationText,
  MasterNameText,
  MasterRaitingDiv,
  MasterReviewText,
  MasterStarsText,
} from "./style";
import TimeItem from "../components/time/timeItem";

const Page = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedTime, setSelectedTime] = useState<number[]>([]);

  const master = {
    name: "Ида Иванова",
    avatar: "/img/avatar.png",
  };

  return (
    <PageDiv>
      <MasterBioDiv></MasterBioDiv>
    </PageDiv>
  );
};

export default Page;
