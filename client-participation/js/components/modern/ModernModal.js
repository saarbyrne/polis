import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const ModernModal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  className = '',
  ...props
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={closeOnOverlayClick}
      size={size}
      {...props}
    >
      <ModalOverlay />
      <ModalContent
        className={`modal-content ${className}`}
        borderRadius="var(--border-radius-md)"
        boxShadow="var(--shadow-lg)"
      >
        {title && (
          <ModalHeader fontSize="var(--font-size-lg)" fontWeight="600">
            {title}
          </ModalHeader>
        )}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default ModernModal;
