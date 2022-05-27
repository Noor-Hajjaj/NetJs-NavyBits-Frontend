import NgoScreen from "../Ngo/NgoScreen";
import "./homeNgoCase.css";
import CaseScreen from "../CasesScreen/CasesScreen";

export default function HomeNgo() {
  return (
    <div className="homeNgo">
      <div className="homeWidgetsNgo">
        <NgoScreen />
        <CaseScreen/>
      </div>
    </div>
  );
}
