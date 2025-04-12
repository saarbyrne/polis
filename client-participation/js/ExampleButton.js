import React from 'react';
import './theme.css';

const ExampleButton = ({ children }) => {
  return (
    <button 
      style={{
        padding: 'var(--spacing-md) var(--spacing-lg)',
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem'
      }}
    >
      {children}
    </button>
  );
};

export default ExampleButton;
