import React from 'react';
import { Box } from '@chakra-ui/react';

const ModernCard = ({
  children,
  className = '',
  hasShadow = true,
  hasBorder = false,
  ...props
}) => {
  return (
    <Box
      className={`card ${className}`}
      bg="white"
      p="var(--spacing-md)"
      borderRadius="var(--border-radius-md)"
      boxShadow={hasShadow ? 'var(--shadow-md)' : 'none'}
      border={hasBorder ? '1px solid var(--color-border)' : 'none'}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ModernCard;
