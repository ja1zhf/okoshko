"use client";

import { useEffect, useState } from "react";
import FeedItem from "../components/feed/feedItem";
import { PageDiv } from "../styles/style";
import { FavoritePageTitle } from "./style";

const Page = () => {
  const [masters, setMasters] = useState<MasterFeed[]>([]);

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
        <p>У вас нету любимых мастеров</p>
      )}
    </PageDiv>
  );
};

export default Page;
