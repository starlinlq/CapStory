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

export const Body = styled.div`
  min-height: 700px;
`;

export const Content = styled.p`
  font-size: 20px;
  line-height: 2.5;
  margin: 0 15%;
`;
export const Title = styled.h1`
  margin-top: 5%;
  margin-bottom: 2%;
  text-align: center;
`;

export const CommentSection = styled.div`
  margin-bottom: 7%;
  display: flex;
  justify-content: center;
`;
export const CreateComment = styled.div`
  width: 50%;
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
  font-size: 1.2rem;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px lightblue;
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

export const DisplayComment = styled.div``;
export const Form = styled.form``;
