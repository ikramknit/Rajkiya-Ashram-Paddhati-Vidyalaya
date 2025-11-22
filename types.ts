export interface ExamResult {
  year: string;
  class10: number | null;
  class12: number | null;
  topper10?: string;
  topper12?: string;
}

export interface StaffMember {
  id: number;
  name: string;
  designation: string;
  subject: string;
}

export interface Facility {
  title: string;
  description: string;
  iconName: string;
  image?: string;
}

export interface SchoolEvent {
  title: string;
  description: string;
  image: string;
  date?: string;
}

export enum ChatState {
  IDLE,
  LOADING,
  ERROR,
  SUCCESS
}