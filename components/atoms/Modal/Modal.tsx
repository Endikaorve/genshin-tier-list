import styled from 'styled-components';

const Modal = ({ isShown, title, children, onHideModal }: any) => {
  if (!isShown) return null;

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          {title}
          <ModalCloseButton onClick={() => onHideModal()}>
            &times;
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: 32px;

  background-color: rgba(128, 128, 128, 0.2);
  z-index: 100;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 758px;
  background-color: rgba(48, 48, 48);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg);
  border-bottom: 1px solid rgba(64, 64, 64);
  font-size: 22px;
`;

const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: inherit;
`;

const ModalBody = styled.div`
  padding: var(--space-lg);
`;
