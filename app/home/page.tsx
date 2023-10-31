"use client";
import NavBar from "@/src/components/Navigation/NavBar";
import ReportContainer from "@/src/components/general/Reports/Tabs/ReportContainer";

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

export default function HomePage() {
  return (
    <>
      <NavBar items={links} />
      <ReportContainer />
    </>
  );
}
