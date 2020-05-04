const state = {
  userInfo: {},
  token: window.localStorage.getItem("token"),
};
function reducer(s = state, action) {
  let obj = { ...s };
  switch (action.type) {
    case "token":
      obj = {
        ...obj,
        token: action.value,
      };
      break;
    case "userInfo":
      obj = {
        ...obj,
        userInfo: action.value,
      };
      break;
    default:
      break;
  }
  return obj;
}

export default reducer;
