"use client";

import NavBar from "@/src/components/Navigation/NavBar";
import { ReportContainer } from "@/src/components/general/Reports/Tabs/ReportContainer";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <ReportContainer />
    </>
  );
};

export default page;
