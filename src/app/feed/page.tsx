"use client";

import Image from "next/image";
import { PageDiv } from "../styles/style";
import { FeedFilterButton, FeedHeaderDiv, FeedTitle } from "./style";
import FeedItem from "../components/feed/feedItem";
import { useRouter } from "next/navigation";

const Page = () => {
  const masters: Master[] = [
    {
      name: "Ида Иванова",
      avatar: "/img/avatar.png",
      location: "Туристская ул., д. 24, Санкт-Петербург",
      scores: 4.5,
      reviewsCount: 25,
      photos: [
        "/img/avatar.png",
        "/img/avatar.png",
        "/img/avatar.png",
        "/img/avatar.png",
        "/img/avatar.png",
      ],
      title: "Маникюр с покрытием ногтей гель-лаком",
      price: 1300,
    },
    {
      name: "Ида Иванова",
      avatar: "/img/avatar.png",
      location: "Туристская ул., д. 24, Санкт-Петербург",
      scores: 4.5,
      reviewsCount: 23,
      photos: [
        "/img/avatar.png",
        "/img/avatar.png",
        "/img/avatar.png",
        "/img/avatar.png",
        "/img/avatar.png",
      ],
      title: "Маникюр с покрытием ногтей гель-лаком",
      price: 1300,
    },
  ];

  const router = useRouter();

  return (
    <PageDiv>
      <FeedHeaderDiv>
        <FeedTitle>Feed</FeedTitle>
        <FeedFilterButton onClick={() => router.back()}>
          <Image
            alt="setting-icon"
            width={30}
            height={30}
            src="/settings.svg"
          />
        </FeedFilterButton>
      </FeedHeaderDiv>
      <FeedItem masters={masters} />
    </PageDiv>
  );
};

export default Page;
