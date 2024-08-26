import { notFound } from "next/navigation";
import {
  CategoryDateAndBlockDiv,
  CategoryInfoDiv,
  CategorySearchBackLink,
  CategorySearchDiv,
  CategorySearchTitle,
} from "./style";
import InputItem from "@/app/components/input/inputItem";

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

  if (!allowedCategories.includes(category)) {
    notFound();
  }

  return (
    <CategorySearchDiv>
      <CategoryInfoDiv>
        <CategorySearchBackLink href="/">Все категории</CategorySearchBackLink>
        <CategorySearchTitle>
          {title[allowedCategories.indexOf(category)]}
        </CategorySearchTitle>
      </CategoryInfoDiv>
      <InputItem title="Услуга" />
      <InputItem title="Район" />
      <CategoryDateAndBlockDiv>
        <h2>Дата</h2>
      </CategoryDateAndBlockDiv>
      <CategoryDateAndBlockDiv>
        <h2>Время</h2>
      </CategoryDateAndBlockDiv>
    </CategorySearchDiv>
  );
};

export default Page;
