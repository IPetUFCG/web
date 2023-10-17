import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export type NavLinkProps = {
  link: string;
  title: string;
};

const NavLink = ({ link, title }: NavLinkProps) => {
  return (
    <Box
      as="a"
      px={6}
      py={1}
      rounded={"md"}
      backgroundColor="#636FFF"
      _hover={{
        textDecoration: "none",
        transform: "scaleY(1.05)",
        transition: "all 150ms ease-in-out",
      }}
      href={link}
    >
      {title}
    </Box>
  );
};

export default NavLink;
