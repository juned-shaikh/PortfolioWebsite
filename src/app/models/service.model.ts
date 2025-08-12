export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  conditions: string[];
  benefits?: string[];
}

export interface TreatmentApproach {
  title: string;
  description: string;
  steps: string[];
}