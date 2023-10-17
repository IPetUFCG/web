import { Flex, Heading, Stack } from "@chakra-ui/react";

import { Pet } from "@/src/types/pet";
import Card from "../general/pet/Card";

export default function OurPets() {
  const pets: Pet[] = [
    { name: "Batman", image: "" },
    { name: "Chico", image: "" },
    { name: "Leão", image: "" },
    { name: "Bolinha", image: "" },
    { name: "Minerva", image: "" },
    { name: "Gata", image: "" },
  ];

  return (
    <Stack py="100px" bg="white" gap="50px">
      <Heading as="h2" fontSize="30px" textAlign="center">
        Nosso Queridos
      </Heading>
      <Flex
        as="ul"
        scrollSnapType="x mandatory"
        overflowX="scroll"
        className="no-scrollbar"
        pb="4px"
      >
        {pets.map((pet, index) => {
          const isLast = index === pets.length - 1;

          return (
            <Flex
              as="li"
              key={`outpets-pet-${index}`}
              scrollSnapAlign="center"
              pl="20px"
              pr={isLast ? "20px" : "0"}
            >
              <Card pet={pet} />
            </Flex>
          );
        })}
      </Flex>
    </Stack>
  );
}
