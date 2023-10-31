import { AddIcon } from "@chakra-ui/icons";
import { Tabs, Flex, TabList, Tab, Container, Box } from "@chakra-ui/react";
import CustomIconButton from "../../CustomIconButton";
import CardsList from "../CardsList";
import CreateReportModal from "../CreateReport/CreateReportModal";
import FilterBar from "../FilterBar";
import React from "react";

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const myItems = [{ id: 7 }, { id: 8 }, { id: 9 }];

const TabIndexes = {
  ALL: 0,
  MY_REPORTS: 1,
} as const;

export default function ReportContainer() {
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [allReports, setAllReports] = React.useState(items);
  const [myReports, setMyReports] = React.useState(myItems);

  return (
    <Container my={8}>
      <Tabs size="lg" onChange={(index) => setTabIndex(index)}>
        <Flex justify="space-between" alignItems="center">
          <TabList>
            <Tab>Todos</Tab>
            <Tab w="10rem">Meus Reportes</Tab>
          </TabList>
          <FilterBar />
        </Flex>
        <CardsList
          items={tabIndex === TabIndexes.ALL ? allReports : myReports}
          owner={tabIndex === TabIndexes.MY_REPORTS}
        />
      </Tabs>
      <Box position="fixed" bottom={16} right={32}>
        <CustomIconButton
          w="60px"
          h="60px"
          size="lg"
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
  );
}
