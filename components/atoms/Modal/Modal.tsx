import styled from 'styled-components';

const Modal = ({
  isShown,
  onHideModal,
  title,
  children,
  preventBackdropClick = false,
}: {
  isShown: boolean;
  onHideModal: any;
  title: string;
  children: any;
  preventBackdropClick?: boolean;
}) => {
  const handleClickHide = (e: any) => {
    if (e.currentTarget !== e.target || preventBackdropClick) return;

    hideModal();
  };

  const hideModal = () => {
    showBodyScrollbar();
    onHideModal();
  };

  if (!isShown) return null;

  hideBodyScrollbar();

  return (
    <StyledModal>
      <StyledModalDialog onClick={(e) => handleClickHide(e)}>
        <ModalContainer>
          <ModalHeader>
            {title}
            <ModalCloseButton onClick={() => hideModal()}>
              &times;
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContainer>
      </StyledModalDialog>
    </StyledModal>
  );
};

const hideBodyScrollbar = () => {
  document.body.classList.add('modal-open');
};

const showBodyScrollbar = () => {
  document.body.classList.remove('modal-open');
};

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background-color: rgba(196, 196, 196, 0.5);
  z-index: 100;
`;

const StyledModalDialog = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 100%;
  overflow-y: auto;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 758px;
  margin: var(--space-xl) 0;
  background-color: rgba(48, 48, 48);
  border-radius: var(--border-radius);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg) var(--space-xl);
  border-bottom: 1px solid rgba(64, 64, 64);
  font-size: 24px;
`;

const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 42px;
`;

const ModalBody = styled.div`
  padding: var(--space-lg);
`;
