// Copyright (C) 2012-present, The Authors
// Licensed under the GNU Affero General Public License v3

import React from 'react';

const ResponsiveButton = ({ 
  children,
  primary = true,
  onClick,
  fullWidthOnMobile = true,
  className = ''
}) => {
  const buttonStyle = {
    padding: `var(--spacing-sm) var(--spacing-md)`,
    backgroundColor: primary ? 'var(--color-primary)' : '#ffffff',
    color: primary ? '#ffffff' : 'var(--color-primary)',
    border: primary ? 'none' : '1px solid var(--color-primary)',
    borderRadius: 'var(--border-radius-sm)',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-size-base)',
    fontWeight: '500',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-fast)',
  };

  return (
    <button 
      onClick={onClick}
      style={buttonStyle}
      className={`${fullWidthOnMobile ? 'mobile-full-width' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default ResponsiveButton;
