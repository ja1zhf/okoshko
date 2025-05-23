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
import { formatDate } from "@/tools/tools";
import districts from "@/app/districts";
import { useCityContext } from "@/contexts/cityContext";

interface Params {
  category: string;
}

const Page = ({ params }: { params: Params }) => {
  const { category } = params;

  const { city } = useCityContext();

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
  const [districtsOptions, setDistrictsOptions] = useState<
    { id: string; title: string }[]
  >([]);

  const [selectedServices, setSelectedServices] = useState(0);
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

  useEffect(() => {
    const city = districts.find(
      (item) => item.city === localStorage.getItem("city"),
    );

    if (city) {
      let temp = [{ id: "Все районы", title: "Все районы" }];

      city.district.map((district) => {
        temp.push({ id: district, title: district });
      });

      setDistrictsOptions(temp);
      setSelectedDistrict(temp[0].id);
    }
  }, [city]);

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
        options={districtsOptions}
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
          if (selectedDays.length > 0) {
            let formatedDate = formatDate(
              selectedDays[0],
              selectedMonth,
              selectedYear,
            );
            router.push(
              `/feed/${category}?service=${selectedServices}&district=${selectedDistrict}&date=${formatedDate}`,
            );
          } else {
            router.push(
              `/feed/${category}?service=${selectedServices}&district=${selectedDistrict}`,
            );
          }
        }}
        whileTap={{ scale: 0.9 }}
      >
        Показать мастеров
      </SubmitButton>
    </PageDiv>
  );
};

export default Page;
