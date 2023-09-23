import styled from "styled-components";

interface ListProps {
  children: React.ReactNode;
}

const UlStyled = styled.ul`
  // spacing ⬇
  padding: 0;
  margin: 0;

  // list-style ⬇
  list-style: none;
`;

export const UlList = ({ children }: ListProps) => {
  return <UlStyled>{children}</UlStyled>;
};
