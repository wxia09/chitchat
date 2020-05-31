import { FRIENDS_LIST, FRIENDS_APPLY_LIST, APPLY_LIST_OR_DETAILS, CURRENT_SEL_FRIEND_ID } from "./types";
const initState = {
  friendsList: [],
  friendsApplyList: [],
  applyListOrDetails: false,
  currentFriendId: -1,
};

function reducer(state = initState, action) {
  let obj = {
    [FRIENDS_LIST]() {
      return {
        ...state,
        [FRIENDS_LIST]: action.value,
      };
    },
    [FRIENDS_APPLY_LIST]() {
      return {
        ...state,
        [FRIENDS_APPLY_LIST]: action.value,
      };
    },
    [APPLY_LIST_OR_DETAILS]() {
      return {
        ...state,
        [APPLY_LIST_OR_DETAILS]: action.value,
      };
    },
    [CURRENT_SEL_FRIEND_ID]() {
      return {
        ...state,
        [CURRENT_SEL_FRIEND_ID]: action.value,
      };
    },
  };
  return (obj[action.type] && obj[action.type]()) || state;
}

export default reducer;
