
import "bootstrap/dist/css/bootstrap.min.css";
import LoginScreen from "./screen/LoginScreen";
import UsersTable from "./components/UsersTable";
import { AuthProvider } from "./hooks/AuthContext";
import SignUp from './SignUp'
import LogOut from './Logout'
import PrivateRoute from "./PrivateRoute";
import ChargersTable from "./components/ChargersTable";
import VehicleTable from "./components/VehicleTable";
import QueuesTable from "./components/QueueTable";
import chargers from './screen/HomeScreen'
import queues from './screen/HomeScreen'
import users from './screen/HomeScreen'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <div className="APP">
    <Router>
    <AuthProvider>   
    
       <Switch>
         
           <PrivateRoute exact path="/" render={props => <VehicleTable {...props} vehicleList={VehicleTable} />} />
           <Route path="/login" component={LoginScreen} />
           <Route path="/signup" component={SignUp} />
           <Route path="/logout" component={LogOut} />
           <Route exact path="/vehos" render={props => <ChargersTable {...props} chargerList={chargers} />}/>
           <Route exact path="/vehicles" render={props => <VehicleTable {...props} vehicleList={VehicleTable} />}/>
           <Route exact path="/queues" render={props => <QueuesTable {...props} queueList={queues} />}/>
           <Route exact path="/users" render={props => <UsersTable {...props} userList={users} />}/>
        </Switch>
       
    </AuthProvider>
    </Router>
    </div>
   
  );
}

export default App;



