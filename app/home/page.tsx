"use client";
import NavBar from "@/src/components/Navigation/NavBar";
import CardsList from "@/src/components/general/Reports/CardsList";
import CreateReportModal from "@/src/components/general/Reports/CreateReport/CreateReportModal";
import FilterBar from "@/src/components/general/Reports/FilterBar";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Container, IconButton } from "@chakra-ui/react";
import React from "react";

const links = [
  {
    label: "Reportes",
    link: "/home",
  },
  {
    label: "Pets",
    link: "/pets",
  },
];

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export default function HomePage() {
  const [openCreateModal, setOpenCreateModal] = React.useState(false);

  return (
    <>
      <NavBar items={links} />
      <Container my={8}>
        <FilterBar />
        <CardsList items={items} />
        <Box position="fixed" bottom={16} right={32}>
          <IconButton
            w="60px"
            h="60px"
            size="lg"
            colorScheme="messenger"
            borderRadius="50%"
            aria-label="create report"
            onClick={() => setOpenCreateModal(true)}
            icon={<AddIcon color="white" />}
          />
        </Box>
        <CreateReportModal
          isOpen={openCreateModal}
          handleClose={() => setOpenCreateModal(false)}
        />
      </Container>
    </>
  );
}
