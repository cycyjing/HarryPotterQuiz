import React from "react";
import { Layout, Typography, Tooltip } from "antd";

const { Footer } = Layout;
const { Link } = Typography;

const HarryPotterFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Designed and Created by{"  "}
      <Tooltip title="LinkedIn">
        <Link href="https://www.linkedin.com/in/ycui-520/" target="_blank">
          Yang Cui
        </Link>
      </Tooltip>
      ,  use React, Redux and Ant Design on Sep 24, 2020.
    </Footer>
  );
};

export default HarryPotterFooter;
