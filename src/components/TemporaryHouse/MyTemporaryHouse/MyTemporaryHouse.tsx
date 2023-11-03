import { ITemporaryHouse } from "@/src/types/temporaryHouse";
import { Box, Container } from "@chakra-ui/react";
import MyTemporaryHouserInfo from "./MyTemporaryHouserInfo";
import MyTemporaryHouseForm from "./MyTemporaryHouseForm";

export type MyTemporaryHouseProps = {
  temporaryHouse?: ITemporaryHouse;
};

export default function MyTemporaryHouse({
  temporaryHouse,
}: MyTemporaryHouseProps) {
  return (
    <Container>
      {temporaryHouse ? (
        <MyTemporaryHouserInfo temporaryHouse={temporaryHouse} />
      ) : (
        <MyTemporaryHouseForm />
      )}
    </Container>
  );
}
