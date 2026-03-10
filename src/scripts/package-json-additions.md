# Package.json Script Additions

**Purpose:** NPM scripts for Tailwind CSS detection and prevention  
**Usage:** Add these to your package.json "scripts" section

---

## 📋 Scripts to Add

Add these to the `"scripts"` section of `/package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    
    // ✅ ADD THESE NEW SCRIPTS:
    
    // Tailwind CSS detection
    "lint:tailwind": "bash ./scripts/lint-tailwind.sh",
    "lint:tailwind:quiet": "bash ./scripts/lint-tailwind.sh > /dev/null 2>&1",
    
    // Pre-build checks
    "prebuild": "npm run lint:tailwind",
    "pretest": "npm run lint:tailwind:quiet",
    
    // Setup automation
    "setup:hooks": "bash ./scripts/setup-hooks.sh",
    "setup:tailwind-prevention": "npm run setup:hooks",
    
    // Quick checks
    "check:wordpress": "echo '🔍 Checking WordPress alignment...' && npm run lint:tailwind",
    "check:all": "npm run lint:tailwind && echo '✅ All checks passed'",
    
    // Fix helpers
    "help:tailwind": "cat /tasks/QUICK_START_TAILWIND_ELIMINATION.md",
    "help:fix": "cat /tasks/tailwind-css-elimination-tasks.md"
  }
}
```

---

## 🚀 Usage Examples

### Run Tailwind Detection

```bash
# Full scan with output
npm run lint:tailwind

# Quiet mode (for CI/CD)
npm run lint:tailwind:quiet
```

---

### Pre-build Check

```bash
# Build will automatically check for Tailwind violations
npm run build

# Output if violations found:
# ❌ FAILURE: Found 45 Tailwind violations
# Build aborted!
```

---

### Setup Automation

```bash
# Install pre-commit hook
npm run setup:hooks

# Or use the full command
npm run setup:tailwind-prevention
```

---

### Quick WordPress Check

```bash
# Check WordPress alignment
npm run check:wordpress

# Run all checks
npm run check:all
```

---

### Get Help

```bash
# Show quick start guide
npm run help:tailwind

# Show task list
npm run help:fix
```

---

## 📊 Integration with CI/CD

### In GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Check for Tailwind violations
        run: npm run lint:tailwind
      
      - name: Run tests (includes pre-check)
        run: npm test
      
      - name: Build (includes pre-build check)
        run: npm run build
```

---

## 🛠️ Advanced Configurations

### Conditional Prebuild

If you want to make prebuild optional:

```json
{
  "scripts": {
    "prebuild": "npm run lint:tailwind || echo '⚠️ Warning: Tailwind violations detected but build continuing'",
    "prebuild:strict": "npm run lint:tailwind",
    "build:strict": "npm run prebuild:strict && vite build"
  }
}
```

Usage:
```bash
# Strict mode (fails on violations)
npm run build:strict

# Normal mode (warns but continues)
npm run build
```

---

### Parallel Execution

For faster CI/CD:

```json
{
  "scripts": {
    "check:parallel": "npm-run-all --parallel lint:tailwind test:unit lint:eslint",
    "ci": "npm run check:parallel && npm run build"
  }
}
```

Requires: `npm install --save-dev npm-run-all`

---

## ✅ Complete package.json Example

```json
{
  "name": "@lightspeedwp/woocommerce-prototype",
  "version": "0.1.0",
  "publishConfig": {
    "registry": "https://registry.figma.com/npm/f156f2bc-d4a1-4d3b-8015-56069398e95c/registry/"
  },
  "scripts": {
    // Development
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    
    // Tailwind CSS Detection
    "lint:tailwind": "bash ./scripts/lint-tailwind.sh",
    "lint:tailwind:quiet": "bash ./scripts/lint-tailwind.sh > /dev/null 2>&1",
    
    // Automation Setup
    "setup:hooks": "bash ./scripts/setup-hooks.sh",
    "setup:tailwind-prevention": "npm run setup:hooks",
    
    // Pre-hooks (run automatically)
    "prebuild": "npm run lint:tailwind",
    "pretest": "npm run lint:tailwind:quiet",
    
    // Quality Checks
    "check:wordpress": "echo '🔍 Checking WordPress alignment...' && npm run lint:tailwind",
    "check:all": "npm run lint:tailwind && echo '✅ All checks passed'",
    
    // Help Commands
    "help:tailwind": "cat /tasks/QUICK_START_TAILWIND_ELIMINATION.md",
    "help:fix": "cat /tasks/tailwind-css-elimination-tasks.md",
    
    // CI/CD
    "ci": "npm run check:all && npm run build"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-slot": "^1.1.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.487.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "react-resizable-panels": "^2.1.7",
    "react-router": "^7.1.3",
    "react-slick": "^0.30.2",
    "recharts": "^2.15.2",
    "sonner": "^2.0.3"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.10.2",
    "vite": "6.3.5"
  }
}
```

---

## 🎯 Recommended Workflow

### For Developers

```bash
# 1. Clone repo
git clone <repo>

# 2. Install dependencies
npm install

# 3. Setup pre-commit hook
npm run setup:hooks

# 4. Start development
npm run dev

# 5. Before committing (optional manual check)
npm run lint:tailwind

# 6. Commit (auto-check runs via pre-commit hook)
git commit -m "feat: add feature"
```

---

### For CI/CD

```bash
# In CI pipeline
npm ci
npm run ci  # Runs check:all + build
```

---

## 📝 Notes

**Pre-build Hook:**
- Automatically runs before every `npm run build`
- Fails build if Tailwind violations found
- Can be bypassed with custom script

**Pre-test Hook:**
- Runs in quiet mode (no output unless failures)
- Ensures tests run only on clean code
- Can be disabled if needed

**Help Commands:**
- Quick access to documentation
- No need to navigate filesystem
- Perfect for new team members

---

## 🚫 Disabling Pre-hooks (Not Recommended)

If you need to temporarily disable:

```json
{
  "scripts": {
    "prebuild": "echo 'Pre-build check disabled'",
    "pretest": "echo 'Pre-test check disabled'"
  }
}
```

**Only do this for:**
- Emergency hotfixes
- Temporary development
- With team lead approval

---

## ✅ Verification

After adding scripts, verify they work:

```bash
# Check script exists
npm run lint:tailwind --help

# Test execution
npm run lint:tailwind

# Test setup
npm run setup:hooks

# Test help
npm run help:tailwind
```

Expected output for each command confirms scripts are working.

---

**Status:** ✅ READY TO ADD  
**Impact:** Automated quality checks in NPM workflow  
**Setup Time:** 2 minutes (copy/paste to package.json)
