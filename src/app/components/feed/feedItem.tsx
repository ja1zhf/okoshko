"use client";

import Image from "next/image";
import {
  FeedPageCountDiv,
  MasterDiv,
  MasterInfoDiv,
  MasterLikeDiv,
  MasterServicesDiv,
  MastersListDiv,
} from "./style";
import Link from "next/link";
import PhotosItem from "../photos/photosItem";
import LikeItem from "../like/likeItem";

interface Props {
  masters: Master[];
}

const FeedItem = (props: Props) => {
  const { masters } = props;

  return (
    <>
      <MastersListDiv>
        {masters.map((master, index) => (
          <MasterDiv key={index}>
            <MasterInfoDiv>
              <Link href="/master">
                <Image
                  alt="avatar"
                  width={86}
                  height={86}
                  src={master.avatar}
                />
              </Link>
              <div>
                <h3>{master.name}</h3>
                <p>{master.location}</p>
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
                    <p>{master.scores}</p>
                  </div>
                  <div className="reviews">
                    <p>{master.reviewsCount} оценок</p>
                  </div>
                </div>
              </div>
              <MasterLikeDiv>
                <LikeItem />
              </MasterLikeDiv>
            </MasterInfoDiv>
            <PhotosItem photos={master.photos} />
            <MasterServicesDiv>
              <div>
                <Link href="/master">
                  <h2>{master.title}</h2>
                </Link>
                <p>{master.price} ₽</p>
              </div>
              <Link href="/master">
                <p>Ещё 48 услуг</p>
              </Link>
            </MasterServicesDiv>
          </MasterDiv>
        ))}
      </MastersListDiv>
      <FeedPageCountDiv>
        {[1, 2, 3, 4, 5].map((number) => (
          <Link key={number} href="/feed">
            {number}
          </Link>
        ))}
      </FeedPageCountDiv>
    </>
  );
};

export default FeedItem;