import styled from "styled-components";
import { Link } from "react-router-dom";
export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin: 10px 0;
`;

export const ImgWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin: 10px 0;
  border: 2px solid white;
  border-radius: 7px;

  &:hover {
    border-color: black;
  }
`;
export const Header = styled.div`
  margin-top: 10%;
  display: flex;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgrey;
  width: 30%;
`;
export const Body = styled.div`
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;
export const HeadBody = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  margin: 0 5px;

  padding-right: 10px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkComp = styled(Link)``;

export const Edit = styled.button`
  display: inline-block;
  border: 1px solid black;
  margin-right: 10px;
  cursor: pointer;
  background-color: white;
  text-decoration: none;
  padding: 4px 25px;
  color: black;
  &:hover {
    border-color: salmon;
  }
  @media screen and (max-width: 700px) {
    padding: 5px 30px;
  }
`;
export const Delete = styled.button`
  padding: 4px 15px;
  background-color: white;
  display: inline-block;
  border: 1px solid black;

  cursor: pointer;
  &:hover {
    border-color: salmon;
  }

  @media screen and (max-width: 700px) {
    padding: 5px 25px;
  }
`;
export const Img = styled.img`
  background-image: url(${({ url }) => `${url}`});
  width: 300px;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 7px;

  @media screen and (max-width: 700px) {
    width: 350px;
    height: 300px;
  }
`;

export const Title = styled.h4`
  width: 100%;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const ConfirmDelete = styled.div`
  width: 450px;
  padding: 2% 0;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  box-shadow: 1px -1px 11px -1px rgba(105, 102, 102, 0.75);
  border-radius: 7px;
  text-align: center;
  display: ${({ display }) => (display ? "block" : "none")};
`;
export const Container = styled.div`
  position: relative;
  margin: 0 15%;
`;

export const P = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2%;
  font-weight: bold;
`;
export const Button = styled.button`
  font-size: 1.1rem;
  padding: 0.5% 6%;
  margin: 0 1%;
  background: none;
  cursor: pointer;
  border: 1px solid black;
  &:hover {
    border-color: salmon;
  }
`;
