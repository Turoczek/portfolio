import React from "react";
import { NextPage } from "next";
import {
  AboutMeFirstPart,
  AboutMeSecondPart,
  AboutMeThirdPart,
  PageRow,
} from "@/components";

const Main: NextPage = () => {
  return (
    <>
      <PageRow>
        <AboutMeFirstPart />
      </PageRow>
      <PageRow inverted>
        <AboutMeSecondPart />
      </PageRow>
      <PageRow>
        <AboutMeThirdPart />
      </PageRow>
    </>
  );
};

export default Main;
