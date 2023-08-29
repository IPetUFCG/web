"use client"; // ---> this line does the trick

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ReactNode } from "react";

type ProviderType = {
  children: ReactNode;
};

const Providers = ({ children }: ProviderType) => {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
