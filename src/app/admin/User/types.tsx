
export type Status = "Active" | "Inactive" | "Suspended";

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: string; 
  role?: string;
  joined?: string;   
  lastLogin?: string; 
  cbEarned: number;
  avatar: string;
}
