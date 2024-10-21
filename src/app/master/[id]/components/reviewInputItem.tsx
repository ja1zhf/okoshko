import { ReviewInputDiv } from "../style";
import { useState } from "react";

interface Props {
  masterId: number;
  getMasterInfo: () => Promise<void>;
}

const ReviewInputItem = (props: Props) => {
  const { masterId, getMasterInfo } = props;

  const [value, setValue] = useState("");

  const click = async () => {
    if (value.length > 0) {
      await fetch("https://dev.okoshko.space/review/write_review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          master: masterId,
          rating: 5,
          review_text: value,
        }),
      });

      setValue("");

      await getMasterInfo();
    }
  };

  return (
    <ReviewInputDiv>
      <textarea
        placeholder="Написать отзыв"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={click}>Отправить</button>
    </ReviewInputDiv>
  );
};

export default ReviewInputItem;
