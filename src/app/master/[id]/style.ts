import Image from "next/image";
import styled from "styled-components";

export const MasterBioDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  align-items: center;
  width: 100%;
`;

export const MasterAvatar = styled(Image)`
  border-radius: 20px;
`;

export const MasterNameText = styled.h1`
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const MasterLocationText = styled.p`
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
`;

export const MasterRaitingDiv = styled.div`
  display: flex;
  gap: 10px;

  & > .score {
    display: flex;
    align-items: center;
    gap: 4px;

    & > svg {
      width: 14px;
      height: 14px;
      fill: #bdae95;
    }
  }
`;

export const MasterStarsText = styled.p`
  color: #bdae95;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const MasterReviewText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const MasterLineDiv = styled.div`
  background-color: #dcdae0;
  width: 100%;
  height: 1px;
`;

export const MasterBlockDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > h2 {
    color: ${(props) => props.theme.colors.black};
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  }
`;

export const MasterDescriptionText = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
`;

export const MasterServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ServiceButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border: none;
  border-radius: 16px;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary : "#F5F5F9"};
  transition: background-color 0.2s ease;

  & > .info {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2px;

    & > h3 {
      color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.black};
      font-feature-settings:
        "liga" off,
        "clig" off;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 125%;
      transition: color 0.2s ease;
      text-align: start;
    }

    & > p {
      color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.black};
      font-feature-settings:
        "liga" off,
        "clig" off;
      font-size: 16px;
      font-style: normal;
      font-weight: 450;
      line-height: 150%;
      transition: color 0.2s ease;
    }
  }

  & > .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color: ${(props) =>
    props.$isActive ? "rgba(245, 245, 249, 0.3)" : "#CCC3D8"};

    & > svg {
      width: 16px;
      height: 16px;
      fill: ${(props) =>
    props.$isActive ? props.theme.colors.primary : "#F5F5F9"};
    }
  }
`;

export const ReviewsListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
`;

export const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ReviewInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > .avatar {
    border-radius: 10px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    & > h3 {
      overflow: hidden;
      color: ${(props) => props.theme.colors.black};
      font-feature-settings:
        "liga" off,
        "clig" off;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }

    & > div {
      display: flex;
      gap: 10px;

      & > div {
        display: flex;
        align-items: center;
        gap: 2px;

        & > svg {
          fill: #bdae95;
          width: 15px;
          height: 15px;
        }
      }

      & > p {
        overflow: hidden;
        color: ${(props) => props.theme.colors.gray};
        font-feature-settings:
          "liga" off,
          "clig" off;
        text-overflow: ellipsis;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }
`;

export const ReviewDescriptionText = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const MasterLikeDiv = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const ReviewInputDiv = styled.div`
  display: flex;
  gap: 12px;

  textarea {
    width: 100%;
    color: ${(props) => props.theme.colors.black};
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    outline: none;
    resize: none;
    font-family: "__PtRootUiVf_1e8a4b", "__PtRootUiVf_Fallback_1e8a4b";
    padding: 12px;
    border-radius: 10px;
    border: 1px solid rgba(24, 23, 26, 0.12);
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      outline-style: solid;
      outline-color: ${(props) => props.theme.colors.primary}4D;
      outline-width: thick;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.gray};
      font-feature-settings:
        "liga" off,
        "clig" off;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }

  button {
    display: flex;
    width: 100px;
    height: 50px;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    font-feature-settings:
      "liga" off,
      "clig" off;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
