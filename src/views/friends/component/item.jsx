import React from "react";
import "./scss/item.scss";
export const FriendList = (props) => {
  return (
    <div className={"friend-list"}>
      <div className={"avatar"}>
        <img src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"} alt="" />
      </div>
      <div className={"nickname"}>我是晚霞</div>
    </div>
  );
};
