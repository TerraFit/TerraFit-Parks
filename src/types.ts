export interface SystemType {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}
