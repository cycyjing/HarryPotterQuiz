import React from "react";
import { useSelector } from "react-redux";
import { Form, Radio, Row, Col } from "antd";
import QUESTIONCONFIG from "../questionConfig";
import { useQs2Action } from "../store/actions";
import QuestionTitleTemplate from "../components/questionTitleTemplate";
import QuestionOptionsTemplate from "../components/questionOptionsTemplate";

const Qs2 = () => {
  const value = useSelector((state) => state.answerReducer.qs2);
  const dispatch = useQs2Action();

  return (
    <Form.Item
      name="radio-group"
      label={
        <QuestionTitleTemplate questionText={QUESTIONCONFIG.qs2.question} />
      }
    >
      <Radio.Group>
        <Row>
          {QUESTIONCONFIG.qs2.selection.map((item) => {
            return (
              <Col span={22} key={item}>
                <Radio
                  onChange={(e) => {
                    dispatch(e.target.value);
                  }}
                  defaultChecked={item === value}
                  value={item}
                >
                  <QuestionOptionsTemplate questionText={item} />
                </Radio>
              </Col>
            );
          })}
        </Row>
      </Radio.Group>
    </Form.Item>
  );
};
export default Qs2;
