export interface DoctorInfo {
  name: string;
  title: string;
  qualifications: string[];
  experience: number;
  specializations: string[];
  philosophy: string;
  profileImage: string;
  clinicImage: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  conditions: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  hours: OfficeHours[];
}

export interface OfficeHours {
  day: string;
  hours: string;
}