import { Box, useColorModeValue } from "@chakra-ui/react";

type ActiveLinkProps = {
  title: string;
};

function ActiveLink({ title }: ActiveLinkProps) {
  return (
    <Box
      px={6}
      py={1}
      rounded={"md"}
      background="#FFA23B"
      _hover={{
        cursor: "default",
      }}
    >
      {title}
    </Box>
  );
}

export default ActiveLink;
