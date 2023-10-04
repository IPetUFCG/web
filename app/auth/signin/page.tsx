"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  Flex,
  FormErrorMessage,
  HStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Main from "@/src/components/general/Main";
import Form from "@/src/components/auth/Form";
import AuthProvidersButtons from "@/src/components/auth/AuthProvidersButtons";
import { usePasswordToggle } from "@/src/hooks/usePasswordToggle";
import PasswordToggle from "@/src/components/auth/PasswordToggle";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const [passwordType, setPasswordType] = usePasswordToggle();

  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/pets",
    });
  };

  const githubLogin = async () => {
    await signIn("github", {
      redirect: true,
      callbackUrl: "/pets",
    });
  };

  return (
    <Main uPetsBackground>
      <Flex h="full" justify="center" align="center">
        <Form title="Acesse o UPets" onSubmit={handleSubmit(onSubmit)}>
          <>
            <Stack w="full" gap="7px">
              <FormControl isInvalid={!!errors.email}>
                <FormLabel size="lg">E-mail</FormLabel>
                <Input
                  placeholder="gatinho@upets.com"
                  type="email"
                  size="lg"
                  {...register("email", {
                    required: "Você precisa passar um e-mail",
                    pattern: {
                      value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                      message: "E-mail inválido",
                    },
                  })}
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.password}>
                <FormLabel size="lg">Senha</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="euamocachorro"
                    size="lg"
                    type={passwordType}
                    pr="40px"
                    {...register("password", {
                      required: "Você precisa passar um senha",
                    })}
                  />
                  <PasswordToggle
                    type={passwordType}
                    setType={setPasswordType}
                  />
                </InputGroup>
                {errors.password && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )}
              </FormControl>

              <Link
                href="/auth/forgot"
                textAlign="right"
                fontSize="lg"
                alignSelf="end"
                w="min-content"
              >
                Esqueceu?
              </Link>
            </Stack>

            <Stack gap="7px" w="full">
              <Button
                type="submit"
                variant="unstyled"
                bg="orange"
                color="white"
                size="lg"
              >
                Entrar!
              </Button>
              <HStack gap="7px" h="35px">
                <AuthProvidersButtons authWithGithub={githubLogin} />
              </HStack>
            </Stack>
          </>
        </Form>
      </Flex>
    </Main>
  );
}