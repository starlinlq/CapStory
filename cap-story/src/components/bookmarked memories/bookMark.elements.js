import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  margin: 0 15%;
  margin-top: 5%;

  @media screen and (max-width: 960px) {
    margin: 0 2%;
    margin-top: 5%;
  }
`;
export const Title = styled.h2`
  margin-bottom: 2%;
  @media screen and (max-width: 960px) {
    margin: 5% 0;
  }
`;
export const CardWrapper = styled.div`
  @media screen and (max-width: 960px) {
    margin-bottom: 5%;
  }
`;
