import styled from "styled-components";

export const FeedTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const FeedHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeedFilterButton = styled.button`
  border: none;
  padding: 0px;
  background-color: transparent;
`;
