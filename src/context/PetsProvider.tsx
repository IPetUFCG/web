import React, { createContext, useEffect, useState } from "react";

import { Pet } from "../models/Pet";
import * as api from "../api/pets";

interface ContextProps {
  pets: Pet[];
}

export const PetsContext = createContext({} as ContextProps);

export default function PetsProvider(props: { children: React.ReactNode }) {
  const [pets, setPets] = useState<Pet[]>([]);

  async function getPets() {
    const parsedPets: Pet[] = [];
    const response = await api.getPets();

    if (Array.isArray(response)) {
      response.forEach((petObj) => {
        try {
          const parsed = new Pet(petObj);
          if (parsed) {
            parsedPets.push(parsed);
          }
        } catch (e) {
          console.log(e);
        }
      });
    }

    setPets(parsedPets);
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <PetsContext.Provider
      value={{
        pets,
      }}
    >
      {props.children}
    </PetsContext.Provider>
  );
}
