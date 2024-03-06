import { Flex } from "@chakra-ui/react";
import React from "react";
import ReportCard from "./ReportCard/ReportCard";

type CardListProps = {
  items: any[];
  deleteReport: (id: number) => void;
  deletePublication: (id: number) => void;
};

const CardsList = ({
  items,
  deleteReport,
  deletePublication,
}: CardListProps) => {
  return (
    <Flex gap={8} mt={8} flexDirection="column">
      {items.map((item) => (
        <ReportCard
          key={item.publication.id}
          publication={item?.publication}
          reports={item?.reports}
          handleDeleteReport={deleteReport}
          handleDeletePublication={deletePublication}
        />
      ))}
    </Flex>
  );
};

export default CardsList;
