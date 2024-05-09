export interface TeamMember {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  role: string;
}

export interface DisplayTeamMember {
  fullName: string;
  phoneNumber: string;
  email: string;
  isAdmin: boolean;
  id: number;
}