import { Link } from "@chakra-ui/next-js";
import { Box, Container, Image, Text } from "@chakra-ui/react";

export default function Brand() {
  return (
    <Box as="section" py="100px" maxH="100vh" bg="orange">
      <Container>
        <Box position="relative">
          <Link
            position="absolute"
            top="0"
            right="0"
            aria-label="Acesse o UPets"
            href="/auth/signin"
            bg="black"
            h="45px"
            w="fit-content"
            px="40px"
            color="white"
            display="flex"
            alignItems="center"
            rounded="5px"
          >
            <Text fontWeight="bold" fontSize="16px">
              Acesse o UPets!
            </Text>
          </Link>

          <Image
            alt="Logo da UPets e UFCG"
            src="/logo.png"
            maxW="1200px"
            h="full"
            w="full"
            objectFit="contain"
          />
        </Box>
      </Container>
    </Box>
  );
}
