export type Status = "Active" | "Inactive" | "Suspended";

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: string; // allow arbitrary strings, but prefer Status
  role?: string;
  joined?: string;   // yyyy-mm-dd
  lastLogin?: string; // yyyy-mm-dd
  cbEarned: number;
  avatar: string;
}
