import React from "react";
import { Typography } from "antd";
const { Title } = Typography;
const QuestionTitleTemplate = ({ questionText }) => {
  return (
    <Title
      level={5}
      style={{
        fontFamily: "fantasy",
        color: "transparent",
        WebkitBackgroundClip: "text",
        backgroundImage:
          "linear-gradient(-225deg, #231557 0%, #44107A 29%, #44107A 67%, #FF1361 100%)",
      }}
    >
      {questionText}
    </Title>
  );
};

export default QuestionTitleTemplate;
