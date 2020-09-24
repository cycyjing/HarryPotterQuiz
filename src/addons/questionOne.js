import React from "react";
import { useSelector } from "react-redux";
import { Form, Input } from "antd";
import QUESTIONCONFIG from "../questionConfig";
import { useQs1Action } from "../store/actions";
import QuestionTitleTemplate from "../components/questionTitleTemplate";

const Qs1 = () => {
  const value = useSelector((state) => state.answerReducer.qs1);
  const dispatch = useQs1Action();
  return (
    <Form.Item
      label={
        <QuestionTitleTemplate questionText={QUESTIONCONFIG.qs1.question} />
      }
    >
      <Input
        placeholder="Type your answer"
        value={value}
        onChange={(e) => {
          return dispatch(e.target.value);
        }}
      />
    </Form.Item>
  );
};
export default Qs1;
