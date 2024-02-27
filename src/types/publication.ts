import { ImageType } from "../components/general/FileInput/FileInput";
import { IPet } from "./pet";

export interface IPublication {
  content: string;
  title: string;
  petId: number;
  photos: ImageType[];
  pet?: IPet;
  createdAt: string;
  id: number;
}
