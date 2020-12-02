import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;
export const Header = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 960px) {
    height: 400px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  @media screen and (max-width: 960px) {
  }
`;

export const Content = styled.p`
  font-size: 20px;
  line-height: 2;
  margin: 0 15%;

  @media screen and (max-width: 960px) {
    margin: 0 5%;
    text-align: justify;
  }
`;
export const Title = styled.h1`
  text-align: center;
  margin: 2% 0;

  @media screen and (max-width: 960px) {
    margin: 5% 0;
  }
`;

export const CommentSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;
export const CreateComment = styled.div`
  width: 100%;
  margin: 0 15%;
  margin-bottom: 2%;
`;
export const Input = styled.input`
  padding: 8px 0;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid lightgrey;
  width: 100%;
  margin-bottom: 5px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px lightblue;
  }
`;
export const TextArea = styled.textarea`
  display: block;
  border-radius: 5px;
  width: 100%;
  font-size: 1.1rem;
  border: 1px solid black;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px salmon;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  padding: 8px;
  background: none;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    border-color: salmon;
  }
`;

export const DisplayComment = styled.div`
  margin: 0 15%;
  border: 1px solid #f1f6f9;
  border: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 2%;

  @media screen and (max-width: 960px) {
    margin: 2% 5%;
  }
`;
export const Form = styled.form``;
export const CommentHead = styled.div`
  display: flex;
  background-color: #f4f4f2;
  align-items: center;
  padding: 1% 0;
`;
export const CommentContent = styled.p`
  padding: 1.5% 0;
  line-height: 2;
  margin: 0 2.5%;
  text-align: justify;
`;
export const ComentAuthor = styled(Link)`
  color: blue;
  cursor: pointer;
  padding: 0 10px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: black;
  }
`;
export const CommentDate = styled.h5`
  color: #bbbfca;
`;

export const CommentAuth = styled.div`
  margin: 15px 0;
  font-size: 1.2rem;
  border: 1px solid lightgray;
  padding: 5px;
  border-radius: 5px;
`;
export const Login = styled(Link)`
  text-decoration: none;

  &:hover {
    color: blue;
  }
`;
export const CommentBody = styled.p``;
export const Delete = styled.div`
  margin-left: auto;
  font-size: 1.2rem;
  color: red;
  margin-right: 25px;
  cursor: pointer;

  &:hover {
    color: salmon;
  }
`;
