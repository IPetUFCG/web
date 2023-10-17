import { Stack, Text, Image } from "@chakra-ui/react";

import { Pet } from "@/src/types/pet";

export default function Card({ pet }: { pet: Pet }) {
  const { name, image } = pet;
  return (
    <Stack
      border="0.1875rem solid"
      borderColor="black"
      boxShadow="-0.25rem 0.25rem 0 0 black"
      rounded="0.4375rem"
      gap="0.9375rem"
      p="1.25rem"
    >
      <Image
        src={image}
        alt={`Imagem do Pet: ${name}`}
        h="25rem"
        w="18.75rem"
        __css={{ objectFit: "cover" }}
      />
      <Text fontSize="1.875rem" fontWeight="bold">
        {name}
      </Text>
    </Stack>
  );
}
