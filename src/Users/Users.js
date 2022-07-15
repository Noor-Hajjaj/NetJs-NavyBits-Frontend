import React from "react";
import "./Users.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie'

const Messages = () => {
  const token = Cookies.get('accessToken');
  const [users, setUsers] = useState({});
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(
        "http://localhost:3333/users/getAllUsers", {
          headers: {
            Authorization: 'Bearer ' + token
          }
         }
      );
      setUsers(res.data);
    };
    fetchMessages();
  }, [token, users]);

  return (
    <div className="message_0">
      <div className="topbar_9">
        <div className="topbarWrapper_9">
          <div className="topLeft_9">
            <span className="logo_9">Users</span>
          </div>
        </div>
      </div>
      {users.length > 0 &&
        users.map((e) => (
          <div className="allboxes">
            <div className="box1">
              {/* <div className="imagesm">
                <img
                  src={e.messageOwner.picture}
                  alt=""
                  className="imagesmall"
                />
                <div className="usernamep">
                  <p>{e.messageOwner.username} </p>
                </div>
              </div>
              <hr /> */}
              <div className="paragraph">
                <p className="p">{e.email}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Messages;
