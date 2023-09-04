"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Github from "../../public/github.svg";

export default function SignInPage({ providers }) {
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: formValues.email,
      password: formValues.password,
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
    <div className="h-full flex justify-center items-center">
      <form method="post" onSubmit={onSubmit}>
        <div className="flex flex-col max-w-md gap-2">
          <label className="flex flex-col cursor-pointer" htmlFor="email">
            E-mail{" "}
            <input
              className="p-1 rounded-sm text-black outline-none"
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col cursor-pointer" htmlFor="password">
            Senha
            <input
              className="p-1 rounded-sm text-black outline-none"
              id="password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
          <button className="mt-2 bg-blue-500 p-1 rounded-sm" type="submit">
            Login
          </button>
          <div className="mt-2 ">
            <Button
              className="rounded-full"
              colorScheme="gray"
              onClick={githubLogin}
            >
              <Image src={Github} alt="github" width={24} />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
