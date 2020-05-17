import React from "react";
import "./scss/item.scss";
export const FriendList = (props) => {
  let { item = {} } = props;
  return (
    <div className={"friend-list flex align-center"}>
      <div className={"avatar-name flex align-center"}>
        <div className={"avatar"}>
          <img src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"} alt="" />
        </div>
        <div className={"nickname"}>{item.name || "晚霞"}</div>
      </div>
      {props.children}
    </div>
  );
};
