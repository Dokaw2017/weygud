import React, { useState, useEffect } from "react";
import AddVehicles from "../AddVehicle";
import EditVehicles from "../EditVehicles";
import { getVehicles } from "../api/DbRequests";
import useApi from "../hooks/UseApi";
import { Container, Table, Button, ButtonGroup, Card } from "react-bootstrap";
import PropTypes from "prop-types";

function VehicleTable() {
  const [show, setShow] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  const vehicleListApi = useApi(getVehicles);

  const displayVehicles = async () => {
    const vehicles = await vehicleListApi.request();
    console.log("myy vv", vehicles);
    await setVehicles(vehicles.data);
  };
  console.log("mmmmjjjj", vehicles);

  useEffect(() => {
    displayVehicles();
  }, []);

  return (
    <div style={styles.tableContainerr}>
      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <h4>Vehicles List</h4>
          <ButtonGroup>
            <Button
              size="sm"
              className="btn btn-primary"
              onClick={() => setShow(true)}
            >
              Add
            </Button>
            <AddVehicles show={show} onHide={() => setShow(false)} />
          </ButtonGroup>
        </div>

        <Container fluid>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th width="10%">#</th>
                <th width="10%">Name</th>
                <th width="10%">batteryState</th>
                <th width="10%">chargerStatus</th>
                <th width="10%">EvCharger</th>
                <th width="10%">Connected</th>
                <th width="10%">plateNumber</th>
                <th width="10%">position</th>
                <th width="10%">edit</th>
                <th width="10%">delete</th>
              </tr>
            </thead>
            <tbody>
              {vehicles?.map((vehicle) => (
                <tr key={vehicle.vehicleId}>
                  <td>{vehicles.indexOf(vehicle)}</td>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.batteryState}</td>
                  <td>{vehicle.chargingStatus}</td>
                  <td>{vehicle.chargerName}</td>
                  <td>{vehicle.connected.toString()}</td>
                  <td>{vehicle.plateNumber}</td>
                  <td>{vehicle.position}</td>
                  <td>
                    <ButtonGroup>
                      <Button
                        size="sm"
                        className="btn btn-primary"
                        onClick={() => setShow(true)}
                      >
                        Edit
                      </Button>
                      <EditVehicles show={show} onHide={() => setShow(false)} />
                    </ButtonGroup>
                  </td>
                  <td>
                    <ButtonGroup>
                      <Button size="sm" className="btn btn-danger">
                        Delete
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}

const styles = {
  tableContainerr: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  tableContainer: {
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "30px",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "20px",
    color: 'black',
    padding: "1%",
  },
};

VehicleTable.defaultProps = {
  chargerList: [],
};

VehicleTable.propTypes = {
  chargerList: PropTypes.array.isRequired,
};

export default VehicleTable;
