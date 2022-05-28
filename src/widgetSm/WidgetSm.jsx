import "./widgetSm.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [services, setServices] = useState({});
  useEffect(() => {
    const fetchServices = async () => {
      const res = await axios.get(
        "http://localhost:3003/api/admin/services/getAllServices"
      );
      setServices(res.data);
    };
    fetchServices();
  }, [services]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Services</span>
      <ul className="widgetSmList">
        {services.length > 0 &&
          services.map((e) => (
            <li className="widgetSmListItem">
              <img
                src={e.picture}
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUserTitle">{e.name}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
