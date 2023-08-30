"use client";

import React from "react";
import { signIn } from "next-auth/react";
import {
  Button,
  Flex,
  Heading,
  Link,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
} from "@chakra-ui/react";
import Image from "next/image";
import Github from "../../public/github.svg";
import Dots from "@/src/components/Dots";
import { useForm } from "react-hook-form";

export default function SignInPage({ providers }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/pets",
    });
  };

  // const githubLogin = async () => {
  //   await signIn("github", {
  //     redirect: true,
  //     callbackUrl: "/pets",
  //   });
  // };

  return (
    <Stack as="main" h="100vh" justify="center" align="center">
      <Box
        border="4px"
        borderColor="black"
        w="full"
        maxW="450px"
        borderRadius="5px"
      >
        <Stack
          as="form"
          px="40px"
          py="70px"
          position="relative"
          align="center"
          gap="40px"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Dots />
          <Heading as="h1" size="3xl" textAlign="center">
            Acesse o UPets
          </Heading>

          <Stack w="full">
            <FormControl>
              <FormLabel size="lg">E-mail</FormLabel>
              <Input
                placeholder="gatinho@upets.com"
                type="email"
                size="lg"
                {...register("email")}
              />
            </FormControl>
            <FormControl>
              <FormLabel size="lg">Senha</FormLabel>
              <Input
                placeholder="gatinho@upets.com"
                size="lg"
                type="password"
                {...register("password")}
              />
            </FormControl>
          </Stack>

          <Stack align="center" gap="10px" w="full">
            <Button type="submit" bg="orange" color="white" size="lg">
              Entrar!
            </Button>
            <Link href="/forgot">Esqueci minha senha</Link>
          </Stack>
        </Stack>

        <Flex h="60px" justify="center" align="center" bg="black" color="white">
          <Link href="/signup" fontSize="2xl">
            Não possui conta?{" "}
            <Text as="span" textDecor="underline">
              Cadastre-se
            </Text>
          </Link>
        </Flex>
      </Box>
    </Stack>
  );
}
