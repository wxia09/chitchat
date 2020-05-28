import { FRIENDS_LIST } from "./types";
const initState = {
  friendsList: [],
};

function reducer(state = initState, action) {
  let obj = {
    [FRIENDS_LIST]() {
      return {
        ...state,
        [FRIENDS_LIST]: action.value,
      };
    },
  };
  return (obj[action.type] && obj[action.type]()) || state;
}

export default reducer;
