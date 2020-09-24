import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "antd";
const ConfirmAnswer = ({ visible, setVisiable }) => {
  const value = useSelector((state) => state.answerReducer.number);
  return (
    <Modal
      title="Finished"
      visible={visible}
      onCancel={() => {
        setVisiable(false);
      }}
      onOk={() => {
        setVisiable(false);
      }}
    >
      you have answered {value}/5 questions correctly!
    </Modal>
  );
};
export default ConfirmAnswer;
