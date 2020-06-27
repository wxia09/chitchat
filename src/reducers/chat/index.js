import { CURRENT_SLIDER_STATUS, LINKS_LIST } from "./types";
let initState = {
  currentSliderStatus: 1,
  linksList: [],
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
    [LINKS_LIST]() {
      return {
        ...obj,
        [LINKS_LIST]: action.value,
      };
    },
  };
  return (actionFn[action.type] && actionFn[action.type]()) || obj;
}

export default reducer;
