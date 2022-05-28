import React from "react";
import "./Messages.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState({});
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(
        "http://localhost:3003/api/admin/dashboard/getMessages"
      );
      setMessages(res.data);
    };
    fetchMessages();
  }, [messages]);

  return (
    <div className="message_0">
      <div className="topbar_9">
        <div className="topbarWrapper_9">
          <div className="topLeft_9">
            <span className="logo_9">Messages</span>
          </div>
        </div>
      </div>
      {messages.length > 0 &&
        messages.map((e) => (
          <div className="allboxes">
            <div className="box1">
              <div className="imagesm">
                <img
                  src={e.messageOwner.picture}
                  alt=""
                  className="imagesmall"
                />
                <div className="usernamep">
                  <p>{e.messageOwner.username} </p>
                </div>
              </div>
              <hr />
              <div className="paragraph">
                <p className="p">{e.message}</p>
              </div>
            </div>
            <div className="box2">
              <div className="imagesm">
                <img
                  src={e.messageOwner.picture}
                  alt=""
                  className="imagesmall"
                />
                <div className="usernamep">
                  <p>{e.messageOwner.username} </p>
                </div>
              </div>
              <hr />
              <div className="paragraph">
                <p className="p">Loving the app!!</p>
              </div>
            </div>
          </div>
        ))}
      {/* <div className="allboxes">
        <div className="box2">
          <div className="imagesm">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="imagesmall"
            />
            <div className="usernamep">
              <p>UserName </p>
            </div>
          </div>
          <hr />
          <div className="paragraph">
            <p className="p">
              hellokjsbgljakgbaljgbrgjlsjbfgehjrkjfafhadslkjfgdkfddnfblkabka
              <br />
              sadkjfbahjljkdfn;skn;
            </p>
          </div>
        </div>
        </div> */}
      {/* <div className="box3">
          <div className="imagesm">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="imagesmall"
            />
            <div className="usernamep">
              <p>UserName </p>
            </div>
          </div>
          <hr />
          <div className="paragraph">
            <p className="p">
              hellokjsbgljakgbaljgbrgjlsjbfgehjrkjfafhadslkjfgdkfddnfblkabka
              <br />
              sadkjfbahjljkdfn;skn;
            </p>
          </div>
        </div> */}

      {/* <div className="allboxes">
        <div className="box1">
          <div className="imagesm">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="imagesmall"
            />
            <div className="usernamep">
              <p>UserName </p>
            </div>
          </div>
          <hr />
          <div className="paragraph">
            <p className="p">
              hellokjsbgljakgbaljgbrgjlsjbfgehjrkjfafhadslkjfgdkfddnfblkabka
              <br />
              sadkjfbahjljkdfn;skn;
            </p>
          </div>
        </div>
        <div className="box2">
          <div className="imagesm">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="imagesmall"
            />
            <div className="usernamep">
              <p>UserName </p>
            </div>
          </div>
          <hr />
          <div className="paragraph">
            <p className="p">
              hellokjsbgljakgbaljgbrgjlsjbfgehjrkjfafhadslkjfgdkfddnfblkabka
              <br />
              sadkjfbahjljkdfn;skn;
            </p>
          </div>
        </div>
        <div className="box3">
          <div className="imagesm">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="imagesmall"
            />
            <div className="usernamep">
              <p>UserName </p>
            </div>
          </div>
          <hr />
          <div className="paragraph">
            <p className="p">
              hellokjsbgljakgbaljgbrgjlsjbfgehjrkjfafhadslkjfgdkfddnfblkabka
              <br />
              sadkjfbahjljkdfn;skn;
            </p>
          </div>
        </div> 
      </div>*/}
    </div>
  );
};

export default Messages;
