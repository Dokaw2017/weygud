import React, { useState, useEffect } from "react";
import { Container, Table, Button, ButtonGroup, Card } from "react-bootstrap";
import AddUsers from "../AddUser";
import EditUser from "../EditUsers";
import PropTypes from "prop-types";
import { getUsers } from "../api/DbRequests";
import { db_auth } from "../api/Db";
import useApi from "../hooks/UseApi";

function UsersTable({ userList }) {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const userListApi = useApi(getUsers);

  const displayUsers = async () => {
    const users = await userListApi.request();
    await setUsers(users.data);
  };

  useEffect(() => {
    displayUsers();
  }, []);

  return (
    <div style={styles.tableContainerr}>
      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <h4>Users List</h4>
          <ButtonGroup>
            <Button
              size="sm"
              className="btn btn-primary"
              onClick={() => setShow(true)}
            >
              Add
            </Button>
            <AddUsers show={show} onHide={() => setShow(false)} />
          </ButtonGroup>
        </div>

        <Container fluid>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th width="20%">#</th>
                <th width="20%">Name</th>
                <th width="20%">Email</th>
                <th width="20%">Brach</th>
                <th width="20%">Phone</th>
                <th width="20%">edit</th>
                <th width="20%">delete</th>
              </tr>
            </thead>

            <tbody>
              {users?.map((user) => (
                <tr key={user.userId}>
                  <td>{users.indexOf(user)}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.company}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <ButtonGroup>
                      <Button
                        size="sm"
                        className="btn btn-primary"
                        onClick={() => setShow(true)}
                      >
                        Edit
                      </Button>
                      <EditUser show={show} onHide={() => setShow(false)} />
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

UsersTable.defaultProps = {
  userList: [],
};

UsersTable.propTypes = {
  userList: PropTypes.array.isRequired,
};

export default UsersTable;
