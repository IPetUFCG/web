import { ITemporaryHouse } from "@/src/types/temporaryHouse";
import { useAxios } from "../../hooks/useAxios";
import { Container, Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import TemporaryHouseItem from "./TemporaryHouseItem";

export type TemporaryHouseListProps = {
  isMobile?: boolean;
  temporaryHouses: ITemporaryHouse[];
};

export default function TemporaryHouseList({
  isMobile,
  temporaryHouses,
}: TemporaryHouseListProps) {
  return (
    <Container p={isMobile ? 2 : undefined}>
      <Flex flexDir="column">
        {temporaryHouses.map((house) => (
          <TemporaryHouseItem
            key={house.id}
            title={house.title}
            description={house?.description || ""}
            careTakers={house.careTakers}
            ownerId={house.ownerId}
            pets={house.pets}
          />
        ))}
      </Flex>
    </Container>
  );
}
