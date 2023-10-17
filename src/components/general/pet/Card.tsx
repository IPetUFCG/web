import { Stack, Text, Image } from "@chakra-ui/react";

import { Pet } from "@/src/types/pet";

export default function Card({ pet }: { pet: Pet }) {
  const { name, image } = pet;
  return (
    <Stack
      border="3px solid"
      borderColor="black"
      boxShadow="-4px 4px 0 0 black"
      rounded="7px"
      gap="15px"
      p="20px"
    >
      <Image
        src={image}
        alt={`Imagem do Pet: ${name}`}
        h="400px"
        w="300px"
        __css={{ objectFit: "cover" }}
      />
      <Text fontSize="30px" fontWeight="bold">
        {name}
      </Text>
    </Stack>
  );
}
