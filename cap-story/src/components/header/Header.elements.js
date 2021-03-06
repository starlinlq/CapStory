import styled from "styled-components";

export const Section = styled.div`
  background-image: url("https://wallpapershome.com/images/pages/pic_h/17753.jpg");
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Body = styled.div`
  display: flex;
  margin-left: 7%;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  color: white;

  @media screen and (max-width: 960px) {
  }
`;

export const Title = styled.h1``;
export const Story = styled.p`
  opacity: 0.9;
  width: 50%;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;
export const Footer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 30%;
  }
`;
export const Author = styled.p`
  margin: 1% 0;
`;
