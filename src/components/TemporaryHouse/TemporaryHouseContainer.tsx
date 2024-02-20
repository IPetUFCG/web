import {
  Container,
  Flex,
  Tab,
  TabList,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react";
import TemporaryHouseList from "./TemporaryHouseList";
import React from "react";
import MyTemporaryHouse from "./MyTemporaryHouse/MyTemporaryHouse";
import { useAxios } from "@/src/hooks/useAxios";
import { ITemporaryHouse } from "@/src/types/temporaryHouse";
import { useSession } from "next-auth/react";

export default function TemporaryHouseContainer() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const axios = useAxios();
  const session = useSession();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const [temporaryHouses, setTemporaryHouses] = React.useState<
    ITemporaryHouse[]
  >([]);
  const [userTemporaryHouse, setUserTemporaryHouse] =
    React.useState<ITemporaryHouse>();

  const options = [
    {
      content: <TemporaryHouseList temporaryHouses={temporaryHouses} />,
    },
    {
      content: (
        <MyTemporaryHouse
          addTemporaryHouse={(newData) => {
            setUserTemporaryHouse(newData);
            setTemporaryHouses((prev) => [...prev, newData]);
          }}
          changeTemporaryHouse={(updatedData) => {
            setUserTemporaryHouse(updatedData);
            setTemporaryHouses((prev) => {
              return prev.map((tempHouse) => {
                if (tempHouse.id === updatedData.id) return updatedData;
                return tempHouse;
              });
            });
          }}
          deleteTemporaryHouse={(id) => {
            setUserTemporaryHouse(undefined);
            setTemporaryHouses((prev) =>
              prev.filter((house) => house.id !== id)
            );
          }}
          temporaryHouse={userTemporaryHouse}
        />
      ),
    },
  ];

  React.useEffect(() => {
    const getTemporaryHouses = async () => {
      try {
        const { data } = await axios.get<ITemporaryHouse[]>("/temporary-house");
        const filteredTempororaryHouse = data.find(
          (house) => house.ownerId === Number(session?.data?.user?.id)
        );
        setTemporaryHouses(data);
        if (filteredTempororaryHouse)
          setUserTemporaryHouse(filteredTempororaryHouse);
      } catch (error) {
        console.log(error);
      }
    };

    if (!temporaryHouses.length && session.status === "authenticated")
      getTemporaryHouses();
  }, [session]);

  return (
    <Container my={8} p={isMobile ? 2 : undefined}>
      <Tabs size="lg" onChange={(index) => setTabIndex(index)}>
        <Flex justify="space-between" alignItems="center">
          <TabList>
            <Tab>Todos</Tab>
            <Tab>Meu Lar Temporario</Tab>
          </TabList>
        </Flex>

        {options[tabIndex].content}
      </Tabs>
    </Container>
  );
}
