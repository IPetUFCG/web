import { Container, Box, Stack, HStack, Heading, Text } from "@chakra-ui/react";

export default function Introduction() {
  return (
    <Box as="section" bg="black" py="4.6875rem">
      <Container>
        <Stack gap="4.6875rem" align="center">
          <Heading
            as="h1"
            fontSize={{ base: "3.75rem", lg: "5rem" }}
            maxW="900px"
            textAlign="center"
            color="white"
          >
            O sistema de registro de animais da UFCG <i>Campus</i> Campina
            Grande
          </Heading>
          <HStack gap="1.25rem">
            <Card number={0} text="Animais Cadastrados" />
            <Card number={0} text="Usuários Ativos" />
            <Card number={0} text="Animais salvos" />
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}

function Card({ number, text }: { number: number; text: string }) {
  return (
    <Stack
      bg="darkgray"
      p="1.875rem"
      gap="0.9375rem"
      align="center"
      w="full"
      maxW="25rem"
      h="15.625rem"
      justify="center"
      textAlign="center"
      rounded="0.9375rem"
    >
      <Heading as="h3" fontSize="3.75rem" color="white">
        {number}
      </Heading>
      <Text fontSize="1.875rem" color="white">
        {text}
      </Text>
    </Stack>
  );
}
