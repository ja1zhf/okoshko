import {
  BannerCircleDiv,
  BannerCirclesDiv,
  BannerContainer,
  BannerDiv,
} from "./style";

const BannerItem = () => {
  return (
    <BannerContainer>
      <BannerDiv></BannerDiv>
      <BannerCirclesDiv>
        <BannerCircleDiv $isActive />
        <BannerCircleDiv />
        <BannerCircleDiv />
      </BannerCirclesDiv>
    </BannerContainer>
  );
};

export default BannerItem;
