import { Flex } from "@chakra-ui/react";
import React from "react";
import ReportCard from "./ReportCard";

type CardListProps = {
  items: any[];
  owner?: boolean;
};

const CardsList = ({ items, owner = false }: CardListProps) => {
  return (
    <Flex gap={8} mt={8} flexDirection="column">
      {items.map((item) => (
        <ReportCard key={item.id} owner={owner} />
      ))}
    </Flex>
  );
};

export default CardsList;
