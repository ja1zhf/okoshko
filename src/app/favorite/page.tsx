"use client";

import FeedItem from "../components/feed/feedItem";
import { PageDiv } from "../styles/style";
import { FavoritePageTitle } from "./style";

const Page = () => {
  const masters: Master[] = [
    {
      name: "Ида Иванова",
      avatar: "/img/avatar.png",
      location: "Туристская ул., д. 24, Санкт-Петербург",
      scores: 4.5,
      reviewsCount: 25,
      photos: ["/img/avatar.png", "/img/avatar.png", "/img/avatar.png"],
      title: "Маникюр с покрытием ногтей гель-лаком",
      price: 1300,
    },
    {
      name: "Ида Иванова",
      avatar: "/img/avatar.png",
      location: "Туристская ул., д. 24, Санкт-Петербург",
      scores: 4.5,
      reviewsCount: 23,
      photos: ["/img/avatar.png", "/img/avatar.png", "/img/avatar.png"],
      title: "Маникюр с покрытием ногтей гель-лаком",
      price: 1300,
    },
  ];

  return (
    <PageDiv>
      <FavoritePageTitle>Избранное</FavoritePageTitle>
      <FeedItem masters={masters} />
    </PageDiv>
  );
};

export default Page;
