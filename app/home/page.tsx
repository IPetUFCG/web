"use client";
import NavBar from "@/src/components/Navigation/NavBar";
import { PublicationContainer } from "@/src/components/general/Reports/Tabs/PublicationContainer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <PublicationContainer />
    </>
  );
}
