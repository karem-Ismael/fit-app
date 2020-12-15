import Mav from "./Component/nav"
import PersonalInfo from "./Component/PersonalInfo"
import Signup from "./Component/Signup"
import Footer from "./Component/Footer"
import Goals from './Component/Goals'
import Search from './Component/Search'
import AddStore from './Component/AddStore'
import AddResturant from './Component/AddResturant'
import  AddTrainer from './Component/AddTrainer'
import Resturants from './Component/Resturants'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { withRouter } from "react-router";
function App(props) {
  
  return (
    
    <div className="App" style={{overflow:'hidden'}}>
        <Mav />
        <Switch>
        <Route exact path="/">
          <PersonalInfo />
          </Route>
          <Route path="/signup">
              <Signup />
          </Route>
          <Route path="/Goals">
              <Goals />
          </Route>
          <Route path="/Search">
              <Search />
          </Route>
          <Route path="/addstore">
            <AddStore />
          </Route>
          <Route path="/addresturant">
            <AddResturant />
          </Route>
          <Route path="/addtrainer">
            < AddTrainer />
          </Route>
          <Route path="/resturants">
            <Resturants />
          </Route>
         
         
        </Switch>
        <Footer />
    </div>
  );
}

export default withRouter(App);
