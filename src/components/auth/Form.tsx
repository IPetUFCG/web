import { Box, BoxProps, Heading, Stack, Text } from "@chakra-ui/react";
import Dots from "../general/Dots";
import NavigationLink from "./NavigationLink";

export default function Form({
  children,
  onSubmit,
  title,
  subtitle,
  ...boxProps
}: BoxProps & {
  title: string;
  subtitle?: string;
  children: JSX.Element;
  onSubmit: () => void;
}) {
  return (
    <Box
      border="4px"
      borderColor="black"
      w="full"
      maxW="430px"
      borderRadius="10px"
      bg="white"
      {...boxProps}
    >
      <Stack
        as="form"
        px="30px"
        pt="60px"
        pb="40px"
        position="relative"
        align="center"
        gap="30px"
        onSubmit={onSubmit}
      >
        <Dots />

        <Stack gap="15px" mb="10px">
          <Heading as="h1" size="3xl" textAlign="center">
            {title}
          </Heading>

          {subtitle && (
            <Text as="h3" fontSize="3xl" textAlign="center">
              {subtitle}
            </Text>
          )}
        </Stack>

        {children}
      </Stack>

      <NavigationLink />
    </Box>
  );
}
