import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  min-height: 700px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeadVideo = styled.video`
  width: 60%;
  -o-object-fit: cover;
  object-fit: cover;
  order: ${(props) => (props.data.order ? 2 : 1)};
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 500px;
  }
`;

export const HeadPhoto = styled.image`
  background-image: url(${(props) => `${props.data.backgroundPic}`});
  width: 60%;
  background-size: cover;
  order: ${(props) => (props.data.order ? 2 : 1)};

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 500px;
  }
`;
export const HeadBody = styled.div`
  width: 40%;
  min-height: 700px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  background-color: ${(props) => (props.data.order ? "black" : "white")};
  color: ${(props) => (props.data.order ? "white" : "black")};
  order: ${(props) => (props.data.order ? "1" : "2")};
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 500px;
  }
`;

export const Title = styled.h1`
  width: 80%;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;
export const Story = styled.p`
  opacity: 0.9;
  margin: 4% 0;
  width: 80%;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;
export const Footer = styled.div`
  display: ${(props) => (props.data.noDisplay ? "none" : "flex")};
  width: 80%;
  margin-top: 2%;
  justify-content: center;

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  &:hover {
    color: salmon;
  }
`;
export const FooterLinks = styled.div`
  width: 100%;
  text-align: center;
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: white;
  border: 1px solid lightgrey;
  padding: 0.5% 6%;
  margin-right: 1%;
  cursor: pointer;

  &:hover {
    border-color: salmon;
  }
`;
