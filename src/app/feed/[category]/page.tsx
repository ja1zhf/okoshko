"use client";

import Image from "next/image";
import { PageDiv } from "../../styles/style";
import { FeedFilterButton, FeedHeaderDiv, FeedTitle } from "./style";
import FeedItem from "../../components/feed/feedItem";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Params {
  category: string;
}

const Page = ({ params }: { params: Params }) => {
  const { category } = params;

  const [masters, setMasters] = useState<MasterType[]>([]);

  const allowedCategories = [
    "nails",
    "eyebrows",
    "face",
    "hair",
    "body",
    "epilation",
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  const service = searchParams.get("service");

  if (!allowedCategories.includes(category)) {
    notFound();
  }

  useEffect(() => {
    (async function () {
      let body;

      if (service !== "Все услуги") {
        body = { speciality: category, service };
      } else {
        body = { speciality: category };
      }

      const response = await fetch(
        "https://dev.okoshko.space/masters/get_masters_filtered/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(body),
        },
      );

      const result: { status: number; masters: MasterType[] } =
        await response.json();

      setMasters(result.masters);
    })();
  }, []);

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
      {masters && masters.length > 0 ? (
        <FeedItem
          masters={masters}
          currentServices={service !== "Все услуги" ? service : null}
        />
      ) : (
        <p>Мастера не найдены</p>
      )}
    </PageDiv>
  );
};

export default Page;
