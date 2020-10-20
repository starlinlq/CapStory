import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  display: flex;
  margin-top: 5%;
`;
export const MainCard = styled.div`
  background-image: url("https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f285681289af0e7316b841b%2F0x0.jpg");
  background-repeat: no-repeat;
  height: 325px;
  width: 250px;
  background-size: cover;
  &:hover {
  }
`;

export const CardBody = styled(Link)`
  display: flex;
  height: 100%;
  width: 90%;
  margin: 0;
  margin-left: 10%;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
`;

export const Date = styled.p`
  margin: 0;
  font-size: 12px;
`;
export const Title = styled.h3`
  margin: 0;
  padding: 2% 0;
`;
export const Author = styled.p`
  margin: 0;
  font-size: 11px;
  margin-bottom: 7%;
`;
export const CardFooter = styled.div`
  border-top: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 80%;
  cursor: pointer;
`;
