"use client";

import { notFound } from "next/navigation";
import {
  CategoryDateAndBlockDiv,
  CategoryInfoDiv,
  CategorySearchBackLink,
  CategorySearchButton,
  CategorySearchTitle,
} from "./style";
import InputItem from "@/app/components/input/inputItem";
import CalendarItem from "@/app/components/calendar/calendarItem";
import { useState } from "react";
import TimeItem from "@/app/components/time/timeItem";
import { PageDiv } from "@/app/styles/style";

interface Params {
  category: string;
}

const Page = ({ params }: { params: Params }) => {
  const { category } = params;

  const allowedCategories = [
    "nails",
    "eyebrows",
    "face",
    "hair",
    "body",
    "epilation",
  ];
  const title = [
    "Ногти",
    "Брови и ресницы",
    "Лицо",
    "Волосы",
    "Тело",
    "Эпиляция",
  ];

  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedTime, setSelectedTime] = useState<number[]>([]);

  if (!allowedCategories.includes(category)) {
    notFound();
  }

  return (
    <PageDiv>
      <CategoryInfoDiv>
        <CategorySearchBackLink href="/">Все категории</CategorySearchBackLink>
        <CategorySearchTitle>
          {title[allowedCategories.indexOf(category)]}
        </CategorySearchTitle>
      </CategoryInfoDiv>
      <InputItem title="Услуга" />
      <InputItem title="Район" />
      <CategoryDateAndBlockDiv>
        <div>
          <h2>Дата</h2>
        </div>
        <CalendarItem
          isMultiSelections={true}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      </CategoryDateAndBlockDiv>
      <CategoryDateAndBlockDiv>
        <div>
          <h2>Время</h2>
        </div>
        <TimeItem
          width={300}
          isMultiSelections={true}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      </CategoryDateAndBlockDiv>
      <CategorySearchButton>Показать мастеров</CategorySearchButton>
    </PageDiv>
  );
};

export default Page;
