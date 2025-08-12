export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredContactMethod: 'phone' | 'email';
  appointmentRequest: boolean;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}