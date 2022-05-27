import WidgetLg from "../widgetLg/WidgetLg";
import WidgetSm from "../widgetSm/WidgetSm";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
