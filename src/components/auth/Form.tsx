import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import Dots from "../general/Dots";

export default function Form({
  children,
  onSubmit,
  title,
  link,
  ...boxProps
}: BoxProps & {
  title: string;
  link: JSX.Element;
  children: JSX.Element;
  onSubmit: () => void;
}) {
  return (
    <Box
      border="4px"
      borderColor="black"
      w="full"
      maxW="450px"
      borderRadius="5px"
      bg="white"
      {...boxProps}
    >
      <Stack
        as="form"
        px="40px"
        py="70px"
        position="relative"
        align="center"
        gap="40px"
        onSubmit={onSubmit}
      >
        <Dots />

        <Heading as="h1" size="3xl" textAlign="center">
          {title}
        </Heading>

        {children}
      </Stack>

      <Flex h="60px" justify="center" align="center" bg="black" color="white">
        {link}
      </Flex>
    </Box>
  );
}
