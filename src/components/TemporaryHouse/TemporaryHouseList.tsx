import { ITemporaryHouse } from "@/src/types/temporaryHouse";
import { Box, Flex } from "@chakra-ui/react";
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
    <Box>
      <Flex flexDir="column" gap={8}>
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
    </Box>
  );
}
