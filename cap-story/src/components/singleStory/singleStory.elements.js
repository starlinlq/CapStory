import styled from "styled-components";

export const Header = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div``;

export const Content = styled.p`
  font-size: 20px;
  line-height: 2;
  height: 500px;
`;
export const Title = styled.h1`
  margin: 2% 0;
`;
