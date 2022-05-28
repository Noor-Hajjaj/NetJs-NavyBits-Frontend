import "./NgoScreen.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NgoScreen() {
  const navigate = useNavigate();
  // const Button = ({ type , id}) => {
  //   return <button className={"widgetSmButtonNgo " + type}>{type}</button>;
  // };

  const [ngoRequests, setngoRequests] = useState({});
  useEffect(() => {
    const fetchNGORequests = async () => {
      const res = await axios.get("http://localhost:3003/api/admin/dashboard/getNGOS");
      setngoRequests(res.data);
    };
    fetchNGORequests();
  },[ngoRequests]);


  return (
    <div className="widgetNgo">
      <span className="widgetSmTitleNgo">NGO requests</span>
      <ul className="widgetSmList">
        {ngoRequests.length > 0 && ngoRequests.map((e) => (
          <li className="widgetSmListItemNgo">
          <img
            src="https://res.cloudinary.com/caretopia/image/upload/v1646154186/caretopia/user_axcws7.png"
            alt=""
            className="widgetSmImgNgo"
          />
          <div className="widgetSmUserNgo">
            <span className="widgetSmUserTitleNgo" onClick={() => navigate(`/ngodetails/${e._id}`)}>{e.username}</span>
          </div>
          <div className="deatilsm"><button className="widgetLgButtonNgo" onClick={() => navigate(`/ngodetails/${e._id}`)}>Details</button></div>
          
        </li>
        ))}
      </ul>
    </div>
  );
}