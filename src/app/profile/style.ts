import styled from "styled-components";

export const ProfilePageTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AvatarBlockDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    border-radius: 20%;
  }
`;

export const AvatarLoadButton = styled.label`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  padding: 18px;
  border: none;
  border-radius: 2.5em;
  background-color: #f5f5f9;
`;

export const AvatarEditButton = styled.input`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  padding: 18px;
  border: none;
  border-radius: 2.5em;
  background-color: #f5f5f9;
`;

export const ProfileInputDiv = styled.div`
  display: flex;
  gap: 16px;
`;
