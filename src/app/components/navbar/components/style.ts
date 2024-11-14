import Image from "next/image";
import styled from "styled-components";

export const ProfilePopupDiv = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  width: 240px;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  padding: 20px;
`;

export const ProfileAvatar = styled(Image)`
  border-radius: 20%;
`;

export const ProfileNameText = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const ProfileNumberText = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const ProfileEditButton = styled.button`
  color: ${(props) => props.theme.colors.primary};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 0px;
  background-color: transparent;
  border: none;
`;

export const ProfileButtonsDiv = styled.div`
  background-color: rgba(24, 23, 26, 0.04);
  padding: 0px 20px;
`;

export const ProfileLineDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(24, 23, 26, 0.08);
`;

export const ProfileButton = styled.button`
  padding: 12px 0px;
  color: ${(props) => props.theme.colors.gray};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  border: none;
`;

export const CitySelection = styled.select`
  color: ${(props) => props.theme.colors.gray};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  border: none;
  background-color: transparent;
  outline: none;
`;
