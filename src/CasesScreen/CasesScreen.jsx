import "./CasesScreen.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CaseScreen() {
  const navigate = useNavigate();

  const [caseRequests, setcaseRequests] = useState({});
  useEffect(() => {
    const fetchCaseRequests = async () => {
      const res = await axios.get("http://localhost:3003/api/admin/dashboard/getCases");
      setcaseRequests(res.data);
    };
    fetchCaseRequests();
  },[caseRequests]);

  return ( 
         <div className="widgetLgCases">
      <span className="Cases">Cases requests</span>
      <ul className="widgetSmList">
        {caseRequests.length > 0 && caseRequests.map((e) => (
          <li className="widgetSmListItemCases">
          <img
            src={e.caseOwner.picture}
            alt=""
            className="widgetSmImgCases"
          />
          <div className="widgetSmUserCases">
            <span className="widgetSmUserTitleCases">{e.caseName}</span>
          </div>
          <div>
            <button className="widgetSmButtonCases" onClick={() => navigate(`/caselist/${e._id}`)}>Details</button>
          </div>
        </li>
        )) }
      </ul>
    </div>
  );
}