"use client";

import BannerItem from "./components/banner/bannerItem";
import CategoryPlateItem from "./components/categoryPlate/categoryPlateItem";
import { CategoryBlockDiv, CategoryPlateGrid } from "./styles/style";

const Home = () => {
  const categories: CategoryType[] = [
    {
      title: "Ногти",
      description: "Маникюр,\nпедикюр и\nещё…",
      backgroundSrc: "/img/nails.png",
      href: "/nails",
    },
    {
      title: "Брови и ресницы",
      description: "Фформление\nбровей, макияж,\nнаращивание",
      backgroundSrc: "/img/eyebrows.png",
      href: "/eyebrows",
    },
    {
      title: "Уход за лицом",
      description: "Макияж, массаж,\nуходовые\nпроцедуры",
      backgroundSrc: "/img/face.png",
      href: "/face",
    },
    {
      title: "Макияж",
      description: "Окрашивание,\nукладка, стрижки,\nнаращивание",
      backgroundSrc: "/img/hair.png",
      href: "/makeup",
    },
    {
      title: "Волосы",
      description: "Косметология,\nмассаж тела,\nSPA программы",
      backgroundSrc: "/img/body.png",
      href: "/hair",
    },
    {
      title: "Тело",
      description: "Лазерная и\nфотоэпиляция,\nбиоэпиляция",
      backgroundSrc: "/img/epilation.png",
      href: "/body",
    },
  ];

  return (
    <CategoryBlockDiv>
      <CategoryPlateGrid>
        {categories.map((category, index) => (
          <CategoryPlateItem key={index} category={category} />
        ))}
      </CategoryPlateGrid>
      <BannerItem />
    </CategoryBlockDiv>
  );
};

export default Home;
