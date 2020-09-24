import React from "react";
import { useSelector } from "react-redux";
import { Form, Select } from "antd";
import QUESTIONCONFIG from "../questionConfig";
import { useQs3Action } from "../store/actions";
import QuestionTitleTemplate from "../components/questionTitleTemplate";
import QuestionOptionsTemplate from "../components/questionOptionsTemplate";

const Qs3 = () => {
  const value = useSelector((state) => state.answerReducer.qs3);
  const dispatch = useQs3Action();
  return (
    <Form.Item
      label={
        <QuestionTitleTemplate questionText={QUESTIONCONFIG.qs3.question} />
      }
    >
      <Select
        placeholder="Select your answer"
        onChange={(value) => {
          dispatch(value);
        }}
        defaultValue={value}
      >
        {QUESTIONCONFIG.qs3.selection.map((item) => {
          return (
            <Select.Option key={item} value={item}>
              <QuestionOptionsTemplate questionText={item} />
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};
export default Qs3;
