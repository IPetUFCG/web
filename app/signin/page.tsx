"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import {
  Button,
  Link,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Main from "@/src/components/general/Main";
import Form from "@/src/components/auth/Form";
import PasswordToggle, {
  PasswordTypes,
} from "@/src/components/auth/PasswordToggle";

export default function SignInPage({ providers }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const [passwordType, setPasswordType] = useState<PasswordTypes>("password");

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
    <Main flexDir="column" justify="center" align="center" uPetsBackground>
      <Form
        title="Acesse o UPets"
        link={
          <Link href="/signup" fontSize="2xl">
            Não possui conta?{" "}
            <Text as="span" textDecor="underline">
              Cadastre-se
            </Text>
          </Link>
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <>
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
              <InputGroup>
                <Input
                  placeholder="euamocachorro"
                  size="lg"
                  type={passwordType}
                  pr="50px"
                  {...register("password")}
                />
                <PasswordToggle type={passwordType} setType={setPasswordType} />
              </InputGroup>
            </FormControl>
          </Stack>

          <Stack align="center" gap="10px" w="full">
            <Button type="submit" bg="orange" color="white" size="lg">
              Entrar!
            </Button>
            <Link href="/forgot">Esqueci minha senha</Link>
          </Stack>
        </>
      </Form>
    </Main>
  );
}
