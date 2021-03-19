import React, { useState, useEffect } from "react";
import { Container, Table, Button, ButtonGroup, Card } from "react-bootstrap";
import AddQueues from "../AddQueue";
import EditQueues from "../EditQueues";
import PropTypes from "prop-types";
import { getQueues } from "../api/DbRequests";
import useApi from "../hooks/UseApi";

function QueuesTable({ queueList }) {
  const [queues, setQueues] = useState([]);
  const [show, setShow] = useState(false);

  const queueListApi = useApi(getQueues);

  const displayQueues = async () => {
    const queues = await queueListApi.request();
    await setQueues(queues.data);
  };

  useEffect(() => {
    displayQueues();
  }, []);

  console.log(queueList);
  return (
    <div style={styles.tableContainerr}>
      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <h4>Queues List</h4>
          <ButtonGroup>
            <Button
              size="sm"
              className="btn btn-primary"
              onClick={() => setShow(true)}
            >
              Add
            </Button>
            <AddQueues show={show} onHide={() => setShow(false)} />
          </ButtonGroup>
        </div>

        <Container fluid>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th width="20%">Queue</th>
                <th width="20%">PlateNumber</th>
                <th width="20%">edit</th>
                <th width="20%">delete</th>
              </tr>
            </thead>
            <tbody>
              {queues?.map((queue) => (
                <tr key={queues.indexOf(queue)}>
                  <td>{queues.indexOf(queue)}</td>
                  <td>{queue}</td>

                  <td>
                    <ButtonGroup>
                      <Button
                        size="sm"
                        className="btn btn-primary"
                        onClick={() => setShow(true)}
                      >
                        Edit
                      </Button>
                      <EditQueues show={show} onHide={() => setShow(false)} />
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

QueuesTable.defaultProps = {
  queueList: [],
};

QueuesTable.propTypes = {
  queueList: PropTypes.array.isRequired,
};

export default QueuesTable;
