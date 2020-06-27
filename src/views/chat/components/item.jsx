import React from "react";
import "./scss/item.scss";
export const Item = (props) => {
  let { item = {}, nameKey = "name", badge = false, badgeKey = "badge", active = false } = props;
  return (
    <div
      className={(active ? "active-item " : "") + "friend-list flex align-center hover"}
      onClick={props.onClick || (() => {})}
    >
      <div className={"avatar-name flex align-center"}>
        <div className={"avatar"}>
          <img src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"} alt="" />
          {badge ? <div className="badge text-center">{item[badgeKey]}</div> : []}
        </div>
        <div className={"nickname"}>{item[nameKey]}</div>
      </div>
      {props.children}
    </div>
  );
};

export const Title = (props) => {
  return (
    <>
      <div className="title">{props.title}</div>
      {props.children}
    </>
  );
};
