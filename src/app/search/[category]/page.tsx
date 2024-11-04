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
    "makeup",
    "hair",
    "body",
  ];

  const title = [
    "Ногти",
    "Брови и ресницы",
    "Уход за лицом",
    "Макияж",
    "Волосы",
    "Тело",
  ];

  const [services, setServices] = useState<{ id: number; title: string }[]>([]);

  const [selectedServices, setSelectedServices] = useState(0);
  const [selectedDistrict, setSelectedDistrict] = useState(0);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);

  if (!allowedCategories.includes(category)) {
    notFound();
  }

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://dev.okoshko.space/service/services-by-speciality-name/${title[allowedCategories.indexOf(category)]}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const result: {
        status: number;
        available_services: ServiceInputType[];
      } = await response.json();

      let temp = [{ id: 0, title: "Все услуги" }];

      result.available_services.map((service) => {
        temp.push({ id: service.id, title: service.name });
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
        options={[
          { id: 0, title: "variant 1" },
          { id: 1, title: "variant 2" },
        ]}
        selectedOption={selectedDistrict}
        setSelectedOption={setSelectedDistrict}
      />
      <CategoryDateAndBlockDiv>
        <h2>Дата</h2>
        <CalendarItem
          isMultiSelections={false}
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
        whileTap={{ scale: 0.9 }}
      >
        Показать мастеров
      </SubmitButton>
    </PageDiv>
  );
};

export default Page;
