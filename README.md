# Polis - UX Improvement Fork

> **AI-powered sentiment gathering platform** - More organic than surveys, less effort than focus groups. This fork focuses on modernizing the UI/UX with Chakra UI and contemporary design patterns.

[![Docker Image Builds](https://github.com/compdemocracy/polis/workflows/Docker%20image%20builds/badge.svg)][docker-image-builds]
[![E2E Tests](https://github.com/compdemocracy/polis/workflows/E2E%20Tests/badge.svg)][e2e-tests]

   [docker-image-builds]: https://hub.docker.com/u/compdem
   [e2e-tests]: https://github.com/compdemocracy/polis/actions?query=workflow%3A%22E2E+Tests%22

**Original Repository**: [compdemocracy/polis](https://github.com/compdemocracy/polis)

---

## 🎨 What This Fork Adds

This is a fork of the excellent [Polis deliberation platform](https://github.com/compdemocracy/polis) focused specifically on **improving user experience and interface design**. While the original Polis is a powerful sentiment-gathering tool, its UI needs modernization to meet contemporary standards.

### **UX Improvements Implemented**

#### ✅ **Chakra UI Integration** (Completed)
- **Modern Component Library**: Migrated core components to Chakra UI v2.8
- **Consistent Design System**: Theme system using CSS variables from existing Polis styles
- **Accessibility First**: ARIA-compliant components out of the box
- **Dark Mode Ready**: Built-in theme support for future dark mode implementation

**Components Migrated**:
- `ModernButton` - Responsive buttons with mobile-first design
- `ModernInput` - Form inputs with validation states
- `ModernSelect` - Dropdown selections with improved UX
- `ModernCard` - Content containers with shadows and borders
- `ModernAlert` - User feedback notifications
- `ModernModal` - Dialog overlays with proper focus management
- `ModernWritingTips` - Enhanced writing guidance component

#### 🔄 **Responsive Design System**
- **CSS Variable Architecture**: Theme tokens for colors, spacing, shadows, borders
- **Mobile-First Utilities**: `.mobile-only`, `.mobile-full-width`, `.mobile-stack`
- **Breakpoint Consistency**: Unified responsive behavior across components

#### 📦 **Developer Experience**
- **Component Sandbox**: Interactive testing environment at `/sandbox/chakra-components.html`
- **Migration Guides**: Documentation for Chakra UI migration patterns
- **Theming Guide**: Comprehensive guide to design system usage
- **Rollback Plan**: Clear path to revert changes if needed

### **Roadmap - Planned Improvements**

#### 🚧 **Phase 2: UI Polish** (In Progress)
- [ ] Complete migration of all participation UI components
- [ ] Redesign admin panel with modern layout
- [ ] Improve report visualization components
- [ ] Add loading states and skeleton screens
- [ ] Implement toast notifications system

#### 📋 **Phase 3: Accessibility & Performance**
- [ ] WCAG 2.1 AA compliance audit
- [ ] Keyboard navigation improvements
- [ ] Screen reader optimization
- [ ] Performance optimization (code splitting, lazy loading)
- [ ] Reduce bundle size with tree shaking

#### 🎯 **Phase 4: Feature UX**
- [ ] Onboarding flow redesign
- [ ] Mobile app optimizations
- [ ] Real-time feedback animations
- [ ] Improved comment moderation interface
- [ ] Enhanced data visualization

---

## 🎯 What is Polis?

Polis is an **AI-powered sentiment gathering platform** that enables groups to have productive conversations at scale. It visualizes opinion landscapes and helps identify consensus and division within large groups.

### **Key Features**

- **Opinion Mapping**: Participants vote on statements, AI maps opinion clusters
- **Consensus Discovery**: Identifies statements with broad agreement
- **Real-Time Visualization**: Live updates as participants engage
- **Scalable Deliberation**: Works with 10s to 100,000s of participants
- **Comment Submission**: Participants can submit new statements
- **Moderation Tools**: Admin interface for conversation management

### **Use Cases**

- **Government**: Citizen consultation and policy feedback
- **Organizations**: Employee engagement and decision-making
- **Communities**: Consensus-building on controversial topics
- **Research**: Large-scale opinion research studies

For methodology details, see [Polis: Scaling Deliberation by Mapping High Dimensional Opinion Spaces][methods-paper].

   [methods-paper]: https://www.e-revistes.uji.es/index.php/recerca/article/view/5516/6558

---

## 🚀 Quick Start

### **Prerequisites**
- **Docker** & **Docker Compose** (or Docker Desktop on Mac/Windows)
- **Git** for cloning

### **Installation**

```bash
# 1. Clone this fork
git clone https://github.com/saarbyrne/polis.git
cd polis

# 2. Copy environment config
cp example.env .env

# 3. Start the system
make start
```

**Note**: On macOS, if you get a port conflict on 5000, disable AirPlay Receiver in System Settings or change `API_SERVER_PORT` in `.env`.

### **Access the Application**

- **Participation Interface**: `http://localhost:80/`
- **Create User**: `http://localhost:80/createuser`
- **Admin Panel**: `http://localhost:80/admin` (after creating user)

### **Component Sandbox** (New in this fork)

```bash
# Access the Chakra UI component sandbox
# Start the system, then visit:
http://localhost:80/sandbox/chakra-components.html
```

The sandbox lets you:
- Test all modern components interactively
- Compare original vs Chakra UI components
- Test responsive behavior at different screen sizes
- Preview light/dark theme support

---

## 💻 Development

### **Using Modern Components**

This fork adds new Chakra UI components alongside the original codebase. You can gradually migrate views to use modern components:

```jsx
// Import modern components
import { ModernButton, ModernInput, ModernCard } from './components/modern';

// Use in your views
<ModernCard hasShadow={true}>
  <ModernInput
    placeholder="Enter your comment"
    value={comment}
    onChange={(e) => setComment(e.target.value)}
  />
  <ModernButton primary onClick={handleSubmit}>
    Submit
  </ModernButton>
</ModernCard>
```

**Documentation**:
- [Migration Guide](./client-participation/MIGRATION_GUIDE.md) - How to migrate to Chakra UI
- [Theming Guide](./client-participation/THEMING_GUIDE.md) - Using the design system

### **Development Mode**

Enable live code reloading and dev tools:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml --profile postgres up --build
```

This enables:
- Live code reloading for server and clients
- Static type checking
- Direct database access ports
- nREPL connection for math process

### **Running Tests**

```bash
# E2E tests with Cypress
make test-e2e

# See e2e/README.md for more testing options
```

---

## 📁 Project Structure

```
polis/
├── client-participation/          # Main participation UI
│   ├── js/
│   │   ├── components/
│   │   │   └── modern/            # 🆕 Chakra UI components
│   │   │       ├── ModernButton.js
│   │   │       ├── ModernInput.js
│   │   │       ├── ModernCard.js
│   │   │       ├── ModernModal.js
│   │   │       ├── ModernAlert.js
│   │   │       ├── ModernSelect.js
│   │   │       └── ModernWritingTips.js
│   │   ├── theme.js               # 🆕 Chakra UI theme config
│   │   └── main.js
│   ├── css/
│   │   └── theme.css              # 🆕 CSS variables
│   ├── sandbox/                   # 🆕 Component testing
│   │   ├── chakra-components.html
│   │   └── index.js
│   ├── MIGRATION_GUIDE.md         # 🆕 Chakra migration docs
│   └── THEMING_GUIDE.md           # 🆕 Design system docs
│
├── client-admin/                  # Admin panel (TBD for migration)
├── client-report/                 # Report visualization (TBD)
├── server/                        # Node.js API server
├── math/                          # Python analysis engine
├── file-server/                   # Static file serving
│
├── docker-compose.yml             # Base Docker config
├── docker-compose.dev.yml         # Dev overlay
├── Makefile                       # Convenience commands
└── README.md                      # This file
```

---

## 🔧 Configuration

Polis is configured via environment variables in `.env`.

### **Essential Variables**

```bash
# Domain
SERVER_URL=http://localhost:80

# Database
DATABASE_URL=postgres://postgres:password@postgres:5432/polis

# Ports (change if conflicts occur)
API_SERVER_PORT=5000
REPORT_PORT=8000
ADMIN_PORT=8001
```

See [Configuration Guide](docs/configuration.md) for complete details.

---

## 🛠️ Available Commands

```bash
# Start system (development mode with Postgres)
make start

# Start and rebuild containers
make start-rebuild

# Stop system
make stop

# View logs
make logs

# Run tests
make test-e2e

# Production mode
make PROD start

# Full rebuild (WARNING: Deletes database!)
make start-FULL-REBUILD

# View all commands
make help
```

---

## 🎨 UX Improvement Philosophy

This fork maintains the original Polis functionality while systematically improving the user experience:

### **Design Principles**

1. **Progressive Enhancement**: New components coexist with originals
2. **Accessibility First**: WCAG 2.1 compliance as default
3. **Mobile Responsive**: Touch-friendly, mobile-first design
4. **Performance**: Optimized bundle sizes, lazy loading
5. **Developer Experience**: Clear migration paths, good documentation

### **Not a Redesign**

This is **not** a complete visual redesign. The goal is to:
- Modernize the component library
- Improve accessibility and responsiveness
- Maintain familiar workflows
- Make future UI improvements easier

The original Polis design patterns remain largely intact.

---

## 📚 Documentation

### **This Fork**
- [Migration Guide](./client-participation/MIGRATION_GUIDE.md) - Chakra UI migration patterns
- [Theming Guide](./client-participation/THEMING_GUIDE.md) - Design system usage

### **Original Polis**
- [📚 Knowledge Base][knowledge-base] - Comprehensive Polis wiki
- [Configuration](docs/configuration.md) - Environment setup
- [SSL/HTTPS](docs/ssl.md) - Production security
- [Scaling](docs/scaling.md) - High-traffic deployments
- [Migrations](docs/migrations.md) - Database migrations

   [knowledge-base]: https://compdemocracy.org/Welcome

---

## 🤝 Contributing

### **To This Fork**

Contributions focused on UX improvements are welcome!

**Priority Areas**:
1. Complete Chakra UI migration of remaining components
2. Accessibility improvements (ARIA, keyboard nav, screen readers)
3. Mobile UX enhancements
4. Performance optimizations
5. Design system documentation

**Workflow**:
```bash
# 1. Fork this repository
# 2. Create feature branch
git checkout -b feature/improve-modal-ux

# 3. Make changes, test in sandbox
# 4. Commit with descriptive messages
git commit -m "Improve modal keyboard navigation"

# 5. Push and create PR
git push origin feature/improve-modal-ux
```

### **To Original Polis**

For core Polis functionality improvements, contribute to the [upstream repository](https://github.com/compdemocracy/polis).

---

## 🔄 Syncing with Upstream

This fork periodically syncs with the original Polis repository:

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream changes
git merge upstream/edge

# Resolve conflicts (prioritize UX improvements)
# Push to fork
git push origin main
```

---

## 💬 Support

### **For UX Fork Issues**
- [Open an issue](https://github.com/saarbyrne/polis/issues) on this repository
- Specifically for Chakra UI, theming, or responsive design questions

### **For Original Polis**
- [💬 Discussions][discussions] - General questions
- [✔️ Issues][issues] - Technical issues
- [📚 Knowledge Base][knowledge-base] - Documentation
- [✉️ Contact][hello] - High-impact deployments

   [issues]: https://github.com/compdemocracy/polis/issues
   [discussions]: https://github.com/compdemocracy/polis/discussions
   [hello]: mailto:hello@compdemocracy.org

---

## 📊 Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Component Library** | Chakra UI v2.8 | **New in this fork** |
| **Styling** | Emotion + SCSS | Hybrid approach during migration |
| **Frontend Framework** | React 18 + Backbone.js | Gradual migration from Backbone |
| **Build Tool** | Webpack 5 | Bundle optimization ongoing |
| **Backend API** | Node.js + Express | Original Polis stack |
| **Analysis Engine** | Python 3 + Pandas | Original Polis stack |
| **Database** | PostgreSQL 14 | Original Polis stack |
| **Deployment** | Docker + Docker Compose | Original Polis stack |

---

## 📈 Migration Status

### **Participation UI**
- ✅ Button components
- ✅ Input components
- ✅ Card/container components
- ✅ Modal dialogs
- ✅ Alert notifications
- ✅ Writing tips component
- ⚠️ Voting interface (in progress)
- ⚠️ Comment thread (in progress)
- ⚠️ Visualization canvas (TBD)

### **Admin UI**
- ❌ Not started

### **Report UI**
- ❌ Not started

**Overall Progress**: ~25% complete

---

## ©️ License

[AGPLv3 with additional permission under section 7](/LICENSE)

Same license as the original Polis project.

---

## 🙏 Acknowledgments

**Original Polis Team**: This fork stands on the shoulders of the excellent work by [Computational Democracy Project](https://github.com/compdemocracy) and all Polis contributors.

**Upstream Repository**: [compdemocracy/polis](https://github.com/compdemocracy/polis)

**UX Fork Maintainer**: [Saar Byrne](https://github.com/saarbyrne)

---

**Built with ❤️ to make democratic deliberation beautiful and accessible**

[Original Polis](https://github.com/compdemocracy/polis) • [Knowledge Base](https://compdemocracy.org/Welcome) • [pol.is Deployment](https://pol.is)
