import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  min-height: 600px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeadPhoto = styled.div`
  background-image: url(${(props) => `${props.data.backgroundPic}`});
  width: 100%;
  background-size: cover;
  min-height: 600px;
  order: ${(props) => (props.data.order ? 2 : 1)};
`;
export const HeadBody = styled.div`
  min-height: 600px;
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
