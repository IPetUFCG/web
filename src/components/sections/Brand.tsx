import { Link } from "@chakra-ui/next-js";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

export default function Brand() {
  return (
    <Box as="section" py="6.25rem" maxH="100vh" bg="orange">
      <Container>
        <Flex justify="center" position="relative">
          <Link
            position="absolute"
            top="0"
            right="0"
            aria-label="Acesse o UPets"
            href="/auth/signin"
            bg="black"
            h="2.8125rem"
            w="fit-content"
            px="2.5rem"
            color="white"
            display="flex"
            alignItems="center"
            rounded="0.3125rem"
          >
            <Text fontWeight="bold" fontSize="1rem" color="white">
              Acesse o UPets!
            </Text>
          </Link>

          <Image
            alt="Logo da UPets e UFCG"
            src="/logo.png"
            maxW="75rem"
            h="full"
            w="full"
            objectFit="contain"
          />
        </Flex>
      </Container>
    </Box>
  );
}
