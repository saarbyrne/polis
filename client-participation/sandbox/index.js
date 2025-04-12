import React from 'react';
import ReactDOM from 'react-dom';
import '../css/theme.css';
import ResponsiveButton from '../js/components/responsive-button';

// Sample component to demonstrate theme variables
const ThemeDemo = () => {
  return (
    <div>
      <h1>Polis UI Theme Demo</h1>
      
      <section>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
          <ResponsiveButton primary={true}>Primary Button</ResponsiveButton>
          <ResponsiveButton primary={false}>Secondary Button</ResponsiveButton>
        </div>
      </section>
      
      <section>
        <h2>Color Palette</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
          {[
            { name: 'Primary', color: 'var(--color-primary)' },
            { name: 'Primary Dark', color: 'var(--color-primary-dark)' },
            { name: 'Secondary', color: 'var(--color-secondary)' },
            { name: 'Secondary Dark', color: 'var(--color-secondary-dark)' },
            { name: 'Accent', color: 'var(--color-accent)' }
          ].map(color => (
            <div key={color.name} style={{ 
              width: '120px', 
              height: '80px', 
              backgroundColor: color.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              borderRadius: 'var(--border-radius-sm)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              {color.name}
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2>Spacing</h2>
        <div>
          {['xs', 'sm', 'md', 'lg', 'xl'].map(size => (
            <div key={size} style={{ 
              marginBottom: 'var(--spacing-sm)',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{ 
                width: `var(--spacing-${size})`, 
                height: `var(--spacing-${size})`,
                backgroundColor: 'var(--color-primary)',
                marginRight: 'var(--spacing-md)'
              }}></div>
              <span>--spacing-{size}</span>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2>Responsive Behavior</h2>
        <div className="mobile-stack" style={{ 
          display: 'flex', 
          gap: 'var(--spacing-md)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <div style={{ 
            flex: 1, 
            padding: 'var(--spacing-md)',
            backgroundColor: '#f5f5f5',
            borderRadius: 'var(--border-radius-sm)'
          }}>
            <h3>Panel 1</h3>
            <p>This will stack on mobile</p>
          </div>
          <div style={{ 
            flex: 1, 
            padding: 'var(--spacing-md)',
            backgroundColor: '#f5f5f5',
            borderRadius: 'var(--border-radius-sm)'
          }}>
            <h3>Panel 2</h3>
            <p>This will stack on mobile</p>
          </div>
        </div>
        <div className="mobile-only">Only visible on mobile</div>
        <div className="desktop-only">Only visible on desktop</div>
      </section>
    </div>
  );
};

ReactDOM.render(<ThemeDemo />, document.getElementById('root'));
