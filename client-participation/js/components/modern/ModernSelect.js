import React from 'react';
import { Select } from '@chakra-ui/react';

const ModernSelect = ({
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  className = '',
  isDisabled = false,
  isInvalid = false,
  errorMessage = '',
  ...props
}) => {
  return (
    <div className={`select-container ${className}`}>
      <Select
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        borderColor="var(--color-border)"
        _hover={{ borderColor: 'var(--color-primary)' }}
        _focus={{ borderColor: 'var(--color-primary)', boxShadow: 'var(--shadow-sm)' }}
        fontSize="var(--font-size-base)"
        height="var(--input-height)"
        borderRadius="var(--border-radius-sm)"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {isInvalid && errorMessage && (
        <div className="error-message" style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)', marginTop: '0.25rem' }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default ModernSelect;
