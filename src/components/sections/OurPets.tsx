import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import Card from "../general/pet/Card";
import Doodle from "../general/Doodle";
import { usePets } from "@/src/hooks/usePets";

export default function OurPets() {
  const { pets } = usePets();

  return (
    <Stack py="6.25rem" bg="white" gap="3.125rem" pos="relative">
      <Heading as="h2" fontSize="1.875rem" textAlign="center">
        Nossos Queridos
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
            <Box
              as="li"
              key={`outpets-pet-${index}`}
              scrollSnapAlign="center"
              pl="1.25rem"
              pr={isLast ? "1.25rem" : "0"}
            >
              <Card pet={pet} />
            </Box>
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
