"use client";

import { notFound, useRouter } from "next/navigation";
import {
  CategoryDateAndBlockDiv,
  CategoryInfoDiv,
  CategorySearchBackLink,
  CategorySearchResetButton,
  CategorySearchTitle,
} from "./style";
import CalendarItem from "@/app/components/calendar/calendarItem";
import { useState } from "react";
import TimeItem from "@/app/components/time/timeItem";
import { PageDiv, SubmitButton } from "@/app/styles/style";
import SelectItem from "@/app/components/select/selectItem";

interface Params {
  category: string;
}

const Page = ({ params }: { params: Params }) => {
  const { category } = params;

  const router = useRouter();

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
        <div>
          <CategorySearchBackLink href="/">
            Все категории
          </CategorySearchBackLink>
          <CategorySearchResetButton>Сбросить</CategorySearchResetButton>
        </div>
        <CategorySearchTitle>
          {title[allowedCategories.indexOf(category)]}
        </CategorySearchTitle>
      </CategoryInfoDiv>
      <SelectItem title="Услуги" options={["variant 1", "variant 2"]} />
      <SelectItem title="Район" options={["variant 1", "variant 2"]} />
      <CategoryDateAndBlockDiv>
        <h2>Дата</h2>
        <CalendarItem
          isMultiSelections={true}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      </CategoryDateAndBlockDiv>
      <CategoryDateAndBlockDiv>
        <h2>Время</h2>
        <TimeItem
          width={300}
          isMultiSelections={true}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      </CategoryDateAndBlockDiv>
      <SubmitButton onClick={() => router.push("/feed")}>
        Показать мастеров
      </SubmitButton>
    </PageDiv>
  );
};

export default Page;
