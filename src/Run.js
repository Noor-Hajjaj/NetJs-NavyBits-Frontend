import './App.css';
import Topbar from './topbar/Topbar';
import Home from './home/Home';
import FeaturedInfo from './featuredIcon/feature';
import HomeNgo from './homeforngocases/homeNgoCases';

function Run() {
  return (
    <div className="App">
     <Topbar />
     <FeaturedInfo />
     <Home />
     <HomeNgo/>
    </div>
  );
}

export default Run;