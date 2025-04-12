# Polis UI Migration to Chakra UI

## Overview
This document outlines the steps taken to migrate the Polis frontend to Chakra UI, including a rollback plan and how to work with the new components.

## Chakra UI Setup
- Installed Chakra UI and dependencies (`@chakra-ui/react`, `@emotion/react`, `@emotion/styled`, and `framer-motion`).
- Created a custom theme using existing CSS variables in `js/theme.js`.
- Wrapped the application with `ChakraProvider` in `main.js`.

## Component Migration
The following components have been migrated to Chakra UI:

### 1. Button (`ModernButton.js`)
- Maintains the same props as the original `ResponsiveButton`.
- Uses Chakra UI's `Button` component.
- Integrates with theme variables for colors, spacing, and border-radius.

### 2. Input (`ModernInput.js`)
- Provides form input functionality with validation.
- Uses Chakra UI's `Input` component.
- Supports error states and messages.

### 3. Select (`ModernSelect.js`)
- Dropdown selection component.
- Uses Chakra UI's `Select` component.
- Supports options array for dynamic rendering.

### 4. Card (`ModernCard.js`)
- Container component for content grouping.
- Uses Chakra UI's `Box` component.
- Supports shadow and border options.

### 5. Alert (`ModernAlert.js`)
- Notification component for user feedback.
- Uses Chakra UI's `Alert` components.
- Supports different status types (info, success, warning, error).

### 6. Modal (`ModernModal.js`)
- Dialog component for focused interactions.
- Uses Chakra UI's `Modal` components.
- Supports customizable headers, footers, and sizes.

## Usage Examples

### Button
```jsx
import { ModernButton } from './components/modern';

<ModernButton 
  primary={true} 
  onClick={() => console.log('Clicked!')}
  fullWidthOnMobile={true}
>
  Click Me
</ModernButton>
```

### Input
```jsx
import { ModernInput } from './components/modern';

<ModernInput 
  value={inputValue} 
  onChange={(e) => setInputValue(e.target.value)}
  placeholder="Enter text"
  isInvalid={hasError}
  errorMessage="This field is required"
/>
```

### Select
```jsx
import { ModernSelect } from './components/modern';

<ModernSelect 
  value={selectedOption}
  onChange={(e) => setSelectedOption(e.target.value)}
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]}
  placeholder="Select an option"
/>
```

### Card
```jsx
import { ModernCard } from './components/modern';

<ModernCard hasShadow={true} hasBorder={false}>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</ModernCard>
```

### Alert
```jsx
import { ModernAlert } from './components/modern';

<ModernAlert 
  status="success" 
  title="Success!" 
  description="Operation completed successfully"
/>
```

### Modal
```jsx
import { ModernModal } from './components/modern';
import { ModernButton } from './components/modern';

<ModernModal 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  footer={<ModernButton onClick={() => setIsOpen(false)}>Close</ModernButton>}
>
  Modal content goes here
</ModernModal>
```

## Rollback Plan

### Option 1: Component-Level Rollback
To rollback individual components, simply revert to using the original components:

```jsx
// Before (Chakra UI)
import { ModernButton } from './components/modern';

// After (Original)
import ResponsiveButton from './components/responsive-button';
```

### Option 2: Complete Rollback
To completely rollback all Chakra UI changes:

1. Remove ChakraProvider from `main.js`:
```javascript
// Remove these lines
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const App = () => (
  <ChakraProvider theme={theme}>
    <RootView />
  </ChakraProvider>
);

// Restore this line
RootView.getInstance(document.body);
```

2. Remove Chakra UI dependencies from `package.json`:
```json
// Remove these dependencies
"@chakra-ui/react": "^2.8.0",
"@emotion/react": "^11.11.0",
"@emotion/styled": "^11.11.0",
"framer-motion": "^6.5.1"
```

## Testing
A comprehensive test page has been created at `/sandbox/chakra-components.html` to showcase all migrated components. This page allows you to:

1. Compare original and Chakra UI components side by side.
2. Test responsive behavior by resizing the browser window.
3. Toggle between light and dark themes.
4. Adjust font sizes to test accessibility.

## Next Steps
1. Continue migrating additional components as needed.
2. Update existing views to use the modern components.
3. Add unit tests for the new components.
4. Consider a full Bootstrap to Chakra UI migration in the future.
