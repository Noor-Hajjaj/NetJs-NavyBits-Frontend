import "./NgoScreen.css";
import { useNavigate } from "react-router-dom";

export default function NgoScreen() {
  const navigate = useNavigate();
  const Button = ({ type }) => {
    return <button className={"widgetSmButtonNgo " + type}>{type}</button>;
  };
  return (
    <div className="widgetNgo">
      <span className="widgetSmTitleNgo">NGO request</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItemNgo">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgNgo"
          />
          <div className="widgetSmUserNgo">
            <span className="widgetSmUserTitleNgo" onClick={() => navigate("/ngodetails")}>NGO Name</span>
          </div>
          <div><Button type="Accept" /></div>
          <div><Button type="Reject" /></div>
        </li>
        <li className="widgetSmListItemNgo">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgNgo"
          />
          <div className="widgetSmUserNgo">
            <span className="widgetSmUserTitleNgo">NGO Name</span>
          </div>
          <div><Button type="Accept" /></div>
          <div><Button type="Reject" /></div>
        </li>
        <li className="widgetSmListItemNgo">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgNgo"
          />
          <div className="widgetSmUserNgo">
            <span className="widgetSmUserTitleNgo">NGO Name</span>
          </div>
          <div><Button type="Accept" /></div>
          <div><Button type="Reject" /></div>
        </li>

        <li className="widgetSmListItemNgo">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgNgo"
          />
          <div className="widgetSmUserNgo">
            <span className="widgetSmUserTitleNgo">NGO Name</span>
          </div>
          <div><Button type="Accept" /></div>
          <div><Button type="Reject" /></div>
        </li>
        <li className="widgetSmListItemNgo">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgNgo"
          />
          <div className="widgetSmUserNgo">
            <span className="widgetSmUserTitleNgo">NGO Name</span>
          </div>
          <div><Button type="Accept" /></div>
          <div><Button type="Reject" /></div>
        </li>
        <li className="widgetSmListItemNgo">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgNgo"
          />
          <div className="widgetSmUserNgo">
            <span className="widgetSmUserTitleNgo">NGO Name</span>
          </div>
          <div><Button type="Accept" /></div>
          <div><Button type="Reject" /></div>
        </li>
      </ul>
    </div>
  );
}