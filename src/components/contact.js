import React from "react";
import "./contact.css";

function Contact(props) {
  const { name, avatar, online } = props;

  return (<div class="Contact">
    <img className="avatar"
      src={avatar} alt="" />
    <div>
      <h4 className="name">{name}</h4>
      <p className="status">{online ? "Online" : "Offline"}</p>
    </div>
  </div>
  );
}
export default Contact;