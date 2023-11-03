export interface IUser {
  birthDate: string | null;
  createdAt: string;
  document: string | null;
  email: string;
  id: number;
  name: string;
  phone: string | null;
  role: string;
}

export interface IAddress {
  zipCode: string;
  district: string;
  street: string;
  number: string;
  city: string;
  state: string;
  complement?: string;
}
