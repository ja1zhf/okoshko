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
import { useEffect, useState } from "react";
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

  const [services, setServices] = useState<string[]>([]);

  const [selectedServices, setSelectedServices] = useState("Все услуги");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);

  if (!allowedCategories.includes(category)) {
    notFound();
  }

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://dev.okoshko.space/service/services/?speciality=${category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const result: { status: number; services: ServicesType[] } =
        await response.json();

      let temp = ["Все услуги"];

      result.services.map((service) => {
        temp.push(service.title);
      });

      setServices(temp);
    })();
  }, []);

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
      <SelectItem
        title="Услуги"
        options={services}
        selectedOption={selectedServices}
        setSelectedOption={setSelectedServices}
      />
      <SelectItem
        title="Район"
        options={["variant 1", "variant 2"]}
        selectedOption={selectedDistrict}
        setSelectedOption={setSelectedDistrict}
      />
      <CategoryDateAndBlockDiv>
        <h2>Дата</h2>
        <CalendarItem
          isMultiSelections={true}
          selectedDays={selectedDays}
          currentMonth={selectedMonth}
          currentYear={selectedYear}
          setSelectedDays={setSelectedDays}
          setCurrentMonth={setSelectedMonth}
          setCurrentYear={setSelectedYear}
        />
      </CategoryDateAndBlockDiv>
      <SubmitButton
        onClick={() => {
          router.push(`/feed/${category}?service=${selectedServices}`);
        }}
      >
        Показать мастеров
      </SubmitButton>
    </PageDiv>
  );
};

export default Page;
