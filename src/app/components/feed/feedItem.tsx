"use client";

import Image from "next/image";
import {
  MasterDiv,
  MasterInfoDiv,
  MasterLikeDiv,
  MasterServicesDiv,
  MastersListDiv,
} from "./style";
import Link from "next/link";
import PhotosItem from "../photos/photosItem";
import LikeItem from "../like/likeItem";
import UserContext from "@/contexts/userContext";
import { useContext } from "react";

interface Props {
  masters: MasterType[];
}

const FeedItem = (props: Props) => {
  const { masters } = props;

  const { user } = useContext(UserContext);

  return (
    <>
      <MastersListDiv>
        {masters.map((master, index) => {
          if (master.services.length > 0)
            return (
              <MasterDiv key={index}>
                <MasterInfoDiv>
                  <Link href={`/master/${master.id}`}>
                    <Image
                      alt="avatar"
                      width={86}
                      height={86}
                      src={
                        master.profile.avatar_url
                          ? master.profile.avatar_url
                          : "/img/non_avatar.jpg"
                      }
                    />
                  </Link>
                  <div>
                    <h3>
                      {master.profile.first_name} {master.profile.last_name}
                    </h3>
                    <p>{master.address}</p>
                    <div>
                      <div className="scores">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 50 50"
                        >
                          <path d="M10.2,48.6c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.5-0.7-0.4-1.1l4.4-16.4L0.4,20.2C0,20-0.1,19.5,0,19.1 c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.1-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.1,15.9l17,0.9c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.8-0.3,1.1L36.4,30.9l4.4,16.4c0.1,0.4,0,0.8-0.4,1.1c-0.3,0.2-0.8,0.3-1.1,0L25,39.2l-14.3,9.2 C10.5,48.6,10.4,48.6,10.2,48.6z"></path>
                        </svg>
                        <p>
                          {master.reviews.reduce(
                            (sum, review) => sum + review.rating,
                            0,
                          )}
                        </p>
                      </div>
                      <div className="reviews">
                        <p>{master.reviews.length} оценок</p>
                      </div>
                    </div>
                  </div>
                  {user && (
                    <MasterLikeDiv>
                      <LikeItem
                        id={master.id}
                        isActiveButton={master.is_favorited}
                      />
                    </MasterLikeDiv>
                  )}
                </MasterInfoDiv>
                {master.featured_photos.length > 0 && (
                  <PhotosItem photos={master.featured_photos} />
                )}
                <MasterServicesDiv>
                  <div>
                    <Link href={`/master/${master.id}`}>
                      <h2>{master.services[0].title}</h2>
                    </Link>
                    <p>{master.services[0].price} ₽</p>
                  </div>
                  {master.services.length > 1 && (
                    <Link href={`/master/${master.id}`}>
                      <p>Ещё {master.services.length - 1} услуг</p>
                    </Link>
                  )}
                </MasterServicesDiv>
              </MasterDiv>
            );
        })}
      </MastersListDiv>
      {
        // <FeedPageCountDiv>
        //   {[1, 2, 3, 4, 5].map((number) => (
        //     <Link key={number} href="/feed">
        //       {number}
        //     </Link>
        //   ))}
        // </FeedPageCountDiv>
      }
    </>
  );
};

export default FeedItem;
