# Polis Theming and Responsive Design Guide

## CSS Variables

The project now includes CSS variables for theming. These are defined in `css/theme.css` and are available globally.

### Usage Examples

#### In SCSS:
```scss
.my-element {
  color: var(--color-primary);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
}
```

#### In React Components:
```jsx
const myComponentStyle = {
  backgroundColor: 'var(--color-primary)',
  padding: 'var(--spacing-md)',
  borderRadius: 'var(--border-radius-sm)'
};
```

## Mobile Responsive Utilities

### CSS Classes
- `.mobile-only` - Only displays on mobile devices
- `.desktop-only` - Only displays on desktop devices
- `.mobile-full-width` - Makes elements full width on mobile
- `.mobile-stack` - Stacks flex items vertically on mobile
- `.mobile-center` - Centers text on mobile

### Media Query Usage
```scss
// In your SCSS files
@media (max-width: 767px) {
  .your-element {
    padding: var(--spacing-sm);
  }
}
```

## Component Migration Guide

### 1. Replace Hard-Coded Values
Before:
```scss
.button {
  background-color: #3498db;
  padding: 8px 16px;
}
```

After:
```scss
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
}
```

### 2. Add Mobile Responsiveness
Before:
```scss
.container {
  display: flex;
  padding: 24px;
}
```

After:
```scss
.container {
  display: flex;
  padding: var(--spacing-lg);
  
  @media (max-width: 767px) {
    flex-direction: column;
    padding: var(--spacing-md);
  }
}
```

### 3. Use Utility Classes for Common Patterns
```html
<div class="info-panel mobile-full-width">
  <div class="panel-content mobile-stack">
    <h2>Title</h2>
    <p class="mobile-center">Description text</p>
  </div>
</div>
```

## Example Components

See `/js/components/responsive-button.js` for a fully responsive component example.
