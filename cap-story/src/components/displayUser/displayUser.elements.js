import styled from "styled-components";
export const MainSec = styled.div`
  position: relative;
`;
export const Section = styled.div`
  margin: 15px 0;
`;
export const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 5%;
  margin-top: 5%;
`;
export const PhotoSec = styled.div`
  text-align: center;
  width: 40%;
`;
export const BioSec = styled.div`
  width: 50%;
  font-size: 1.2rem;
`;
export const Img = styled.img`
  background-image: url("https://eftm.com/wp-content/uploads/2019/04/selfie-iphone.jpg");
  height: 350px;
  width: 350px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50em;

  &:hover {
  }
`;
export const Bio = styled.p``;
export const Title = styled.h4``;
export const Location = styled.p``;
export const Interest = styled.p``;
export const UserName = styled.h2`
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
  width: 45%;
  font-weight: bold;
`;

export const BodySection = styled.div`
  margin-top: 7%;
  min-height: 900px;
`;
export const BodyHeader = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 10px 0;
  padding: 5px 0;
`;
export const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 20px;
  background: none;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    border-color: salmon;
  }
`;
export const EditComment = styled.div`
  display: ${({ edit }) => (edit ? "block" : "none")};
  position: absolute;
  background-color: white;
  top: 50px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 999;
  margin: 0 25%;
  box-shadow: 1px -1px 11px -1px rgba(105, 102, 102, 0.75);
  border-radius: 7px;
  padding: 2% 0;
`;

export const EditBody = styled.div`
  width: 80%;
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 2% 0;
  border: 1px solid lightblue;
  border-radius: 2px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid lightblue;
`;
export const Label = styled.label`
  display: block;
  margin: 8px 0;
  font-weight: bold;
`;

export const SaveButton = styled.button`
  margin-top: 15px;
  background: none;
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 3px;

  &:hover {
    border-color: salmon;
  }
`;
