import React from "react";
import "./scss/item.scss";
export const Item = (props) => {
  let { item = {} } = props;
  return (
    <div className={"friend-list flex align-center hover"}>
      <div className={"avatar-name flex align-center"}>
        <div className={"avatar"}>
          <img src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"} alt="" />
        </div>
        <div className={"nickname"}>{item.name}</div>
      </div>
      {props.children}
    </div>
  );
};

export const Title = (props) => {
  return (
    <>
      <div className="title">这个是标题</div>
      {props.children}
    </>
  );
};
