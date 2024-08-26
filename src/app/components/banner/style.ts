import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 16px;
`;

export const BannerDiv = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 150px;
  border-radius: 20px;
`;

export const BannerCirclesDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const BannerCircleDiv = styled.div<{ $isActive?: boolean }>`
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.black : props.theme.colors.gray};
  width: 8px;
  height: 8px;
  border-radius: 100%;
`;
