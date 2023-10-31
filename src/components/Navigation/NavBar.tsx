"use client";

import {
  Avatar,
  Box,
  Button,
  useDisclosure,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { usePathname } from "next/navigation";
import ActiveLink from "./ActiveLink";
import NavLink from "./NavLink";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";

type NavBarItem = {
  label: string;
  link: string;
};

type NavBarProps = {
  items: NavBarItem[];
};

function NavBar({ items }: NavBarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathName = usePathname();

  return (
    <>
      <Flex backgroundColor="#636FFF" p={16} justifyContent="center">
        <Image src="logo-white.svg" alt="logo" width={250} height={60} />
      </Flex>
      <Box bg="black" px={4}>
        <Container>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {items.map((item) =>
                  item.link === pathName ? (
                    <ActiveLink key={item.link} title={item.label} />
                  ) : (
                    <NavLink
                      key={item.link}
                      link={item.link}
                      title={item.label}
                    />
                  )
                )}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"md"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Container>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {items.map((item) => (
                <NavLink key={item.link} link={item.link} title={item.label} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default NavBar;
