import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.div`
  display: flex;
  min-height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
/* export const HeadPhoto = styled.image`
  background-image: url(${(props) => `${props.url}`});
  width: 60%;
  background-size: cover;
`;
 */
export const FootBody = styled.div`
  width: 550px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FootTitle = styled.h2`
  margin-left: 1%;
`;

export const TitleWrap = styled.div`
  width: 100%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3%;
  padding: 2% 0;
  font-size: 1.1rem;
`;
export const Container = styled.div``;
export const Button = styled(Link)`
  margin: 0 2%;
  border: 1px solid black;
  padding: 0.5% 5%;
  text-decoration: none;
  color: black;

  &:hover {
    border-color: salmon;
  }
`;
