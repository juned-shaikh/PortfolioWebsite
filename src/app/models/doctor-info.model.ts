export interface DoctorInfo {
  name: string;
  title: string;
  qualifications: string[];
  experience: number;
  specializations: string[];
  philosophy: string;
  profileImage: string;
  clinicImage?: string;
}

export interface Credential {
  type: 'education' | 'certification' | 'membership';
  title: string;
  institution: string;
  year: number;
  description?: string;
}