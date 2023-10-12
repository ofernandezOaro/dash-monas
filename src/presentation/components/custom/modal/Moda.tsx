import { createPortal } from "preact/compat";
import styled from "styled-components";

interface Props {
  children: JSX.Element | JSX.Element[] | DocumentFragment | React.ReactNode;
  isClosable?: () => void;
  title?: string;
  isOpened: boolean;
}

const BackDropStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000045;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const ClosableModalStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalStyled = styled.div`
  // size
  width: 80%;
  border-radius: 8px;
  border-color: 1px solid #5892ec36;
  background-color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  button {
    cursor: pointer;
  }
`;

export const Modal = ({ title, isClosable, isOpened,  children }: Props) => {
  const modalRoot = document.getElementById("modal");

  if (!isOpened) {
    return null;
  }
  return createPortal(
    <BackDropStyled>
      <ModalStyled>
        <header>
          {title && <h2>{title}</h2>}
          {isClosable && (
            <ClosableModalStyled>
              <button type="button" onClick={isClosable}>
                ✖️
              </button>
            </ClosableModalStyled>
          )}
        </header>
        {children}
      </ModalStyled>
    </BackDropStyled>,
    modalRoot as Element
  );
};
