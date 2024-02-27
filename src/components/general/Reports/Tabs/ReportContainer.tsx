import { Container, useMediaQuery } from "@chakra-ui/react";
import CardsList from "../CardsList";
import FilterBar from "../FilterBar";
import React from "react";
import { useAxios } from "../../../../hooks/useAxios";
import { useSession } from "next-auth/react";
import { GetAllReportResponse } from "@/src/types/report";

export function ReportContainer() {
  const axios = useAxios();
  const session = useSession();

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const [allReports, setAllReports] = React.useState<GetAllReportResponse[]>(
    []
  );
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const getPublicationsRequest = async () => {
      try {
        const response = await axios.get("/reports");
        console.log({ data: response.data });
        setAllReports(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (session.status === "authenticated") getPublicationsRequest();
  }, [session]);

  const deleteReport = (id: number) => {};

  return (
    <Container my={8} p={isMobile ? 2 : undefined}>
      <CardsList items={allReports} deleteReport={deleteReport} />
    </Container>
  );
}
