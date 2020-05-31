import { http } from "../../utils/http";
import { FRIENDS_APPLY_LIST } from "./types";

export const setFriendsApplyList = (() => {
  return (dispatch) => {
    http("friend/apply/list")
      .then((res) => {
        dispatch({ type: FRIENDS_APPLY_LIST, value: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
})();
