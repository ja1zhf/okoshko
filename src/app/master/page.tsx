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
  }

  return (
    <PageDiv>
      <MasterBioDiv>
        <MasterAvatar
          alt="avatar"
          width={80}
          height={80}
          src="/img/avatar.png"
        />
        <MasterNameText>Ида Иванова</MasterNameText>
        <MasterLocationText>
          Туристская ул., д. 24, Приморский р-н, Санкт-Петрбург
        </MasterLocationText>
        <MasterRaitingDiv>
          <MasterStarsText>4.8</MasterStarsText>
          <MasterReviewText>25 оценок</MasterReviewText>
        </MasterRaitingDiv>
      </MasterBioDiv>   
  <MasterLineDiv />
          <MasterBlockDiv> 
  <h2>О себе</h2>
          <MasterDescriptionText></MasterDescriptionText>
          </MasterBlockDiv>
      <MasterBlockDiv>
        <h2>Примеры работ</h2>
      </MasterBlockDiv >
  asterBlockDiv >
        <h2>Услуги</h2>
    erBlockDiv >
  <MasterBlockDiv>
      <h2>Дата</h2>
          <CalendarItem 
            isMultiSeections={false}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      </MasterBlockDiv>
      <MasterBlockDiv> 
    <h2>Время</h2>
    <TimeItem 
      width={00}
      isMultiSelections={false}
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
      
    MasterBlockDiv>
  PageDiv>
  );    
};   
 
Page;
