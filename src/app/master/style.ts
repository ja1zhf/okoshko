import Image from "next/image";
import styled from "styled-components";

export const MasterBioDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
