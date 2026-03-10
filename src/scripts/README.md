# Scripts Directory

**Purpose:** Central location for all shell scripts and automation tools  
**Location:** `/scripts/`  
**Guidelines:** See [/guidelines/SHELL_SCRIPT_GUIDELINES.md](../guidelines/SHELL_SCRIPT_GUIDELINES.md)

---

## 📋 Overview

This directory contains all shell scripts (`.sh` files) for the WooCommerce Prototype project. Scripts are organized by purpose into subdirectories for easy discovery and maintenance.

**🚨 CRITICAL: ALL shell scripts MUST be stored in this directory or its subdirectories.**

---

## 📁 Directory Structure

```
/scripts/
├── README.md                      # This file
├── build/                         # Build and compilation scripts
├── deploy/                        # Deployment scripts
├── dev/                           # Development utilities
├── test/                          # Testing scripts
├── maintenance/                   # Maintenance and cleanup
└── utils/                         # Utility functions
```

---

## 📂 Script Categories

### **1. Build Scripts** (`/scripts/build/`)

**Purpose:** Compile, bundle, and prepare application for deployment

**Scripts:**
- `build-production.sh` - Production build with optimizations
- `build-staging.sh` - Staging build for testing
- `optimize-assets.sh` - Optimize images, fonts, CSS, JS

**When to use:**
- Creating production-ready builds
- Optimizing assets for deployment
- Generating distribution files

---

### **2. Deployment Scripts** (`/scripts/deploy/`)

**Purpose:** Deploy application to various environments

**Scripts:**
- `deploy-production.sh` - Deploy to production environment
- `deploy-staging.sh` - Deploy to staging environment
- `rollback.sh` - Rollback to previous version

**When to use:**
- Deploying new versions
- Rolling back failed deployments
- Environment-specific deployments

---

### **3. Development Scripts** (`/scripts/dev/`)

**Purpose:** Development environment setup and utilities

**Scripts:**
- `setup-environment.sh` - Setup development environment
- `install-dependencies.sh` - Install project dependencies
- `start-dev-server.sh` - Start development server

**When to use:**
- Onboarding new developers
- Setting up development machines
- Quick start commands

---

### **4. Test Scripts** (`/scripts/test/`)

**Purpose:** Run various types of tests

**Scripts:**
- `run-all-tests.sh` - Run complete test suite
- `run-unit-tests.sh` - Run unit tests only
- `run-integration-tests.sh` - Run integration tests
- `run-e2e-tests.sh` - Run end-to-end tests

**When to use:**
- Continuous integration
- Pre-commit testing
- Release validation

---

### **5. Maintenance Scripts** (`/scripts/maintenance/`)

**Purpose:** Maintenance, cleanup, and housekeeping tasks

**Scripts:**
- `clean-cache.sh` - Clean various caches
- `update-dependencies.sh` - Update project dependencies
- `backup-database.sh` - Backup application data
- `check-dependencies.sh` - Check for outdated dependencies

**When to use:**
- Regular maintenance
- Troubleshooting
- Dependency updates

---

### **6. Utility Scripts** (`/scripts/utils/`)

**Purpose:** Shared utility functions and helpers

**Scripts:**
- `common-functions.sh` - Shared functions library
- `logging.sh` - Logging utilities
- `validation.sh` - Input validation functions

**When to use:**
- Sourced by other scripts
- Shared functionality
- Common operations

---

## 🚀 Quick Start

### **Running a Script**

All scripts should be executable. If not, add execute permission:

```bash
chmod +x /scripts/category/script-name.sh
```

Run a script:

```bash
./scripts/category/script-name.sh
```

With options:

```bash
./scripts/category/script-name.sh --verbose --dry-run
```

---

### **Getting Help**

All scripts support the `--help` flag:

```bash
./scripts/category/script-name.sh --help
```

---

## 🏷️ Naming Convention

All scripts must follow this format:

```
verb-noun-modifier.sh
```

**Examples:**
- `build-production.sh` - Action + target
- `deploy-staging.sh` - Action + target
- `run-all-tests.sh` - Action + modifier + target
- `clean-cache-force.sh` - Action + target + modifier

**See:** [SHELL_SCRIPT_GUIDELINES.md](../guidelines/SHELL_SCRIPT_GUIDELINES.md) for complete naming standards.

---

## 📝 Creating New Scripts

### **Step 1: Determine Category**

Choose the appropriate subdirectory:
- Build tasks → `/scripts/build/`
- Deployment → `/scripts/deploy/`
- Development → `/scripts/dev/`
- Testing → `/scripts/test/`
- Maintenance → `/scripts/maintenance/`
- Utilities → `/scripts/utils/`

### **Step 2: Use Template**

Copy the standard template from [SHELL_SCRIPT_GUIDELINES.md](../guidelines/SHELL_SCRIPT_GUIDELINES.md):

```bash
#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# [Header documentation]
# [Functions]
# [Main logic]
```

### **Step 3: Follow Standards**

Ensure your script includes:
- ✅ Proper shebang (`#!/bin/bash`)
- ✅ Strict mode (`set -euo pipefail`)
- ✅ Header documentation
- ✅ Help flag (`--help`)
- ✅ Error handling
- ✅ Input validation
- ✅ Logging
- ✅ Cleanup function

### **Step 4: Test**

Before committing:

```bash
# Run ShellCheck
shellcheck scripts/category/script-name.sh

# Test with valid inputs
./scripts/category/script-name.sh

# Test with invalid inputs
./scripts/category/script-name.sh invalid-arg

# Test help
./scripts/category/script-name.sh --help

# Test dry-run
./scripts/category/script-name.sh --dry-run
```

### **Step 5: Make Executable**

```bash
chmod +x scripts/category/script-name.sh
```

### **Step 6: Document**

Update this README if adding a new category or significant script.

---

## 🛡️ Security Guidelines

### **Critical Security Rules**

1. ✅ **Always enable strict mode**
   ```bash
   set -euo pipefail
   ```

2. ✅ **Validate all inputs**
   ```bash
   if [[ -z "$input" ]]; then
       echo "Error: Input required"
       exit 1
   fi
   ```

3. ✅ **Quote all variables**
   ```bash
   rm "$filename"  # Correct
   rm $filename    # Wrong - vulnerable
   ```

4. ❌ **Never use eval**
   ```bash
   eval "$user_input"  # NEVER DO THIS
   ```

5. ✅ **Check permissions before operations**
   ```bash
   if [[ ! -w "$file" ]]; then
       echo "Error: No write permission"
       exit 3
   fi
   ```

**See:** [SHELL_SCRIPT_GUIDELINES.md](../guidelines/SHELL_SCRIPT_GUIDELINES.md) for complete security guidelines.

---

## 🧪 Testing

### **Testing Checklist**

Before committing any script:

- [ ] Passes ShellCheck validation
- [ ] Tested with valid inputs
- [ ] Tested with invalid inputs
- [ ] Tested error conditions
- [ ] Tested help message (`--help`)
- [ ] Tested dry-run mode (`--dry-run`)
- [ ] Verified all exit codes
- [ ] Checked on clean environment
- [ ] Documented in this README (if significant)

---

## 📊 Current Scripts

### **Build Scripts**

| Script | Description | Status |
|--------|-------------|--------|
| - | No scripts yet | - |

---

### **Deployment Scripts**

| Script | Description | Status |
|--------|-------------|--------|
| - | No scripts yet | - |

---

### **Development Scripts**

| Script | Description | Status |
|--------|-------------|--------|
| - | No scripts yet | - |

---

### **Test Scripts**

| Script | Description | Status |
|--------|-------------|--------|
| - | No scripts yet | - |

---

### **Maintenance Scripts**

| Script | Description | Status |
|--------|-------------|--------|
| - | No scripts yet | - |

---

### **Utility Scripts**

| Script | Description | Status |
|--------|-------------|--------|
| - | No scripts yet | - |

---

## 🚫 Prohibited Practices

### **❌ DO NOT:**

1. Store scripts in root directory
   ```
   /build.sh  # ❌ WRONG
   ```

2. Use uppercase or spaces in filenames
   ```
   BUILD_PRODUCTION.sh  # ❌ WRONG
   build production.sh  # ❌ WRONG
   ```

3. Skip ShellCheck validation
   ```bash
   # Always run before committing:
   shellcheck script-name.sh
   ```

4. Hardcode environment-specific values
   ```bash
   # ❌ WRONG
   DATABASE_URL="postgresql://localhost:5432/mydb"
   
   # ✅ CORRECT
   DATABASE_URL="${DATABASE_URL:-}"
   ```

5. Ignore error handling
   ```bash
   # ❌ WRONG
   rm important-file.txt
   
   # ✅ CORRECT
   if ! rm important-file.txt; then
       echo "Error: Failed to remove file"
       exit 1
   fi
   ```

---

## ✅ Best Practices

### **DO:**

1. ✅ Use descriptive names
   ```bash
   build-production.sh      # Clear purpose
   deploy-staging.sh        # Clear purpose
   ```

2. ✅ Include comprehensive documentation
   ```bash
   # Header with description, usage, examples
   ```

3. ✅ Implement dry-run mode
   ```bash
   if [[ "$DRY_RUN" == true ]]; then
       echo "Would execute: $command"
   else
       $command
   fi
   ```

4. ✅ Use consistent exit codes
   ```bash
   exit 0  # Success
   exit 1  # General error
   exit 2  # Invalid argument
   exit 3  # Permission denied
   ```

5. ✅ Log important operations
   ```bash
   log "INFO" "Starting deployment"
   log "ERROR" "Deployment failed"
   ```

---

## 📚 Related Documentation

- **[SHELL_SCRIPT_GUIDELINES.md](../guidelines/SHELL_SCRIPT_GUIDELINES.md)** - Complete shell script standards
- **[Guidelines.md](../Guidelines.md)** - Main project guidelines
- **[WRITING_GUIDELINES.md](../guidelines/WRITING_GUIDELINES.md)** - Documentation standards

---

## 📞 Questions?

### **Where to put a script:**
- Build tasks? → `/scripts/build/`
- Deployment? → `/scripts/deploy/`
- Development setup? → `/scripts/dev/`
- Testing? → `/scripts/test/`
- Maintenance? → `/scripts/maintenance/`
- Shared utilities? → `/scripts/utils/`

### **How to name a script:**
Follow the `verb-noun-modifier.sh` format:
- `build-production.sh`
- `deploy-staging.sh`
- `run-all-tests.sh`

### **What template to use:**
See [SHELL_SCRIPT_GUIDELINES.md](../guidelines/SHELL_SCRIPT_GUIDELINES.md) for the complete template.

---

## 🔄 Changelog

### 2026-01-09
- Created scripts directory structure
- Established organization standards
- Added README documentation
- Defined script categories

---

**Last Updated:** January 9, 2026  
**Maintained By:** Project Team
