import { ContactForm, ContactFormErrors } from '../models/contact.model';

export class FormValidation {
  static validateContactForm(form: ContactForm): ContactFormErrors {
    const errors: ContactFormErrors = {};

    // Name validation
    if (!form.name || form.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!form.phone || !phoneRegex.test(form.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!form.message || form.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
  }

  static hasErrors(errors: ContactFormErrors): boolean {
    return Object.keys(errors).length > 0;
  }
}