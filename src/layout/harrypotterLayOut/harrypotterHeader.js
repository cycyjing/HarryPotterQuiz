import React from "react";
import { Layout } from "antd";
const { Header } = Layout;

const HarryHeader = () => {
  return (
    <Header style={{ minHeight: "20vh", backgroundColor: "#F0F2F5" }}>
      <h1
        style={{
          margin: "1rem auto",
          fontFamily: "fantasy",
          color: "transparent",
          WebkitBackgroundClip: "text",
          textAlign: "center",
          fontSize: "4rem",
          backgroundImage:
            "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
        }}
      >
        Harry Potter
      </h1>
    </Header>
  );
};

export default HarryHeader;
