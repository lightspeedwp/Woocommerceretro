# Shell Script Guidelines

**Type:** Process  
**Status:** Complete  
**Version:** 1.0  
**Last Updated:** January 9, 2026  
**Purpose:** Standardize shell script creation, naming, organization, and best practices for the WooCommerce Prototype project.

---

## 📋 Overview

All shell scripts (`.sh` files) must follow standardized naming conventions, be organized in the `/scripts/` directory, include proper documentation, error handling, and security measures. This ensures consistent, maintainable, and safe automation across the project.

---

## 🎯 Purpose

This guideline establishes:
- Location and organization standards for shell scripts
- Naming conventions for script files
- Code quality and security requirements
- Documentation standards
- Testing and validation procedures
- Best practices for maintainability

---

## 📁 Directory Structure

**🚨 CRITICAL: All shell scripts MUST be stored in `/scripts/` directory.**

```
/scripts/
├── README.md                      # Scripts directory documentation
├── build/                         # Build and compilation scripts
│   ├── build-production.sh
│   ├── build-staging.sh
│   └── optimize-assets.sh
├── deploy/                        # Deployment scripts
│   ├── deploy-production.sh
│   ├── deploy-staging.sh
│   └── rollback.sh
├── dev/                           # Development utilities
│   ├── setup-environment.sh
│   ├── install-dependencies.sh
│   └── start-dev-server.sh
├── test/                          # Testing scripts
│   ├── run-all-tests.sh
│   ├── run-unit-tests.sh
│   └── run-integration-tests.sh
├── maintenance/                   # Maintenance and cleanup
│   ├── clean-cache.sh
│   ├── update-dependencies.sh
│   └── backup-database.sh
└── utils/                         # Utility functions
    ├── common-functions.sh        # Shared functions library
    ├── logging.sh                 # Logging utilities
    └── validation.sh              # Validation functions
```

---

## 🏷️ Naming Conventions

### **Standard Format**

All shell scripts must follow this naming convention:

```
verb-noun-modifier.sh
```

**Components:**
1. **Verb (Required):** Action being performed (e.g., `build`, `deploy`, `test`, `clean`)
2. **Noun (Required):** Target of the action (e.g., `production`, `cache`, `dependencies`)
3. **Modifier (Optional):** Additional context (e.g., `force`, `quick`, `all`)

### **Examples**

#### ✅ CORRECT:
```
build-production.sh              # Clear action + target
deploy-staging.sh                # Clear action + target
run-all-tests.sh                 # Action + modifier + target
clean-cache-force.sh             # Action + target + modifier
setup-environment.sh             # Action + target
update-dependencies.sh           # Action + target
```

#### ❌ INCORRECT:
```
script.sh                        # Too generic
prod_build.sh                    # Underscore instead of hyphen
BuildProduction.sh               # PascalCase (wrong)
DEPLOY.SH                        # All caps (wrong)
deploy production.sh             # Space in filename
```

---

## 📝 Script Template

Use this template for all new shell scripts:

```bash
#!/bin/bash

################################################################################
# Script Name: [script-name.sh]
# Description: [Brief description of what this script does]
# Author: [Author Name/Team]
# Created: [YYYY-MM-DD]
# Last Modified: [YYYY-MM-DD]
# Version: [X.X.X]
#
# Usage:
#   ./script-name.sh [options] [arguments]
#
# Options:
#   -h, --help        Show this help message
#   -v, --verbose     Enable verbose output
#   -d, --dry-run     Simulate without making changes
#
# Examples:
#   ./script-name.sh
#   ./script-name.sh --verbose
#   ./script-name.sh --dry-run
#
# Dependencies:
#   - bash >= 4.0
#   - [other dependencies]
#
# Exit Codes:
#   0 - Success
#   1 - General error
#   2 - Invalid argument
#   3 - Permission denied
################################################################################

# Enable strict mode
set -euo pipefail
IFS=$'\n\t'

################################################################################
# Configuration
################################################################################

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

# Default values
VERBOSE=false
DRY_RUN=false

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

################################################################################
# Functions
################################################################################

# Print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

# Show usage information
usage() {
    cat << EOF
Usage: $(basename "$0") [options] [arguments]

Description:
    [Detailed description of what this script does]

Options:
    -h, --help        Show this help message
    -v, --verbose     Enable verbose output
    -d, --dry-run     Simulate without making changes

Examples:
    $(basename "$0")
    $(basename "$0") --verbose
    $(basename "$0") --dry-run

EOF
    exit 0
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Validate dependencies
validate_dependencies() {
    local missing_deps=()
    
    # Check for required commands
    local required_commands=("git" "node" "npm")
    for cmd in "${required_commands[@]}"; do
        if ! command_exists "$cmd"; then
            missing_deps+=("$cmd")
        fi
    done
    
    if [ ${#missing_deps[@]} -ne 0 ]; then
        print_error "Missing required dependencies: ${missing_deps[*]}"
        exit 1
    fi
}

# Cleanup function (runs on exit)
cleanup() {
    local exit_code=$?
    if [ $exit_code -ne 0 ]; then
        print_error "Script failed with exit code: $exit_code"
    fi
}

# Register cleanup function
trap cleanup EXIT

################################################################################
# Main Script Logic
################################################################################

main() {
    print_info "Starting [script name]..."
    
    # Validate dependencies
    validate_dependencies
    
    # Your script logic here
    
    print_success "Script completed successfully!"
}

################################################################################
# Parse Arguments
################################################################################

while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            usage
            ;;
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        -d|--dry-run)
            DRY_RUN=true
            shift
            ;;
        *)
            print_error "Unknown option: $1"
            usage
            exit 2
            ;;
    esac
done

################################################################################
# Execute Main Function
################################################################################

main "$@"
```

---

## 🛡️ Security Requirements

### **1. Strict Mode**

Always enable strict error handling at the top of every script:

```bash
#!/bin/bash
set -euo pipefail
IFS=$'\n\t'
```

**Explanation:**
- `set -e` - Exit immediately if a command fails
- `set -u` - Treat unset variables as errors
- `set -o pipefail` - Fail if any command in a pipeline fails
- `IFS=$'\n\t'` - Set safe Internal Field Separator

---

### **2. Input Validation**

Always validate and sanitize user inputs:

```bash
# ✅ CORRECT - Validate input
validate_input() {
    local input="$1"
    
    # Check if input is empty
    if [[ -z "$input" ]]; then
        print_error "Input cannot be empty"
        return 1
    fi
    
    # Check for dangerous characters
    if [[ "$input" =~ [^\w\-\.] ]]; then
        print_error "Invalid characters in input"
        return 1
    fi
    
    return 0
}

# ❌ WRONG - No validation
process_file() {
    rm -rf "$1"  # DANGEROUS! No validation
}
```

---

### **3. Avoid Command Injection**

Never use `eval` or unquoted variables in commands:

```bash
# ✅ CORRECT - Safe command execution
safe_execute() {
    local command=("$@")
    "${command[@]}"
}

# ❌ WRONG - Command injection vulnerability
dangerous_execute() {
    eval "$1"  # NEVER DO THIS
}

# ✅ CORRECT - Quoted variables
process_file() {
    local filename="$1"
    cat "$filename"  # Quoted variable
}

# ❌ WRONG - Unquoted variable
dangerous_process() {
    cat $filename  # Vulnerable to word splitting
}
```

---

### **4. Secure File Operations**

Use safe file handling practices:

```bash
# ✅ CORRECT - Safe temp file creation
create_temp_file() {
    mktemp -t "script-name.XXXXXX"
}

# ✅ CORRECT - Check file existence before operations
safe_delete() {
    local file="$1"
    
    if [[ ! -f "$file" ]]; then
        print_error "File does not exist: $file"
        return 1
    fi
    
    if [[ ! -w "$file" ]]; then
        print_error "No write permission: $file"
        return 1
    fi
    
    rm "$file"
}

# ❌ WRONG - No existence check
dangerous_delete() {
    rm "$1"  # Fails if file doesn't exist
}
```

---

### **5. Permission Checks**

Verify permissions before operations:

```bash
# ✅ CORRECT - Check permissions
check_permissions() {
    local file="$1"
    local required="$2"  # r, w, x
    
    if [[ ! -${required} "$file" ]]; then
        print_error "Missing ${required} permission: $file"
        return 1
    fi
    
    return 0
}

# Usage
if ! check_permissions "/path/to/file" "w"; then
    exit 3
fi
```

---

## ✅ Best Practices

### **1. Use Functions**

Break scripts into reusable functions:

```bash
# ✅ CORRECT - Modular functions
check_environment() {
    print_info "Checking environment..."
    # Environment checks
}

backup_data() {
    print_info "Backing up data..."
    # Backup logic
}

deploy_app() {
    print_info "Deploying application..."
    # Deploy logic
}

main() {
    check_environment
    backup_data
    deploy_app
}
```

---

### **2. Error Handling**

Implement comprehensive error handling:

```bash
# ✅ CORRECT - Error handling
safe_operation() {
    if ! some_command; then
        print_error "Command failed"
        return 1
    fi
    
    print_success "Command succeeded"
    return 0
}

# Trap errors
trap 'print_error "Script failed on line $LINENO"' ERR

# Cleanup on exit
trap 'cleanup' EXIT

cleanup() {
    print_info "Cleaning up..."
    # Cleanup operations
}
```

---

### **3. Logging**

Implement consistent logging:

```bash
# Log file location
LOG_FILE="/tmp/script-name-$(date +%Y%m%d-%H%M%S).log"

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp="$(date '+%Y-%m-%d %H:%M:%S')"
    
    echo "[${timestamp}] [${level}] ${message}" | tee -a "$LOG_FILE"
}

# Usage
log "INFO" "Script started"
log "ERROR" "Operation failed"
log "SUCCESS" "Script completed"
```

---

### **4. Progress Indicators**

Show progress for long-running operations:

```bash
# ✅ CORRECT - Progress indicator
show_progress() {
    local current="$1"
    local total="$2"
    local percent=$((current * 100 / total))
    
    printf "\rProgress: [%-50s] %d%%" \
        $(printf '#%.0s' $(seq 1 $((percent / 2)))) \
        $percent
}

# Usage
total=100
for i in $(seq 1 $total); do
    # Do work
    show_progress "$i" "$total"
    sleep 0.1
done
echo ""  # New line after progress
```

---

### **5. Documentation**

Include comprehensive inline documentation:

```bash
################################################################################
# Function: process_data
# Description: Processes input data and generates output
# Arguments:
#   $1 - Input file path (required)
#   $2 - Output directory (optional, default: ./output)
# Returns:
#   0 - Success
#   1 - Invalid input file
#   2 - Output directory creation failed
# Example:
#   process_data "input.txt" "/tmp/output"
################################################################################
process_data() {
    local input_file="${1:-}"
    local output_dir="${2:-./output}"
    
    # Validate input
    if [[ -z "$input_file" ]]; then
        print_error "Input file is required"
        return 1
    fi
    
    # Process data
    # ...
    
    return 0
}
```

---

## 🧪 Testing

### **Testing Checklist**

Before deploying any script:

- [ ] Test with valid inputs
- [ ] Test with invalid inputs
- [ ] Test with missing dependencies
- [ ] Test with insufficient permissions
- [ ] Test error handling
- [ ] Test cleanup function
- [ ] Test on clean environment
- [ ] Test dry-run mode
- [ ] Verify all exit codes
- [ ] Check for shellcheck warnings

---

### **ShellCheck Validation**

All scripts must pass ShellCheck validation:

```bash
# Install shellcheck
# macOS: brew install shellcheck
# Ubuntu: apt-get install shellcheck

# Run shellcheck
shellcheck script-name.sh

# Fix all warnings and errors before committing
```

---

### **Manual Testing**

```bash
# Test with verbose mode
./script-name.sh --verbose

# Test with dry-run mode
./script-name.sh --dry-run

# Test error conditions
./script-name.sh invalid-argument

# Test help message
./script-name.sh --help

# Test permissions
chmod -x script-name.sh  # Remove execute permission
./script-name.sh         # Should fail gracefully
chmod +x script-name.sh  # Restore permission
```

---

## 🚫 Common Mistakes to Avoid

### **❌ DON'T:**

1. **Use eval**
   ```bash
   eval "$user_input"  # NEVER DO THIS - Command injection risk
   ```

2. **Ignore errors**
   ```bash
   rm important-file.txt  # No error checking
   ```

3. **Use unquoted variables**
   ```bash
   cat $filename  # Vulnerable to word splitting
   ```

4. **Hardcode paths**
   ```bash
   cd /Users/john/project  # Won't work for others
   ```

5. **Skip input validation**
   ```bash
   rm -rf "$1"  # No validation of $1
   ```

6. **Use global variables unnecessarily**
   ```bash
   # Bad - Global variable pollution
   result="something"
   
   # Good - Local variables
   local result="something"
   ```

7. **Forget to set execute permissions**
   ```bash
   # File won't be executable without:
   chmod +x script-name.sh
   ```

---

## ✅ Best Practices Summary

### **DO:**

1. ✅ **Enable strict mode**
   ```bash
   set -euo pipefail
   ```

2. ✅ **Quote all variables**
   ```bash
   echo "$variable"
   ```

3. ✅ **Use local variables in functions**
   ```bash
   local var="value"
   ```

4. ✅ **Validate all inputs**
   ```bash
   if [[ -z "$input" ]]; then
       print_error "Input required"
       exit 2
   fi
   ```

5. ✅ **Check command existence**
   ```bash
   if ! command -v git &> /dev/null; then
       print_error "git not found"
       exit 1
   fi
   ```

6. ✅ **Use meaningful exit codes**
   ```bash
   exit 0  # Success
   exit 1  # General error
   exit 2  # Invalid argument
   exit 3  # Permission denied
   ```

7. ✅ **Include comprehensive documentation**
   - Header comments
   - Function documentation
   - Usage examples
   - Dependencies list

8. ✅ **Implement cleanup functions**
   ```bash
   trap cleanup EXIT
   ```

9. ✅ **Use consistent naming**
   - Scripts: `verb-noun.sh`
   - Functions: `snake_case`
   - Variables: `UPPER_CASE` (constants), `lower_case` (variables)

10. ✅ **Test with ShellCheck**
    ```bash
    shellcheck script-name.sh
    ```

---

## 📂 Migration Process

### **Moving Existing Scripts to /scripts/**

If you encounter shell scripts in incorrect locations:

1. **Identify script location**
   ```bash
   find . -name "*.sh" -not -path "./scripts/*"
   ```

2. **Determine appropriate subdirectory**
   - Build scripts → `/scripts/build/`
   - Deploy scripts → `/scripts/deploy/`
   - Test scripts → `/scripts/test/`
   - Dev utilities → `/scripts/dev/`
   - Maintenance → `/scripts/maintenance/`
   - Utilities → `/scripts/utils/`

3. **Move script to correct location**
   ```bash
   # Example
   mv build-prod.sh /scripts/build/build-production.sh
   ```

4. **Update script header**
   - Add/update header documentation
   - Update file paths if necessary
   - Add version information

5. **Update references**
   - Find all references to old location
   - Update documentation
   - Update CI/CD pipelines
   - Update package.json scripts

6. **Test moved script**
   ```bash
   ./scripts/build/build-production.sh --dry-run
   ```

7. **Delete old location**
   ```bash
   rm old-location/build-prod.sh
   ```

---

## 📊 Script Categories

### **1. Build Scripts** (`/scripts/build/`)

**Purpose:** Compile, bundle, and prepare application for deployment

**Examples:**
- `build-production.sh` - Production build with optimizations
- `build-staging.sh` - Staging build for testing
- `optimize-assets.sh` - Optimize images, fonts, etc.

---

### **2. Deployment Scripts** (`/scripts/deploy/`)

**Purpose:** Deploy application to various environments

**Examples:**
- `deploy-production.sh` - Deploy to production
- `deploy-staging.sh` - Deploy to staging
- `rollback.sh` - Rollback to previous version

---

### **3. Development Scripts** (`/scripts/dev/`)

**Purpose:** Development environment setup and utilities

**Examples:**
- `setup-environment.sh` - Setup development environment
- `install-dependencies.sh` - Install project dependencies
- `start-dev-server.sh` - Start development server

---

### **4. Test Scripts** (`/scripts/test/`)

**Purpose:** Run various types of tests

**Examples:**
- `run-all-tests.sh` - Run complete test suite
- `run-unit-tests.sh` - Run unit tests only
- `run-integration-tests.sh` - Run integration tests

---

### **5. Maintenance Scripts** (`/scripts/maintenance/`)

**Purpose:** Maintenance, cleanup, and housekeeping tasks

**Examples:**
- `clean-cache.sh` - Clean various caches
- `update-dependencies.sh` - Update project dependencies
- `backup-database.sh` - Backup application data

---

### **6. Utility Scripts** (`/scripts/utils/`)

**Purpose:** Shared utility functions and helpers

**Examples:**
- `common-functions.sh` - Shared functions library
- `logging.sh` - Logging utilities
- `validation.sh` - Input validation functions

---

## 📚 Related Documentation

- [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md) - Guidelines for writing guidelines
- [REPORTING_GUIDELINES.md](./REPORTING_GUIDELINES.md) - Reporting standards
- [../Guidelines.md](../Guidelines.md) - Main project guidelines
- [../README.md](../README.md) - Project overview

---

## 🔗 External Resources

- [Google Shell Style Guide](https://google.github.io/styleguide/shellguide.html)
- [ShellCheck](https://www.shellcheck.net/) - Shell script analysis tool
- [Bash Hackers Wiki](https://wiki.bash-hackers.org/)
- [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/)

---

## 🔄 Changelog

### v1.0 - 2026-01-09
- Initial documentation
- Established shell script standards
- Created comprehensive template
- Documented security requirements
- Added testing guidelines
- Defined script categories
- Created migration process

---

**Status:** ✅ Complete  
**Maintainer:** Project Team  
**Last Review:** January 9, 2026
