import { Flex } from "@chakra-ui/react";
import React from "react";
import PublicationCard from "./PublicationCard/PublicationCard";
import { IPublication } from "@/src/types/publication";

type CardListProps = {
  items: any[];
  owner?: boolean;
  deletePublication: (id: number) => void;
  editPublication: (publication: IPublication, id: number) => void;
};

const CardsList = ({
  items,
  deletePublication,
  editPublication,
  owner = false,
}: CardListProps) => {
  return (
    <Flex gap={8} mt={8} flexDirection="column">
      {items.map((item) => (
        <PublicationCard
          key={item.id}
          id={item.id}
          owner={owner}
          content={item.content}
          photos={item?.photos}
          editPublication={editPublication}
          petId={item?.pet?.id}
          createdAt={item.createdAt}
          title={item.title}
          deletePublication={deletePublication}
          userEmail={item.user.email}
          userName={item.user.name}
          userPhone={item.user?.phone}
        />
      ))}
    </Flex>
  );
};

export default CardsList;
