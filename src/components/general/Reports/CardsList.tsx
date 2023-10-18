import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import ReportCard from "./ReportCard";

type CardListProps = {
  items: any[];
};

const CardsList = ({ items }: CardListProps) => {
  return (
    <Flex gap={8} mt={8} flexDirection="column">
      {items.map((item) => (
        <ReportCard key={item.id} />
      ))}
    </Flex>
  );
};

export default CardsList;
