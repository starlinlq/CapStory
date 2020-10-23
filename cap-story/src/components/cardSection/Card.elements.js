import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const MainCard = styled.div`
  background-image: url(${({ imgUrl }) => `${imgUrl}`});
  background-repeat: no-repeat;
  height: 370px;
  width: 25%;
  transition: transform 0.3s;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 550px;
  }
`;

export const CardBody = styled.div`
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
  font-size: 10px;
`;
export const Title = styled.h2`
  margin: 0;
  padding: 2% 0;
`;
export const Author = styled.p`
  margin: 0;
  font-size: 11px;
  margin-bottom: 7%;
`;
export const CardFooter = styled(Link)`
  text-decoration: none;
  color: white;
  border-top: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  cursor: pointer;
  padding: 5% 0 7% 0;
`;
