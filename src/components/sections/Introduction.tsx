import { Container, Box, Stack, HStack, Heading, Text } from "@chakra-ui/react";

export default function Introduction() {
  return (
    <Box as="section" bg="black" py="75px">
      <Container>
        <Stack gap="75px">
          <Heading as="h1" fontSize="60" textAlign="center" color="white">
            O sistema de registro de animais da UFCG <i>Campus</i> Campina
            Grande
          </Heading>
          <HStack gap="20px">
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
      p="30px"
      gap="15px"
      align="center"
      w="full"
      maxW="400px"
      h="250px"
      justify="center"
      textAlign="center"
      rounded="15px"
    >
      <Heading as="h3" fontSize="60px" color="white">
        {number}
      </Heading>
      <Text fontSize="30px" color="white">
        {text}
      </Text>
    </Stack>
  );
}
