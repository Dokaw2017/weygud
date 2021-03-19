import React, { useState, useEffect } from "react";
import { Container, Table, Button, ButtonGroup, Card } from "react-bootstrap";
import AddVehos from "../AddVehos";
import EditVeho from "../EditVehos";
import PropTypes from "prop-types";
import { getChargers } from "../api/DbRequests";
import useApi from "../hooks/UseApi";

function ChargersTable({ chargerList }) {
  const [chargers, setChargers] = useState([]);
  const [show, setShow] = useState(false);

  const chargerListApi = useApi(getChargers);

  const displayChargers = async () => {
    const chargers = await chargerListApi.request();
    await setChargers(chargers.data);
  };

  useEffect(() => {
    displayChargers();
  }, []);

  return (
    <div style={styles.tableContainerr}>
      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <h4>Chargers List</h4>
          <ButtonGroup>
            <Button
              size="sm"
              className="btn btn-primary"
              onClick={() => setShow(true)}
            >
              Add
            </Button>
            <AddVehos show={show} onHide={() => setShow(false)} />
          </ButtonGroup>
        </div>

        <Container fluid>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th width="20%">#</th>
                <th width="20%">Name</th>
                <th width="20%">Status</th>
                <th width="20%">Type</th>
                <th width="20%">Vehicle</th>
                <th width="20%">edit</th>
                <th width="20%">delete</th>
              </tr>
            </thead>

            <tbody>
              {chargers?.map((charger) => (
                <tr key={charger.id}>
                  <td>{chargers.indexOf(charger)}</td>
                  <td>{charger.name}</td>
                  <td>{charger.status}</td>
                  <td>{charger.type}</td>
                  <td>{charger.chargingVehicleName}</td>
                  <td>
                    <ButtonGroup>
                      <Button
                        size="sm"
                        className="btn btn-primary"
                        onClick={() => setShow(true)}
                      >
                        Edit
                      </Button>
                      <EditVeho show={show} onHide={() => setShow(false)} />
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
    color: "black",
    padding: "1%",
  },
};

ChargersTable.defaultProps = {
  chargerList: [],
};

ChargersTable.propTypes = {
  chargerList: PropTypes.array.isRequired,
};

export default ChargersTable;
