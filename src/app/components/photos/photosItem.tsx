import { useLayoutEffect, useRef, useState } from "react";
import { SlideDiv, SliderDiv, SliderWrapperDiv } from "./style";
import Image from "next/image";

interface Props {
  photos: string[];
}

const PhotosItem = ({ photos }: Props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderConstraints, setSliderConstraints] = useState({
    left: 0,
    right: 0,
  });

  const calculateConstraints = () => {
    if (wrapperRef.current && sliderRef.current) {
      const wrapperWidth = wrapperRef.current.offsetWidth;
      const sliderWidth = sliderRef.current.scrollWidth;

      const maxDrag = sliderWidth - wrapperWidth;

      setSliderConstraints({
        left: maxDrag > 0 ? -maxDrag : 0, 
        right: 0,
      });
    }
  };

  useLayoutEffect(() => {
    calculateConstraints();

    const resizeObserver = new ResizeObserver(() => {
      calculateConstraints();
    });

    if (wrapperRef.current) {
      resizeObserver.observe(wrapperRef.current);
    }
    if (sliderRef.current) {
      resizeObserver.observe(sliderRef.current);
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, [photos]);

  return (
    <SliderWrapperDiv ref={wrapperRef} style={{ overflow: "hidden" }}>
      <SliderDiv
        ref={sliderRef}
        drag="x"
        dragConstraints={sliderConstraints}
        style={{ cursor: "grab", display: "flex" }} 
      >
        {photos.map((photo, index) => (
          <SlideDiv key={index} style={{ flex: "0 0 auto", marginRight: "12px" }}>
            <Image alt={`Photo ${index + 1}`} width={128} height={128} src={photo} />
          </SlideDiv>
        ))}
      </SliderDiv>
    </SliderWrapperDiv>
  );
};

export default PhotosItem;
