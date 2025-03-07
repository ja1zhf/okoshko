import Image from "next/image";
import { ReviewDescriptionText, ReviewDiv, ReviewInfoDiv } from "../style";

interface Props {
  name: string;
  avatar: string;
  score: number;
  date: string;
  description: string;
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (_, i) => start + i);

const ReviewItem = (props: Props) => {
  const { name, avatar, score, date, description } = props;

  const dateNew = new Date(date);

  const padZero = (num: number) => (num < 10 ? "0" : "") + num;

  const day = padZero(dateNew.getDate());
  const month = padZero(dateNew.getMonth() + 1);
  const year = dateNew.getFullYear();
  const hours = padZero(dateNew.getHours());
  const minutes = padZero(dateNew.getMinutes());

  const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

  return (
    <ReviewDiv>
      <ReviewInfoDiv>
        <Image
          className="avatar"
          alt="avatar"
          width={50}
          height={50}
          src={avatar ? avatar : "/img/no_avatar.jpg"}
          style={{ objectFit: "cover" }}
        />
        <div>
          <h3>{name}</h3>
          <div>
            <div>
              {range(0, score).map((i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M10.2,48.6c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.5-0.7-0.4-1.1l4.4-16.4L0.4,20.2C0,20-0.1,19.5,0,19.1 c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.1-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.1,15.9l17,0.9c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.8-0.3,1.1L36.4,30.9l4.4,16.4c0.1,0.4,0,0.8-0.4,1.1c-0.3,0.2-0.8,0.3-1.1,0L25,39.2l-14.3,9.2 C10.5,48.6,10.4,48.6,10.2,48.6z"></path>
                </svg>
              ))}
            </div>
            <p>{formattedDate}</p>
          </div>
        </div>
      </ReviewInfoDiv>
      <ReviewDescriptionText>{description}</ReviewDescriptionText>
    </ReviewDiv>
  );
};

export default ReviewItem;
