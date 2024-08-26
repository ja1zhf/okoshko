"use client";

import BannerItem from "./components/banner/bannerItem";
import CategoryPlateItem from "./components/categoryPlate/categoryPlateItem";
import { CategoryPlateGrid } from "./styles/style";

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
      title: "Лицо",
      description: "Макияж, массаж,\nуходовые\nпроцедуры",
      backgroundSrc: "/img/face.png",
      href: "/face",
    },
    {
      title: "Волосы",
      description: "Окрашивание,\nукладка, стрижки,\nнаращивание",
      backgroundSrc: "/img/hair.png",
      href: "/hair",
    },
    {
      title: "Тело",
      description: "Косметология,\nмассаж тела,\nSPA программы",
      backgroundSrc: "/img/body.png",
      href: "/body",
    },
    {
      title: "Эпиляция",
      description: "Лазерная и\nфотоэпиляция,\nбиоэпиляция",
      backgroundSrc: "/img/epilation.png",
      href: "/epilation",
    },
  ];

  return (
    <div>
      <CategoryPlateGrid>
        {categories.map((category, index) => (
          <CategoryPlateItem key={index} category={category} />
        ))}
      </CategoryPlateGrid>
      <BannerItem />
    </div>
  );
};

export default Home;
