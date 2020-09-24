import React from "react";
import { useSelector } from "react-redux";
import { Form, Slider } from "antd";
import QUESTIONCONFIG from "../questionConfig";
import { useQs5Action } from "../store/actions";
import QuestionTitleTemplate from "../components/questionTitleTemplate";

const Qs5 = () => {
  const value = useSelector((state) => state.answerReducer.qs5);
  const dispatch = useQs5Action();
  return (
    <Form.Item
      name="slider"
      label={
        <QuestionTitleTemplate questionText={QUESTIONCONFIG.qs5.question} />
      }
    >
      <Slider
        onChange={(value) => {
          dispatch(value);
        }}
        defaultValue={value}
        value={value}
        min={1}
        max={20}
      />
    </Form.Item>
  );
};
export default Qs5;
