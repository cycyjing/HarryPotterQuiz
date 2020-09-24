import React from "react";
import { useSelector } from "react-redux";
import { Form, Checkbox, Row, Col } from "antd";
import QUESTIONCONFIG from "../questionConfig";
import { useQs4Action } from "../store/actions";
import QuestionTitleTemplate from "../components/questionTitleTemplate";
import QuestionOptionsTemplate from "../components/questionOptionsTemplate";

const Qs4 = () => {
  const value = useSelector((state) => state.answerReducer.qs4);
  const dispatch = useQs4Action();
  return (
    <Form.Item
      name="checkbox-group"
      label={
        <QuestionTitleTemplate questionText={QUESTIONCONFIG.qs4.question} />
      }
    >
      <Checkbox.Group
        defaultValue={value}
        value={value}
        onChange={(checkValue) => {
          dispatch(checkValue);
        }}
      >
        <Row>
          {QUESTIONCONFIG.qs4.selection.map((item) => {
            return (
              <Col span={8} key={item}>
                <Checkbox value={item} style={{ lineHeight: "2rem" }}>
                  <QuestionOptionsTemplate questionText={item}/>
                </Checkbox>
              </Col>
            );
          })}
        </Row>
      </Checkbox.Group>
    </Form.Item>
  );
};
export default Qs4;
