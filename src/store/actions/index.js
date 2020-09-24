import * as actionType from "./actionType";
import { useDispatch } from "react-redux";
export const useQs1Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        qs1Answer: text,
      },
      type: actionType.CHANGED_QS1,
    });
};

export const useQs2Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        qs2Answer: text,
      },
      type: actionType.CHANGED_QS2,
    });
};

export const useQs3Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        qs3Answer: text,
      },
      type: actionType.CHANGED_QS3,
    });
};

export const useQs4Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        qs4Answer: text,
      },
      type: actionType.CHANGED_QS4,
    });
};

export const useQs5Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        qs5Answer: text,
      },
      type: actionType.CHANGED_QS5,
    });
};

export const useConfirmQsAction = () => {
  const dispatch = useDispatch();
  return () =>
    dispatch({
      type: actionType.CONFIRM_QS,
    });
};
