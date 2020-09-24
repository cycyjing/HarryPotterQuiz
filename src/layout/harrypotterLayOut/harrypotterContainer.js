import React, { useState } from "react";
import { Form, Button, Layout } from "antd";
import { useConfirmQsAction } from "../../store/actions";
import Qs1 from "../../addons/questionOne";
import Qs2 from "../../addons/questionTwo";
import Qs3 from "../../addons/questionThree";
import Qs4 from "../../addons/questionFour";
import Qs5 from "../../addons/questionFive";
import ConfirmAnswer from "../../addons/confirmModel";
const { Content } = Layout;

const HarryContainer = () => {
  const [visiable, setVisiable] = useState(false);
  const dispatch = useConfirmQsAction();
  return (
    <Content>
      <ConfirmAnswer visible={visiable} setVisiable={setVisiable} />
      <Form
        labelCol={{
          lg: { span: 12, offset: 6 },
          md: { span: 16, offset: 4 },
          sm: { span: 20, offset: 2 },
          xs: { span: 22, offset: 1 },
        }}
        wrapperCol={{
          lg: { span: 12, offset: 6 },
          md: { span: 16, offset: 4 },
          sm: { span: 20, offset: 2 },
          xs: { span: 22, offset: 1 },
        }}
        layout="vertical"
        size="Default"
      >
        <Qs1 />
        <Qs2 />
        <Qs3 />
        <Qs4 />
        <Qs5 />
        <Form.Item>
          <Button
            onClick={() => {
              dispatch();
              setVisiable(true);
            }}
            type="primary"
            htmlType="submit"
            style={{
              backgroundImage:
                "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
            }}
          >
            <span style={{ fontFamily: "fantasy" }}>Submit</span>
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default HarryContainer;
