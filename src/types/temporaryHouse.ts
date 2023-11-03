import { IPet } from "./pet";
import { IUser } from "./user";

export interface ITemporaryHouse {
  addressId: number;
  careTakers: IUser[];
  createdAt: string;
  description?: string | null;
  id: number;
  ownerId: number;
  pets: IPet[];
  title: string;
  updatedAt: string;
}
