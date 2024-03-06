import { AddIcon } from "@chakra-ui/icons";
import {
  Tabs,
  Flex,
  TabList,
  Tab,
  Container,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import CustomIconButton from "../../CustomIconButton";
import CardsList from "../CardsList";
import CreatePublicationModal from "../CreatePublication/CreatePublicationModal";
import FilterBar from "../FilterBar";
import React from "react";
import { useAxios } from "../../../../hooks/useAxios";
import { useSession } from "next-auth/react";
import { IPublication } from "@/src/types/publication";

const TabIndexes = {
  ALL: 0,
  MY_PublicationS: 1,
} as const;

export function PublicationContainer() {
  const axios = useAxios();
  const session = useSession();

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [allPublications, setAllPublications] = React.useState<IPublication[]>(
    []
  );
  const [myPublications, setMyPublications] = React.useState<IPublication[]>(
    []
  );
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const getPublicationsRequest = async () => {
      try {
        const response = await axios.get("/publications");
        const myPublications = await axios.get(
          `/publications/${session.data?.user.id}`
        );
        setAllPublications(response.data);
        setMyPublications(myPublications.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (session.status === "authenticated") getPublicationsRequest();
  }, [session]);

  const deletePublication = (id: number) => {
    setAllPublications((prev) => {
      return prev.filter((Publication) => Publication.id !== id);
    });
    setMyPublications((prev) => {
      return prev.filter((Publication) => Publication.id !== id);
    });
  };

  const editPublication = (Publication: IPublication, id: number) => {
    setAllPublications((prev) => {
      const updatedResponse = prev.map((item) => {
        if (item.id === id) return Publication;
        return item;
      });
      return updatedResponse;
    });
    setMyPublications((prev) => {
      const updatedResponse = prev.map((item) => {
        if (item.id === id) return Publication;
        return item;
      });
      return updatedResponse;
    });
  };

  return (
    <Container my={8} p={isMobile ? 2 : undefined}>
      <Tabs size="lg" onChange={(index) => setTabIndex(index)}>
        <Flex justify="space-between" alignItems="center">
          <TabList>
            <Tab>Todos</Tab>
            <Tab w="14rem">Minhas Publicações</Tab>
          </TabList>
          <FilterBar value={search} onChange={setSearch} />
        </Flex>
        <CardsList
          items={tabIndex === TabIndexes.ALL ? allPublications : myPublications}
          owner={tabIndex === TabIndexes.MY_PublicationS}
          deletePublication={deletePublication}
          editPublication={editPublication}
        />
      </Tabs>
      <Box position="fixed" bottom={16} right={32}>
        <CustomIconButton
          w="60px"
          h="60px"
          size="lg"
          borderRadius="50%"
          aria-label="create Publication"
          onClick={() => setOpenCreateModal(true)}
          icon={<AddIcon color="white" />}
        />
      </Box>
      <CreatePublicationModal
        isOpen={openCreateModal}
        handleClose={() => setOpenCreateModal(false)}
        handleCreate={(newPublication: any) => {
          setAllPublications((prev) => [...prev, newPublication]);
          setMyPublications((prev) => [...prev, newPublication]);
        }}
      />
    </Container>
  );
}
