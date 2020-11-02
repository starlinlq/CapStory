import styled from "styled-components";
import { Link } from "react-router-dom";
export const Section = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;
export const Header = styled.div`
  margin-top: 10%;
  display: flex;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  width: 30%;
`;
export const Body = styled.div`
  padding: 2%;
`;
export const HeadBody = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3rem;
  margin: 0 5px;
  border-right: 1px solid lightgrey;
  padding-right: 10px;

  &:hover {
    color: salmon;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Edit = styled(Link)`
  display: inline-block;

  margin-right: 10%;
  border: 1px solid black;
  padding: 2.5px 40px;
  cursor: pointer;
  background-color: white;
  text-decoration: none;
  color: black;
  &:hover {
    border-color: salmon;
  }
`;
export const Delete = styled.button`
  background-color: white;
  display: inline-block;
  border: 1px solid black;
  padding: 3.8px 35px;

  cursor: pointer;
  &:hover {
    border-color: salmon;
  }
`;
export const Img = styled.img`
  background-image: url(${({ url }) => `${url}`});
  width: 150px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;
