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
  const [loading, setLoading] = React.useState(false);

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

  const deletePublication = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`/publications/${id}`);
      setAllReports((prev) => {
        const updatedReports = prev.filter(
          (instance) => instance.publication.id !== id
        );
        return updatedReports;
      });
    } catch (error) {
      console.log(error);
      window.alert("Erro no sistema, tente novamente mais tarde!");
    }
  };

  const deleteReport = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`/reports/${id}`);
      setAllReports((prev) => {
        const updatedReports = prev.filter(
          (instance) => instance.publication.id !== id
        );
        return updatedReports;
      });
    } catch (error) {
      console.log(error);
      window.alert("Erro no sistema, tente novamente mais tarde!");
    }
  };

  return (
    <Container my={8} p={isMobile ? 2 : undefined}>
      <CardsList
        items={allReports}
        deleteReport={deleteReport}
        deletePublication={deletePublication}
      />
    </Container>
  );
}
