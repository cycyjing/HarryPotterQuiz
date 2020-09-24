import React from "react";
import { Layout } from "antd";

import HarrypotterHeader from "./harrypotterHeader";
import HarrypotterFooter from "./harrypotterFooter";
import HarrypotterContainer from "./harrypotterContainer";

const HarryPotterLayOut = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HarrypotterHeader></HarrypotterHeader>
      <HarrypotterContainer />
      <HarrypotterFooter></HarrypotterFooter>
    </Layout>
  );
};

export default HarryPotterLayOut;
