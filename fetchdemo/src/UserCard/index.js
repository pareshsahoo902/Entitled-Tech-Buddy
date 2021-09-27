import React from "react";
import "./UserCard.css";

const UserCard = ({ cardDetails }) => {
  return (
    <div className="container">
      <img src={cardDetails?.avatar} width="140" height="140" />
      <label className="nameText">
        Name: {cardDetails?.first_name + " " + cardDetails?.last_name}
      </label>
      <label className="emailText">Email: {cardDetails?.email}</label>
    </div>
  );
};

export default UserCard;
