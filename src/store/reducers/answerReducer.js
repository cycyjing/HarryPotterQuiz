import * as actionType from "../actions/actionType";
import QUESTIONCONFIG from "../../questionConfig";
const initState = {
  qs1Answer: "",
  qs2Answer: "",
  qs3Answer: "",
  qs4Answer: [],
  qs5Answer: "",
  number: 0,
};
const checkanswer = (state) => {
  let number = 0;
  for (let key in QUESTIONCONFIG) {
    if (
      typeof QUESTIONCONFIG[key]["answer"] === "string" ||
      typeof QUESTIONCONFIG[key]["answer"] === "number"
    ) {
      if (QUESTIONCONFIG[key]["answer"] === state[`${key}Answer`] + "") {
        number += 1;
      }
    } else {
      if (
        QUESTIONCONFIG[key]["answer"].sort().join() ===
        state[`${key}Answer`].sort().join()
      ) {
        number += 1;
      }
    }
  }
  return number;
};
export default (state = initState, { payload, type }) => {
  switch (type) {
    case actionType.CHANGED_QS1:
    case actionType.CHANGED_QS2:
    case actionType.CHANGED_QS3:
    case actionType.CHANGED_QS4:
    case actionType.CHANGED_QS5:
      return Object.assign(state, payload);
    case actionType.CONFIRM_QS:
      let confirm_state = Object.assign(state, payload);
      let number = checkanswer(confirm_state);
      return Object.assign(confirm_state, { number });
    default:
      return state;
  }
};
