import { FRIENDS_LIST, FRIEND_APPLY_LIST, APPLY_LIST_OR_DETAILS } from "./types";
const initState = {
  friendsList: [],
  applyListOrDetails: false,
};

function reducer(state = initState, action) {
  let obj = {
    [FRIENDS_LIST]() {
      return {
        ...state,
        [FRIENDS_LIST]: action.value,
      };
    },
    [FRIEND_APPLY_LIST]() {
      return {
        ...state,
        [FRIEND_APPLY_LIST]: action.value,
      };
    },
    [APPLY_LIST_OR_DETAILS]() {
      return {
        ...state,
        [APPLY_LIST_OR_DETAILS]: action.value,
      };
    },
  };
  return (obj[action.type] && obj[action.type]()) || state;
}

export default reducer;
