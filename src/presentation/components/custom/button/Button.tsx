import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
}

const ButtonStyled = styled.button`
  // color ⬇
  background-color: ${(props) => props.theme.blackColor};
  color: ${(props) => props.theme.whiteColor};
  // size ⬇
  width: fit-content;
  height: auto;
  font-size: 1rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  // spacing ⬇
  padding: 0.5rem 1rem;
  // border
  border-radius: 6px;
  border: 0px;
  // shadow ⬇
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
  // cursor ⬇
  cursor: pointer;
`;

export const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};
