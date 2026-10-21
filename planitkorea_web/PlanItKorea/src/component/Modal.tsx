import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

// 안내/확인용 공통 모달 (가운데 흰 카드 + 흐린 배경)
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 35, 59, 0.45);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--surface);
  border-radius: 24px;
  padding: 32px 28px 12px;
  max-width: 420px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: var(--shadow-float);
  text-align: center;
`;

const ModalHeader = styled.div``;

const ModalBody = styled.div``;

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 35, 59, 0.45);
  z-index: 999;
`;

export const ModalButton = styled.button`
  border: none;
  background-color: ${theme.palette.primary.main};
  border-radius: 12px;
  height: 48px;
  width: 100%;
  margin: 20px 0;
  font-size: 15px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.primary.dark};
  }
`;

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay role="dialog" aria-modal="true">
      <ModalContent>
        <ModalHeader />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
