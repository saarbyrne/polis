import React from 'react';
import { Input } from '@chakra-ui/react';

const ModernInput = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  className = '',
  isDisabled = false,
  isInvalid = false,
  errorMessage = '',
  ...props
}) => {
  return (
    <div className={`input-container ${className}`}>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        borderColor="var(--color-border)"
        _hover={{ borderColor: 'var(--color-primary)' }}
        _focus={{ borderColor: 'var(--color-primary)', boxShadow: 'var(--shadow-sm)' }}
        fontSize="var(--font-size-base)"
        height="var(--input-height)"
        borderRadius="var(--border-radius-sm)"
        {...props}
      />
      {isInvalid && errorMessage && (
        <div className="error-message" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)', marginTop: '0.25rem' }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default ModernInput;
