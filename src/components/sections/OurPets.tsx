import { Flex, Heading, Stack } from "@chakra-ui/react";

import { Pet } from "@/src/types/pet";
import Card from "../general/pet/Card";
import Doodle from "../general/Doodle";

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
    <Stack py="6.25rem" bg="white" gap="3.125rem" pos="relative">
      <Heading as="h2" fontSize="1.875rem" textAlign="center">
        Nosso Queridos
      </Heading>
      <Flex
        as="ul"
        scrollSnapType="x mandatory"
        overflowX="scroll"
        className="no-scrollbar"
        pb="0.25rem"
      >
        {pets.map((pet, index) => {
          const isLast = index === pets.length - 1;

          return (
            <Flex
              as="li"
              key={`outpets-pet-${index}`}
              scrollSnapAlign="center"
              pl="1.25rem"
              pr={isLast ? "1.25rem" : "0"}
            >
              <Card pet={pet} />
            </Flex>
          );
        })}
      </Flex>
      <Doodle
        variant="dog"
        w="7.5rem"
        h="6.875rem"
        right="0"
        top="7.5rem"
        pos="absolute"
        style={{
          transform: "rotate(-90deg)",
        }}
      />
    </Stack>
  );
}
