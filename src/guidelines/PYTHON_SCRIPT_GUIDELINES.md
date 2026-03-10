# Python Script Guidelines

**Type:** Process  
**Status:** Complete  
**Version:** 1.0  
**Last Updated:** January 9, 2026  
**Purpose:** Standardize Python script creation, naming, organization, and best practices for the WooCommerce Prototype project.

---

## 📋 Overview

All Python scripts (`.py` files) must follow standardized naming conventions, be organized in the `/scripts/` directory, include proper documentation, error handling, type hints, and security measures. This ensures consistent, maintainable, and safe automation across the project.

---

## 🎯 Purpose

This guideline establishes:
- Location and organization standards for Python scripts
- Naming conventions for script files
- Code quality and security requirements
- Documentation standards (docstrings)
- Testing and validation procedures
- Best practices for maintainability

---

## 📁 Directory Structure

**🚨 CRITICAL: All Python scripts MUST be stored in `/scripts/` directory.**

```
/scripts/
├── README.md                      # Scripts directory documentation
├── build/                         # Build and compilation scripts
│   ├── build_production.py
│   ├── build_staging.py
│   └── optimize_assets.py
├── deploy/                        # Deployment scripts
│   ├── deploy_production.py
│   ├── deploy_staging.py
│   └── rollback.py
├── dev/                           # Development utilities
│   ├── setup_environment.py
│   ├── install_dependencies.py
│   └── start_dev_server.py
├── test/                          # Testing scripts
│   ├── run_all_tests.py
│   ├── run_unit_tests.py
│   └── run_integration_tests.py
├── maintenance/                   # Maintenance and cleanup
│   ├── clean_cache.py
│   ├── update_dependencies.py
│   └── backup_database.py
└── utils/                         # Utility modules
    ├── common.py                  # Shared functions library
    ├── logging_utils.py           # Logging utilities
    └── validation.py              # Validation functions
```

---

## 🏷️ Naming Conventions

### **Standard Format**

All Python scripts must follow this naming convention:

```
verb_noun_modifier.py
```

**Components:**
1. **Verb (Required):** Action being performed (e.g., `build`, `deploy`, `test`, `clean`)
2. **Noun (Required):** Target of the action (e.g., `production`, `cache`, `dependencies`)
3. **Modifier (Optional):** Additional context (e.g., `force`, `quick`, `all`)

**Note:** Python uses `snake_case` (underscores), not hyphens like shell scripts.

### **Examples**

#### ✅ CORRECT:
```
build_production.py              # Clear action + target
deploy_staging.py                # Clear action + target
run_all_tests.py                 # Action + modifier + target
clean_cache_force.py             # Action + target + modifier
setup_environment.py             # Action + target
update_dependencies.py           # Action + target
```

#### ❌ INCORRECT:
```
script.py                        # Too generic
prod-build.py                    # Hyphen instead of underscore
BuildProduction.py               # PascalCase (wrong for scripts)
DEPLOY.PY                        # All caps (wrong)
deploy production.py             # Space in filename
```

---

## 📝 Script Template

Use this template for all new Python scripts:

```python
#!/usr/bin/env python3
"""
Script Name: script_name.py
Description: Brief description of what this script does.

Author: Author Name/Team
Created: YYYY-MM-DD
Last Modified: YYYY-MM-DD
Version: X.X.X

Usage:
    python script_name.py [options] [arguments]
    
Options:
    -h, --help        Show this help message
    -v, --verbose     Enable verbose output
    -d, --dry-run     Simulate without making changes

Examples:
    python script_name.py
    python script_name.py --verbose
    python script_name.py --dry-run

Dependencies:
    - Python >= 3.8
    - requests >= 2.28.0
    - [other dependencies]

Exit Codes:
    0 - Success
    1 - General error
    2 - Invalid argument
    3 - Permission denied
"""

import argparse
import logging
import sys
from pathlib import Path
from typing import Optional, List, Dict, Any

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class ScriptError(Exception):
    """Base exception for script errors."""
    pass


class Config:
    """Configuration constants for the script."""
    
    SCRIPT_DIR = Path(__file__).parent.absolute()
    PROJECT_ROOT = SCRIPT_DIR.parent
    
    # Default values
    VERBOSE = False
    DRY_RUN = False


def parse_arguments() -> argparse.Namespace:
    """
    Parse command-line arguments.
    
    Returns:
        argparse.Namespace: Parsed arguments
    """
    parser = argparse.ArgumentParser(
        description='Description of what this script does',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s
  %(prog)s --verbose
  %(prog)s --dry-run
        """
    )
    
    parser.add_argument(
        '-v', '--verbose',
        action='store_true',
        help='Enable verbose output'
    )
    
    parser.add_argument(
        '-d', '--dry-run',
        action='store_true',
        help='Simulate without making changes'
    )
    
    return parser.parse_args()


def validate_dependencies() -> None:
    """
    Validate that all required dependencies are available.
    
    Raises:
        ScriptError: If dependencies are missing
    """
    try:
        # Check for required packages
        import requests
        logger.debug("All dependencies validated")
    except ImportError as e:
        raise ScriptError(f"Missing dependency: {e}")


def main() -> int:
    """
    Main script logic.
    
    Returns:
        int: Exit code (0 for success, non-zero for errors)
    """
    args = parse_arguments()
    
    # Update logging level if verbose
    if args.verbose:
        logger.setLevel(logging.DEBUG)
    
    try:
        logger.info("Starting script...")
        
        # Validate dependencies
        validate_dependencies()
        
        # Your script logic here
        if args.dry_run:
            logger.info("DRY RUN MODE - No changes will be made")
        
        # ... script implementation ...
        
        logger.info("Script completed successfully!")
        return 0
        
    except ScriptError as e:
        logger.error(f"Script error: {e}")
        return 1
    except Exception as e:
        logger.exception(f"Unexpected error: {e}")
        return 1


if __name__ == '__main__':
    sys.exit(main())
```

---

## 🛡️ Security Requirements

### **1. Input Validation**

Always validate and sanitize user inputs:

```python
# ✅ CORRECT - Validate input
def validate_input(value: str) -> bool:
    """Validate user input."""
    if not value:
        raise ValueError("Input cannot be empty")
    
    # Check for dangerous characters
    if any(char in value for char in ['<', '>', '&', '"', "'"]):
        raise ValueError("Invalid characters in input")
    
    return True

# ❌ WRONG - No validation
def process_file(filename: str) -> None:
    os.remove(filename)  # DANGEROUS! No validation
```

---

### **2. Avoid Command Injection**

Never use `eval()` or `exec()` with user input:

```python
# ✅ CORRECT - Safe execution
import subprocess

def run_command(cmd: List[str]) -> str:
    """Safely run a command."""
    result = subprocess.run(
        cmd,
        capture_output=True,
        text=True,
        check=True
    )
    return result.stdout

# ❌ WRONG - Command injection vulnerability
def dangerous_execute(user_input: str) -> None:
    eval(user_input)  # NEVER DO THIS
    exec(user_input)  # NEVER DO THIS
```

---

### **3. Secure File Operations**

Use safe file handling practices:

```python
# ✅ CORRECT - Safe file operations
from pathlib import Path

def safe_read_file(filepath: Path) -> str:
    """Safely read a file."""
    if not filepath.exists():
        raise FileNotFoundError(f"File not found: {filepath}")
    
    if not filepath.is_file():
        raise ValueError(f"Not a file: {filepath}")
    
    # Check file size to prevent memory issues
    if filepath.stat().st_size > 10 * 1024 * 1024:  # 10MB
        raise ValueError(f"File too large: {filepath}")
    
    return filepath.read_text()

# ✅ CORRECT - Safe file deletion
def safe_delete(filepath: Path) -> None:
    """Safely delete a file."""
    if not filepath.exists():
        raise FileNotFoundError(f"File not found: {filepath}")
    
    if not filepath.is_file():
        raise ValueError(f"Not a file: {filepath}")
    
    filepath.unlink()

# ❌ WRONG - No validation
def dangerous_delete(filename: str) -> None:
    os.remove(filename)  # No existence check
```

---

### **4. Environment Variables**

Use environment variables for sensitive data:

```python
# ✅ CORRECT - Use environment variables
import os
from typing import Optional

def get_api_key() -> str:
    """Get API key from environment."""
    api_key = os.getenv('API_KEY')
    if not api_key:
        raise ValueError("API_KEY environment variable not set")
    return api_key

# ❌ WRONG - Hardcoded secrets
API_KEY = "sk-1234567890abcdef"  # NEVER DO THIS
```

---

### **5. Type Hints**

Always use type hints for better code safety:

```python
# ✅ CORRECT - Type hints
from typing import List, Dict, Optional

def process_data(
    items: List[str],
    config: Dict[str, Any],
    verbose: bool = False
) -> Optional[str]:
    """Process data with type hints."""
    if not items:
        return None
    
    return items[0]

# ❌ WRONG - No type hints
def process_data(items, config, verbose=False):
    """Process data without type hints."""
    return items[0]
```

---

## ✅ Best Practices

### **1. Use Functions and Classes**

Break scripts into reusable functions:

```python
# ✅ CORRECT - Modular functions
def check_environment() -> None:
    """Check environment configuration."""
    logger.info("Checking environment...")
    # Environment checks

def backup_data() -> None:
    """Backup data before deployment."""
    logger.info("Backing up data...")
    # Backup logic

def deploy_app() -> None:
    """Deploy application."""
    logger.info("Deploying application...")
    # Deploy logic

def main() -> int:
    """Main entry point."""
    check_environment()
    backup_data()
    deploy_app()
    return 0
```

---

### **2. Error Handling**

Implement comprehensive error handling:

```python
# ✅ CORRECT - Proper error handling
def safe_operation() -> None:
    """Perform operation with error handling."""
    try:
        result = risky_operation()
        logger.info(f"Operation succeeded: {result}")
    except FileNotFoundError as e:
        logger.error(f"File not found: {e}")
        raise
    except PermissionError as e:
        logger.error(f"Permission denied: {e}")
        raise
    except Exception as e:
        logger.exception(f"Unexpected error: {e}")
        raise

# ❌ WRONG - Bare except
def dangerous_operation() -> None:
    try:
        risky_operation()
    except:  # NEVER USE BARE EXCEPT
        pass
```

---

### **3. Logging**

Implement consistent logging:

```python
# ✅ CORRECT - Proper logging
import logging

logger = logging.getLogger(__name__)

def process_items(items: List[str]) -> None:
    """Process items with logging."""
    logger.info(f"Processing {len(items)} items")
    
    for i, item in enumerate(items, 1):
        logger.debug(f"Processing item {i}/{len(items)}: {item}")
        # Process item
    
    logger.info("Processing complete")

# ❌ WRONG - Print statements
def process_items_bad(items: List[str]) -> None:
    print(f"Processing {len(items)} items")  # Use logging instead
    for item in items:
        print(f"Processing: {item}")  # Use logging instead
```

---

### **4. Progress Indicators**

Show progress for long-running operations:

```python
# ✅ CORRECT - Progress indicator
from typing import Iterable
import sys

def show_progress(
    items: Iterable,
    total: int,
    prefix: str = "Progress:"
) -> None:
    """Show progress bar."""
    for i, item in enumerate(items, 1):
        percent = (i / total) * 100
        bar_length = 50
        filled = int(bar_length * i / total)
        bar = '█' * filled + '-' * (bar_length - filled)
        
        sys.stdout.write(f'\r{prefix} |{bar}| {percent:.1f}%')
        sys.stdout.flush()
        
        yield item
    
    sys.stdout.write('\n')

# Usage
items = range(100)
for item in show_progress(items, 100):
    # Process item
    pass
```

---

### **5. Documentation**

Include comprehensive docstrings:

```python
# ✅ CORRECT - Comprehensive docstring
def process_data(
    input_file: Path,
    output_dir: Path,
    format: str = "json"
) -> Dict[str, Any]:
    """
    Process input data and generate output.
    
    Args:
        input_file: Path to input file
        output_dir: Directory for output files
        format: Output format ('json', 'csv', or 'xml')
    
    Returns:
        Dict containing processing statistics:
            - 'processed': Number of items processed
            - 'errors': Number of errors encountered
            - 'output_files': List of generated files
    
    Raises:
        FileNotFoundError: If input_file doesn't exist
        ValueError: If format is not supported
        PermissionError: If output_dir is not writable
    
    Example:
        >>> stats = process_data(
        ...     Path('input.txt'),
        ...     Path('/tmp/output'),
        ...     format='json'
        ... )
        >>> print(stats['processed'])
        42
    """
    # Implementation
    pass
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
- [ ] Test with different Python versions (3.8+)
- [ ] Verify type hints with mypy
- [ ] Check code quality with pylint
- [ ] Format code with black
- [ ] Verify all exit codes

---

### **Type Checking with mypy**

All scripts must pass mypy type checking:

```bash
# Install mypy
pip install mypy

# Run mypy
mypy script_name.py

# Fix all type errors before committing
```

---

### **Code Quality with pylint**

```bash
# Install pylint
pip install pylint

# Run pylint
pylint script_name.py

# Aim for score >= 8.0
```

---

### **Code Formatting with black**

```bash
# Install black
pip install black

# Format code
black script_name.py

# All Python code should be black-formatted
```

---

### **Manual Testing**

```python
# Test with verbose mode
python script_name.py --verbose

# Test with dry-run mode
python script_name.py --dry-run

# Test error conditions
python script_name.py invalid-argument

# Test help message
python script_name.py --help
```

---

## 🚫 Common Mistakes to Avoid

### **❌ DON'T:**

1. **Use eval() or exec()**
   ```python
   eval(user_input)  # NEVER DO THIS - Code injection risk
   ```

2. **Ignore type hints**
   ```python
   def process(data):  # Missing type hints
       return data
   ```

3. **Use bare except**
   ```python
   try:
       risky_operation()
   except:  # NEVER DO THIS - Too broad
       pass
   ```

4. **Hardcode paths or secrets**
   ```python
   API_KEY = "secret"  # NEVER DO THIS
   path = "/Users/john/project"  # NEVER DO THIS
   ```

5. **Skip input validation**
   ```python
   os.remove(user_input)  # No validation
   ```

6. **Use print() instead of logging**
   ```python
   print("Debug message")  # Use logger.debug() instead
   ```

7. **Forget virtual environments**
   ```bash
   pip install requests  # Install in venv instead
   ```

---

## ✅ Best Practices Summary

### **DO:**

1. ✅ **Use type hints everywhere**
   ```python
   def func(x: int) -> str:
       return str(x)
   ```

2. ✅ **Validate all inputs**
   ```python
   if not value:
       raise ValueError("Value required")
   ```

3. ✅ **Use pathlib for file operations**
   ```python
   from pathlib import Path
   filepath = Path('file.txt')
   ```

4. ✅ **Use logging, not print**
   ```python
   logger.info("Message")
   ```

5. ✅ **Use environment variables for secrets**
   ```python
   api_key = os.getenv('API_KEY')
   ```

6. ✅ **Write comprehensive docstrings**
   ```python
   """
   Function description.
   
   Args:
       param: Description
   
   Returns:
       Description
   """
   ```

7. ✅ **Use context managers**
   ```python
   with open('file.txt') as f:
       data = f.read()
   ```

8. ✅ **Test with mypy, pylint, black**
   ```bash
   mypy script.py
   pylint script.py
   black script.py
   ```

9. ✅ **Use virtual environments**
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

10. ✅ **Return exit codes**
    ```python
    return 0  # Success
    return 1  # Error
    ```

---

## 📦 Dependency Management

### **requirements.txt**

Create a `requirements.txt` for script dependencies:

```txt
# Core dependencies
requests>=2.28.0
click>=8.1.0

# Development dependencies
mypy>=1.0.0
pylint>=2.15.0
black>=22.10.0
pytest>=7.2.0
```

Install:
```bash
pip install -r requirements.txt
```

---

### **Virtual Environment**

Always use virtual environments:

```bash
# Create virtual environment
python -m venv venv

# Activate (Linux/Mac)
source venv/bin/activate

# Activate (Windows)
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

---

## 📂 Script Categories

### **1. Build Scripts** (`/scripts/build/`)

**Purpose:** Compile, bundle, and prepare application

**Examples:**
- `build_production.py` - Production build
- `build_staging.py` - Staging build
- `optimize_assets.py` - Asset optimization

---

### **2. Deployment Scripts** (`/scripts/deploy/`)

**Purpose:** Deploy application to environments

**Examples:**
- `deploy_production.py` - Production deployment
- `deploy_staging.py` - Staging deployment
- `rollback.py` - Rollback deployment

---

### **3. Development Scripts** (`/scripts/dev/`)

**Purpose:** Development environment setup

**Examples:**
- `setup_environment.py` - Environment setup
- `install_dependencies.py` - Dependency installation
- `start_dev_server.py` - Development server

---

### **4. Test Scripts** (`/scripts/test/`)

**Purpose:** Run various types of tests

**Examples:**
- `run_all_tests.py` - Full test suite
- `run_unit_tests.py` - Unit tests
- `run_integration_tests.py` - Integration tests

---

### **5. Maintenance Scripts** (`/scripts/maintenance/`)

**Purpose:** Maintenance and housekeeping

**Examples:**
- `clean_cache.py` - Cache cleaning
- `update_dependencies.py` - Dependency updates
- `backup_database.py` - Database backup

---

### **6. Utility Modules** (`/scripts/utils/`)

**Purpose:** Shared utility functions

**Examples:**
- `common.py` - Common functions
- `logging_utils.py` - Logging utilities
- `validation.py` - Validation functions

---

## 📚 Related Documentation

- [SHELL_SCRIPT_GUIDELINES.md](./SHELL_SCRIPT_GUIDELINES.md) - Shell script standards
- [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md) - Guidelines writing standards
- [../Guidelines.md](../Guidelines.md) - Main project guidelines
- [../scripts/README.md](../scripts/README.md) - Scripts directory

---

## 🔗 External Resources

- [PEP 8 - Style Guide for Python Code](https://pep8.org/)
- [PEP 257 - Docstring Conventions](https://www.python.org/dev/peps/pep-0257/)
- [mypy - Static Type Checker](https://mypy.readthedocs.io/)
- [pylint - Code Analysis](https://pylint.org/)
- [black - Code Formatter](https://black.readthedocs.io/)

---

## 🔄 Changelog

### v1.0 - 2026-01-09
- Initial documentation
- Established Python script standards
- Created comprehensive template
- Documented security requirements
- Added testing guidelines
- Defined script categories
- Added type hints requirements

---

**Status:** ✅ Complete  
**Maintainer:** Project Team  
**Last Review:** January 9, 2026
