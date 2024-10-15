"use client";

import Image from "next/image";
import { PageDiv } from "../../styles/style";
import { FeedFilterButton, FeedHeaderDiv, FeedTitle } from "./style";
import FeedItem from "../../components/feed/feedItem";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Params {
  category: string;
}

const Page = ({ params }: { params: Params }) => {
  const { category } = params;

  const [masters, setMasters] = useState<MasterFeed[] | null>(null);

  const allowedCategories = [
    "nails",
    "eyebrows",
    "face",
    "hair",
    "body",
    "epilation",
  ];

  const router = useRouter();

  if (!allowedCategories.includes(category)) {
    notFound();
  }

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://dev.okoshko.space/masters/get_masters_filtered/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ speciality: category }),
        },
      );

      const result: { status: number; masters: MasterFeed[] } =
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
      {masters && <FeedItem masters={masters} />}
    </PageDiv>
  );
};

export default Page;
