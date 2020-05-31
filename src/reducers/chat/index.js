import { CURRENT_SLIDER_STATUS } from "./types";
let initState = {
  currentSliderStatus: 1,
};

function reducer(state = initState, action) {
  let obj = { ...state };
  const actionFn = {
    [CURRENT_SLIDER_STATUS]() {
      return {
        ...obj,
        [CURRENT_SLIDER_STATUS]: action.value,
      };
    },
  };
  return (actionFn[action.type] && actionFn[action.type]()) || obj;
}

export default reducer;
