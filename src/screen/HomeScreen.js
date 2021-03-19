import { useEffect } from "react";
import { db_auth } from "../api/Db";

function HomeScreen() {
  //const [chargers, setChargers] = useState([]);
 // const [vehicles, setVehicles] = useState([]);
  //const [queues, setQueues] = useState([]);
  //const [users, setUsers] = useState([]);

  //const chargerListApi = useApi(getChargers);
 // const vehicleListApi = useApi(getVehicles);
  //const queueListApi = useApi(getQueues);
 // const userListApi = useApi(getUsers);

  /*const displayChargers = async () => {
    const chargers = await chargerListApi.request();
    await setChargers(chargers.data);
  };*/

  /*const displayVehicles = async () => {
    const vehicles = await vehicleListApi.request();
    console.log("myy vv", vehicles);
    await setVehicles(vehicles.data);
  };*/

 /* const displayQueues = async () => {
    const queues = await queueListApi.request();
    await setQueues(queues.data);
  };*/

  /*const displayUsers = async () => {
    const users = await userListApi.request();
    await setUsers(users.data);
  };*/

  /*const userChecker = async () => {
    const user = await db_auth.currentUser;
    return user;
  };*/

 const login = async () => {
  
    /*await displayChargers();*/
    /*await displayVehicles();*/
    /*await displayQueues();
    /*await displayUsers();*/
    /*await console.log(chargers);*/
  };
 
  return (
    <div></div>
    /*
<Router>
    <div>
      <NavBar />
    <div className="App">
      <Switch>
        <Route exact path="/vehos" render={props => <ChargersTable {...props} chargerList={chargers} />}/>
        <Route exact path="/vehicles" render={props => <VehicleTable {...props} vehicleList={VehicleTable} />}/>
        <Route exact path="/queues" render={props => <QueuesTable {...props} queueList={queues} />}/>
        <Route exact path="/users" render={props => <UsersTable {...props} userList={users} />}/>
      </Switch>
    </div>
    </div>
</Router>
*/
  )
}

export default HomeScreen;
