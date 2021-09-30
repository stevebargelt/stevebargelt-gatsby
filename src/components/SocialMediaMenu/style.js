import styled from "styled-components";

export const SocialMediaMenuWrapper = styled.div`
  margin: auto 0 auto auto;
  display: flex;
`;

export const SocialMediaLink = styled.div`
  margin: auto 0;
  padding: 0 16px;
  line-height: 60px;
  a {
    color: white;
    &:hover {
      color: #999;
    }
    text-decoration: none;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 32px;
  margin: 0 auto;
  border: 2px;
  border-color: red;
`;
