import { Flex } from "@chakra-ui/react";
import React from "react";
import ReportCard from "./ReportCard/ReportCard";
import { IReport } from "@/src/types/report";

type CardListProps = {
  items: any[];
  deleteReport: (id: number) => void;
};

const CardsList = ({ items, deleteReport }: CardListProps) => {
  return (
    <Flex gap={8} mt={8} flexDirection="column">
      {items.map((item) => (
        <ReportCard
          key={item.publication.id}
          publication={item?.publication}
          reports={item?.reports}
        />
      ))}
    </Flex>
  );
};

export default CardsList;
