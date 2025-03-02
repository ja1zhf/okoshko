"use client";

import { useEffect, useState } from "react";
import FeedItem from "@/app/components/feed/feedItem";
import { PageDiv } from "@/app/styles/style";
import { FavoritePageTitle } from "./style";

const Page = () => {
  const [masters, setMasters] = useState<MasterType[]>([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://dev.okoshko.space/favorites/favorites/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      const result: MasterFavorite[] = await response.json();

      setMasters(
        result.map((item) => {
          return item.master;
        }),
      );
    })();
  }, []);

  return (
    <PageDiv>
      <FavoritePageTitle>Избранное</FavoritePageTitle>
      {masters?.length > 0 ? (
        <FeedItem masters={masters} />
      ) : (
        <p>У вас нет любимых мастеров</p>
      )}
    </PageDiv>
  );
};

export default Page;
