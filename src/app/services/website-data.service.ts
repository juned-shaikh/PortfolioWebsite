import { Injectable } from '@angular/core';
import { DoctorInfo, Service, ContactInfo } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class WebsiteDataService {

  getDoctorInfo(): DoctorInfo {
    return {
      name: 'Dr. Mubeen Khan',
      title: 'Homeopathy Specialist',
      qualifications: [
        'BHMS (Bachelor of Homeopathic Medicine and Surgery)',
        'MD (Homeopathy)',
        'Member of National Board of Homeopathy',
        'Certified in Classical Homeopathy'
      ],
      experience: 15,
      specializations: [
        'Classical Homeopathy',
        'Constitutional Treatment',
        'Chronic Disease Management',
        'Pediatric Homeopathy',
        'Women\'s Health',
        'Mental Health & Stress Management'
      ],
      philosophy: 'I believe in treating the person as a whole, not just the disease. Homeopathy offers a gentle, natural approach to healing that works with your body\'s own healing mechanisms to restore balance and health.',
      profileImage: 'assets/images/doctor-profile.jpg',
      clinicImage: 'assets/images/clinic-interior.jpg'
    };
  }

  getServices(): Service[] {
    return [
      {
        id: 'constitutional',
        name: 'Constitutional Treatment',
        description: 'Comprehensive treatment approach that addresses your overall health constitution and chronic conditions.',
        icon: 'fas fa-user-md',
        conditions: ['Chronic fatigue', 'Digestive disorders', 'Autoimmune conditions', 'Hormonal imbalances']
      },
      {
        id: 'acute-care',
        name: 'Acute Care',
        description: 'Immediate homeopathic treatment for acute conditions and sudden onset symptoms.',
        icon: 'fas fa-heartbeat',
        conditions: ['Cold & flu', 'Fever', 'Injuries', 'Acute infections', 'Pain management']
      },
      {
        id: 'pediatric',
        name: 'Pediatric Homeopathy',
        description: 'Gentle, safe homeopathic treatment specifically designed for infants, children, and adolescents.',
        icon: 'fas fa-baby',
        conditions: ['Childhood illnesses', 'Behavioral issues', 'Growth problems', 'Learning difficulties']
      },
      {
        id: 'womens-health',
        name: 'Women\'s Health',
        description: 'Specialized homeopathic care for women\'s unique health needs throughout all life stages.',
        icon: 'fas fa-female',
        conditions: ['Menstrual disorders', 'Pregnancy support', 'Menopause', 'PCOS', 'Fertility issues']
      },
      {
        id: 'mental-health',
        name: 'Mental Health Support',
        description: 'Natural treatment for emotional and mental health challenges using homeopathic remedies.',
        icon: 'fas fa-brain',
        conditions: ['Anxiety', 'Depression', 'Stress', 'Sleep disorders', 'Panic attacks']
      },
      {
        id: 'skin-conditions',
        name: 'Skin Conditions',
        description: 'Effective homeopathic treatment for various skin conditions and dermatological issues.',
        icon: 'fas fa-hand-holding-medical',
        conditions: ['Eczema', 'Psoriasis', 'Acne', 'Allergic reactions', 'Chronic skin conditions']
      }
    ];
  }

  getContactInfo(): ContactInfo {
    return {
      phone: '+1 (555) 123-4567',
      email: 'info@drmubeenkhan.com',
      address: '123 Wellness Street, Suite 200',
      city: 'Health City, HC 12345',
      hours: [
        { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
        { day: 'Sunday', hours: 'Closed' }
      ]
    };
  }
}