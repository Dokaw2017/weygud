import React, { useState } from "react";
import UsersList from "./components/UsersTable";
import { Modal, Button, Card, Form } from "react-bootstrap";

const AddUsers = (props) => {
  /*const initialUserState = {
    email: "",
    type: "",
    phoneNumber: "",
    userName: "",
    avatar: "",
    company: "",
    expoToken: "",
    userId: "",
  };

  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    let data = {
      email: user.email,
      type: user.type,
      phoneNumber: user.phoneNumber,
      userName: user.userName,
      avatar: user.avatar,
      expoToken: user.expoToken,
      userId: user.userId,
    };

    UsersService.create(data)
      .then(() => {
        setSubmitted(true);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };
  
  onSubmit={saveUser}*/

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Body>
            <Form >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  //value={user.email}
                  required
                  //onChange={handleInputChange}
                  name="email"
                />
              </Form.Group>
              <Form.Group id="type">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  //value={user.type}
                  required
                  //onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group id="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  //value={user.phoneNumber}
                  required
                  //onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group id="userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  //value={user.userName}
                  required
                  //onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group id="avatar">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  type="text"
                  name="avatar"
                  //value={user.avatar}
                  required
                  //onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group id="expoToken">
                <Form.Label>currentUserName</Form.Label>
                <Form.Control
                  type="text"
                  name="expoToken"
                  //value={user.expoToken}
                  required
                  //onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group id="userId">
                <Form.Label>User Id</Form.Label>
                <Form.Control
                  type="text"
                  name="userId"
                  //value={user.userId}
                  required
                  //onChange={handleInputChange}
                />
              </Form.Group>

              <Button className="w-100" type="submit">
                Save
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    
  );
};

export default AddUsers;
