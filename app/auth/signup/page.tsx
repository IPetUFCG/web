"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

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
import Main from "@/src/components/general/Main";
import Form from "@/src/components/auth/Form";
import PasswordToggle from "@/src/components/auth/PasswordToggle";
import AuthProvidersButtons from "@/src/components/auth/AuthProvidersButtons";
import { usePasswordToggle } from "@/src/hooks/usePasswordToggle";

export default function SignInPage({ providers }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }>();

  const password = watch("password");

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
        <Form
          title="Nós da UPets te damos as boas-vindas!"
          onSubmit={handleSubmit(onSubmit)}
        >
          <>
            <Stack w="full" gap="7px">
              <FormControl isInvalid={!!errors.name}>
                <FormLabel size="lg">Nome</FormLabel>
                <Input
                  placeholder="Simba"
                  type="text"
                  size="lg"
                  {...register("name", {
                    required: "Você precisa passar um nome",
                    pattern: {
                      value: /^[a-zA-ZÀ-ÿ\s]+$/,
                      message: "Nome inválido",
                    },
                  })}
                />
                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>

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

              <HStack gap="10px">
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
                    <FormErrorMessage>
                      {errors.password.message}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                  <FormLabel size="lg">Confirmação da Senha</FormLabel>
                  <Input
                    placeholder="euamocachorro"
                    size="lg"
                    type="password"
                    {...register("passwordConfirmation", {
                      required: "Você precisa confirmar a senha",
                      validate: (value) => value === password,
                    })}
                  />
                  {errors.passwordConfirmation && (
                    <FormErrorMessage>
                      {errors.passwordConfirmation.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
              </HStack>
            </Stack>

            <Stack gap="7px" w="full">
              <Button
                type="submit"
                variant="unstyled"
                bg="blue"
                color="white"
                size="lg"
              >
                Cadastre-se!
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
