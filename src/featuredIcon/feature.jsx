import "./feature.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedInfo() {
  const navigate = useNavigate();

  const [statistics, setStatistics] = useState({});
  useEffect(() => {
    const fetchStatistics = async () => {
      const res = await axios.get("http://localhost:3003/api/admin/dashboard/getStatistics");
      setStatistics(res.data);
    };
    fetchStatistics();
  },[statistics]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Number Of Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{statistics.usercount}</span>
          <span className="featuredMoneyRate">
            -11 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Number Of NGOS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{statistics.ngocount}</span>
          <span className="featuredMoneyRate">
            -1 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Number Of Cases</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{statistics.casescount}</span>
          <span className="featuredMoneyRate">
            +2 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem" onClick={() => navigate("/messages")}>
        <span className="featuredTitle" >Messages</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{statistics.messagescount}</span>
          <span className="featuredMoneyRate">
            +2 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}