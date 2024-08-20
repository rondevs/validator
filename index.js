class Validator {
    constructor() {
      this.errors = {};
    }
  
    // Validate email format
    validateEmail(field, value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailPattern.test(value)) {
        this.errors[field] = `${field} is not a valid email address`;
      }
    }
  
    // Validate password with specific criteria (e.g., min length, special characters)
    validatePassword(field, value, options = {}) {
      const {
        minLength = 8,
        requireNumbers = true,
        requireSpecialChars = true,
      } = options;
  
      if (!value) {
        this.errors[field] = `${field} is required`;
        return;
      }
  
      if (value.length < minLength) {
        this.errors[field] = `${field} must be at least ${minLength} characters`;
      }
  
      if (requireNumbers && !/\d/.test(value)) {
        this.errors[field] = `${field} must contain at least one number`;
      }
  
      if (requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        this.errors[field] = `${field} must contain at least one special character`;
      }
    }
  
    getErrors() {
      return this.errors;
    }
  
    clearErrors() {
      this.errors = {};
    }
  }
  
  module.exports = Validator;
  