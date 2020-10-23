import styled from "styled-components";
export const Header = styled.div`
  display: flex;
  height: 600px;
`;

export const HeadPhoto = styled.div`
  background-image: url("https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  order: ${(props) => (props.objOne ? 1 : 2)};
`;
export const HeadBody = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.objOne ? "white" : "black")};
  color: ${(props) => (props.objOne ? "black" : "white")};
  order: ${(props) => (props.objOne ? 2 : 1)};
  @media screen and (max-width: 960px) {
  }
`;

export const Title = styled.h1`
  width: 70%;
`;
export const Story = styled.p`
  opacity: 0.9;

  width: 70%;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;
export const Footer = styled.div`
  display: flex;
  width: 70%;
  margin-top: 2%;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 30%;
  }
`;
export const Author = styled.p`
  margin: 1% 0;
`;
