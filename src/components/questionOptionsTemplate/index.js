import React from "react";
import { Typography } from "antd";
const { Text } = Typography;
const QuestionOptionsTemplate = ({ questionText }) => {
  return (
    <Text
      style={{
        fontFamily: "fantasy",
      }}
    >
      {questionText}
    </Text>
  );
};

export default QuestionOptionsTemplate;
