"use client";
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  Spinner,
} from "@chakra-ui/react";

import Doodle from "../general/Doodle";
import { useAxios } from "@/src/hooks/useAxios";
import { usePets } from "@/src/hooks/usePets";

export default function Introduction() {
  const axios = useAxios();
  const { pets } = usePets();

  const [userCount, setUserCount] = useState(0);
  const [adoptionCount, setAdoptionCount] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function get() {
      setLoading(true);

      const { data: user } = await axios.get("/user");
      if (user && Array.isArray(user)) setUserCount(user.length);

      const { data: adoption } = await axios.get("/adoption");
      if (adoption && Array.isArray(adoption))
        setAdoptionCount(adoption.length);

      setLoading(false);
    }

    get();
  }, []);

  return (
    <Box as="section" bg="black" py="4.6875rem" pos="relative">
      <Container>
        <Stack gap="4.6875rem" align="center">
          <Heading
            as="h1"
            fontSize={{ base: "3.75rem", lg: "5rem" }}
            maxW="900px"
            textAlign="center"
            color="white"
          >
            O sistema de registro de animais da UFCG <i>Campus</i> Campina
            Grande
          </Heading>
          <HStack
            gap="1.25rem"
            scrollSnapType="x mandatory"
            overflowX="scroll"
            className="no-scrollbar"
            w="full"
            maxW="77.5rem"
          >
            <Card
              number={pets.length}
              text="Animais Cadastrados"
              loading={loading}
            />
            <Card number={userCount} text="Usuários Ativos" loading={loading} />
            <Card
              number={adoptionCount}
              text="Animais adotados"
              loading={loading}
            />
          </HStack>
        </Stack>
      </Container>
      <Doodle
        variant="dog"
        w="7.5rem"
        h="6.875rem"
        left="0"
        top="7.5rem"
        pos="absolute"
        style={{
          transform: "rotate(90deg)",
        }}
      />
    </Box>
  );
}

function Card({
  number,
  text,
  loading,
}: {
  number: number;
  text: string;
  loading: boolean;
}) {
  return (
    <Stack
      bg="darkgray"
      p="1.875rem"
      gap="0.9375rem"
      align="center"
      w="25rem"
      h="15.625rem"
      justify="center"
      textAlign="center"
      rounded="0.9375rem"
      scrollSnapAlign="center"
      flexShrink="0"
    >
      {loading ? (
        <Spinner />
      ) : (
        <Heading as="h3" fontSize="3.75rem" color="white">
          {number}
        </Heading>
      )}
      <Text fontSize="1.875rem" color="white">
        {text}
      </Text>
    </Stack>
  );
}
