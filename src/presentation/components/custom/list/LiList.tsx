import styled from "styled-components";

interface ListProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const LiStyled = styled.li`
  // color ⬇
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.blackColor};

  // font ⬇
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  // size ⬇
  width: fit-content;
  // spacing ⬇
  padding: 0.5rem 0.5rem;

  // list-style ⬇
  list-style: none;
  border-bottom: 1px solid ${(props) => props.theme.primaryColor};

  // cursor ⬇
  cursor: pointer;

  transition: 0.3s ease-in-out;
  // hover ⬇
  &:hover {
    background-color: #f5f5f5;
    transition: 0.3s ease-in-out;
  }
`;

export const LiList = ({ children }: ListProps) => {
  return <LiStyled>{children}</LiStyled>;
};
