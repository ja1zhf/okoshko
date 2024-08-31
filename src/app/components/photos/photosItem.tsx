import { useEffect, useRef, useState } from "react";
import { BoxDiv, SlideDiv, SliderDiv, SliderWrapperDiv } from "./style";
import Image from "next/image";

interface Props {
  photos: string[];
}

const PhotosItem = (props: Props) => {
  const { photos } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
  const [sliderConstraints, setSliderConstraints] = useState({
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const calcSliderChildrenWidth = () => {
      const childrenWidth = Array.from(ref.current!.childNodes).length * 320;
      setSliderChildrenWidth(childrenWidth);
      setSliderConstraints({
        left: -childrenWidth + window.innerWidth,
        right: 0,
      });
    };

    const calcSliderWidth = () => {
      setSliderWidth(ref.current!.offsetWidth);
    };

    calcSliderWidth();
    calcSliderChildrenWidth();
    window.addEventListener("resize", calcSliderWidth);
    window.addEventListener("resize", calcSliderChildrenWidth);

    return () => {
      window.removeEventListener("resize", calcSliderWidth);
      window.removeEventListener("resize", calcSliderChildrenWidth);
    };
  }, [sliderWidth]);

  return (
    <SliderWrapperDiv>
      <SliderDiv
        ref={ref}
        drag="x"
        dragConstraints={sliderConstraints}
        style={{ cursor: "grab", width: sliderChildrenWidth }}
      >
        {photos.map((photo, index) => (
          <SlideDiv key={index}>
            <Image alt="image" width={128} height={128} src={photo} />
          </SlideDiv>
        ))}
      </SliderDiv>
    </SliderWrapperDiv>
  );
};

export default PhotosItem;
