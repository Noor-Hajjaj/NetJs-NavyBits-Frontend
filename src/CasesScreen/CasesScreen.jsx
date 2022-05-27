import "./CasesScreen.css";
import { useNavigate } from "react-router-dom";

export default function CaseScreen() {
  const navigate = useNavigate();
  // const Button = ({ type }) => {
  //   return <button className={"widgetSmButtonCases " + type} >{type}</button>;
  // };

  return ( 
         <div className="widgetLgCases">
      <span className="Cases">Cases request</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItemCases">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgCases"
          />
          <div className="widgetSmUserCases">
            <span className="widgetSmUserTitleCases">Case Name</span>
          </div>
          {/* <div><Button type="Details" /></div> */}
          <div>
            <button className="widgetSmButtonCases" onClick={() => navigate("/caselist")}>Details</button>
          </div>
          {/* <div><Button type="details" /></div> */}
        </li>
        <li className="widgetSmListItemCases">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgCases"
          />
          <div className="widgetSmUserCases">
            <span className="widgetSmUserTitleCases">Case Name</span>
          </div>
          <div>
            <button className="widgetSmButtonCases" onClick={() => navigate("/caselist")}>Details</button>
          </div>
          {/* <div><Button type="details" /></div> */}
        </li>
        <li className="widgetSmListItemCases">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgCases"
          />
          <div className="widgetSmUserCases">
            <span className="widgetSmUserTitleCases">Case Name</span>
          </div>
          <div>
            <button className="widgetSmButtonCases" onClick={() => navigate("/caselist")}>Details</button>
          </div>
          {/* <div><Button type="details" /></div> */}
        </li>
        <li className="widgetSmListItemCases">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgCases"
          />
          <div className="widgetSmUserCases">
            <span className="widgetSmUserTitleCases">Case Name</span>
          </div>
          <div>
            <button className="widgetSmButtonCases" onClick={() => navigate("/caselist")}>Details</button>
          </div>
          {/* <div><Button type="details" /></div> */}
        </li>
        <li className="widgetSmListItemCases">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgCases"
          />
          <div className="widgetSmUserCases">
            <span className="widgetSmUserTitleCases">Case Name</span>
          </div>
          <div>
            <button className="widgetSmButtonCases" onClick={() => navigate("/caselist")}>Details</button>
          </div>
          {/* <div><Button type="details" /></div> */}
        </li>
        <li className="widgetSmListItemCases">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImgCases"
          />
          <div className="widgetSmUserCases">
            <span className="widgetSmUserTitleCases">Case Name</span>
          </div>
          <div>
            <button className="widgetSmButtonCases" onClick={() => navigate("/caselist")}>Details</button>
          </div>
        </li>
      </ul>
    </div>
  );
}