# Polis UI Testing Options

## Option 1: Simple Static Server (Fastest Setup)
Already set up and running at http://localhost:8000

```bash
# To restart the server if needed
cd /Users/sbyrne/Documents/GitHub/polis/client-participation/sandbox
python3 -m http.server 8000
```

## Option 2: Webpack Dev Server (Hot Reloading)
A more robust solution with hot module replacement:

```bash
# Install dependencies
cd /Users/sbyrne/Documents/GitHub/polis/client-participation/sandbox
npm install

# Start dev server
npm start
```

Then visit http://localhost:8080

## Option 3: Storybook (Most Comprehensive)
For a professional component library:

```bash
# Install Storybook
cd /Users/sbyrne/Documents/GitHub/polis/client-participation
npx storybook init

# Create component stories in .stories.js files
# Example: /stories/Button.stories.js

# Run Storybook
npm run storybook
```

## Comparison

| Feature | Static Server | Webpack | Storybook |
|---------|--------------|---------|-----------|
| Setup Time | Minimal | Medium | Longer |
| Hot Reload | No | Yes | Yes |
| Component Isolation | Basic | Good | Excellent |
| Documentation | No | No | Yes |
| Responsive Testing | Manual | Manual | Built-in |
| State Management | No | Basic | Advanced |
