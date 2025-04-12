import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

const ModernAlert = ({
  status = 'info',
  title,
  description,
  className = '',
  ...props
}) => {
  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      borderRadius="var(--border-radius-md)"
      p="var(--spacing-md)"
      className={`alert ${className}`}
      {...props}
    >
      <AlertIcon boxSize="var(--icon-size-md)" />
      {title && <AlertTitle mt={4} mb={1} fontSize="var(--font-size-lg)">{title}</AlertTitle>}
      {description && <AlertDescription fontSize="var(--font-size-base)">{description}</AlertDescription>}
    </Alert>
  );
};

export default ModernAlert;
