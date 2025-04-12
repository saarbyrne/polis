import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const ModernButton = ({
  children,
  primary = true,
  onClick,
  fullWidthOnMobile = true,
  className = ''
}) => {
  return (
    <ChakraButton
      onClick={onClick}
      className={`${fullWidthOnMobile ? 'mobile-full-width' : ''} ${className}`}
      colorScheme={primary ? 'primary' : 'secondary'}
      width={fullWidthOnMobile ? '100%' : 'auto'}
    >
      {children}
    </ChakraButton>
  );
};

export default ModernButton;
