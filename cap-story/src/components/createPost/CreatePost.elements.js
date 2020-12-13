import styled from "styled-components";
import { Button } from "../../global/globalStyles";
import { Link } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  margin: auto;
  border: 1px solid lightgrey;
  border-radius: 7px;
  padding: 1% 0;

  @media screen and (max-width: 960px) {
    width: 400px;
  }
`;

export const FormWrapper = styled.div`
  margin: 2% 0;
`;
export const Section = styled.div`
  width: 75%;
`;

export const Menu = styled.ul`
  width: 75%;
`;
export const FormButton = styled.button`
  width: 100%;
  background: black;
  border: none;
  color: white;
  cursor: pointer;
  padding: 1% 0;
  margin-top: 5%;
  border: 1px solid white;

  &:hover {
    background: none;
    color: black;
    border-color: black;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-top: 5%;
`;
export const Input = styled.input`
  width: 100%;
  padding: 2% 0;
  margin: 4% 0;
`;
export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const TopicButton = styled.li`
  display: inline-block;
  margin: 4% 1%;
  padding: 5px 10px;
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgray;
  border-color: lightgray;

  &:hover {
    border-color: black;
  }
`;

export const FormValidation = styled.p`
color: red;
margin-bottom: 1%;`

export const Nature = styled.li`
  display: inline-block;
  margin: 4% 1%;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active.nature ? "lightblue" : "white")};
  border: 1px solid lightgray;
  border-color: lightgray;

  &:hover {
    border-color: black;
  }
`;
export const Universe = styled.li`
  display: inline-block;
  margin: 4% 1%;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ active }) =>
    active.universe ? "lightblue" : "white"};
  border: 1px solid lightgray;
  border-color: lightgray;

  &:hover {
    border-color: black;
  }
`;
export const Life = styled.li`
  display: inline-block;
  margin: 4% 1%;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active.life ? "lightblue" : "white")};
  border: 1px solid lightgray;
  border-color: lightgray;

  &:hover {
    border-color: black;
  }
`;
export const Other = styled.li`
  display: inline-block;
  margin: 4% 1%;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active.other ? "lightblue" : "white")};
  border: 1px solid lightgray;
  border-color: lightgray;

  &:hover {
    border-color: black;
  }
`;
export const SciFi = styled.li`
  display: inline-block;
  margin: 4% 1%;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active.sciFi ? "lightblue" : "white")};
  border: 1px solid lightgray;
  border-color: lightgray;

  &:hover {
    border-color: black;
  }
`;
export const City = styled.li`
  display: inline-block;
  margin: 4% 1%;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active.city ? "lightblue" : "white")};
  border: 1px solid lightgray;
  border-color: lightgray;

  &:hover {
    border-color: black;
  }
`;
