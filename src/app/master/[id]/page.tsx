"use client";

import { Fragment, useContext, useEffect, useState } from "react";
import CalendarItem from "../../components/calendar/calendarItem";
import { PageDiv, SubmitButton } from "../../styles/style";
import {
  MasterAvatar,
  MasterBioDiv,
  MasterBlockDiv,
  MasterDescriptionText,
  MasterLikeDiv,
  MasterLineDiv,
  MasterLocationText,
  MasterNameText,
  MasterRaitingDiv,
  MasterReviewText,
  MasterServicesList,
  MasterStarsText,
  ReviewsListDiv,
} from "./style";
import TimeItem from "../../components/time/timeItem";
import ServicesItem from "./components/servicesItem";
import ReviewItem from "./components/reviewItem";
import PhotosItem from "@/app/components/photos/photosItem";
import LikeItem from "../../components/like/likeItem";
import ReviewInputItem from "./components/reviewInputItem";
import UserContext from "@/contexts/userContext";

interface Params {
  id: string;
}

const Page = ({ params }: { params: Params }) => {
  const { id } = params;

  const { user } = useContext(UserContext);

  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedTime, setSelectedTime] = useState<number[]>([]);

  const [master, setMaster] = useState<MasterInfo | null>(null);

  const getMasterInfo = async () => {
    const response = await fetch(
      `https://dev.okoshko.space/masters/get_master/${id}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    const result: { status: number; master_info: MasterInfo } =
      await response.json();

    setMaster(result.master_info);
  };

  useEffect(() => {
    getMasterInfo();
  }, []);

  return (
    <PageDiv>
      <MasterBioDiv>
        <MasterAvatar
          alt="avatar"
          width={80}
          height={80}
          src={master ? master.profile.avatar_path : ""}
        />
        <MasterNameText>
          {master?.profile.first_name} {master?.profile.last_name}
        </MasterNameText>
        <MasterLocationText>none location</MasterLocationText>
        <MasterRaitingDiv>
          <div className="score">
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
            <MasterStarsText>
              {master?.reviews.reduce((sum, review) => sum + review.rating, 0)}
            </MasterStarsText>
          </div>
          <MasterReviewText>{master?.reviews.length} оценок</MasterReviewText>
        </MasterRaitingDiv>
        {user && master && (
          <MasterLikeDiv>
            <LikeItem
              id={master?.profile.id}
              isActiveButton={master.is_favorited}
            />
          </MasterLikeDiv>
        )}
      </MasterBioDiv>
      <MasterLineDiv />
      <MasterBlockDiv>
        <h2>О себе</h2>
        <MasterDescriptionText>
          {master?.description.split("\n").map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
        </MasterDescriptionText>
      </MasterBlockDiv>
      <MasterBlockDiv>
        <h2>Примеры работ</h2>
        <PhotosItem photos={[""]} />
      </MasterBlockDiv>
      <MasterBlockDiv>
        <h2>Услуги</h2>
        <MasterServicesList>
          {master?.services.map((service, index) => (
            <ServicesItem
              key={index}
              title={service.title}
              price={service.price}
            />
          ))}
        </MasterServicesList>
      </MasterBlockDiv>
      <MasterBlockDiv>
        <h2>Дата</h2>
        <CalendarItem
          isMultiSelections={false}
          selectedDays={selectedDays}
          currentMonth={selectedMonth}
          currentYear={selectedYear}
          setSelectedDays={setSelectedDays}
          setCurrentMonth={setSelectedMonth}
          setCurrentYear={setSelectedYear}
        />
      </MasterBlockDiv>
      <MasterBlockDiv>
        <h2>Время</h2>
        <TimeItem
          width={300}
          isMultiSelections={false}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      </MasterBlockDiv>
      <SubmitButton>Записаться</SubmitButton>
      <MasterBlockDiv>
        <h2>Отзывы</h2>
        {master &&
          user &&
          !master.reviews.some((review) => review.client.id === user.id) && (
            <ReviewInputItem
              masterId={master.profile.id}
              getMasterInfo={getMasterInfo}
            />
          )}
        <ReviewsListDiv>
          {master?.reviews.map((review, index) => (
            <ReviewItem
              key={index}
              name={review.client.first_name + " " + review.client.last_name}
              avatar={review.client.avatar_path}
              score={review.rating}
              date={review.review_date}
              description={review.review_text}
            />
          ))}
        </ReviewsListDiv>
      </MasterBlockDiv>
    </PageDiv>
  );
};

export default Page;
