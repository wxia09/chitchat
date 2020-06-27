import { http } from "../../utils/http";
import { LINKS_LIST } from "./types";

export const getLinksList = (dispatch) => {
  http("message/links")
    .then((res) => {
      dispatch({ type: LINKS_LIST, value: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
