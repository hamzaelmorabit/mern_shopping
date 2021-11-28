import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Container,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { register } from "../../redux/actions/authAction";
import { connect } from "react-redux";

const RegisterModal = ({ register }) => {
  const handleToggle = () => {
    setModal(!modal);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userRegister = {
      name,
      email,
      password,
    };
    register(userRegister);
    console.log(userRegister);
    // addItem(userRegiter);
    // setModal(!modal);
  };

  const [modal, setModal] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div>
      <Container>
        {/* <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          // block
          onClick={() => setModal(true)}
        ></Button> */}
        <NavLink
          href="#"
          color="dark"
          style={{ marginBottom: "2rem" }}
          // block
          onClick={() => setModal(true)}
        >
          Regiter
        </NavLink>
        <Modal isOpen={modal} toggle={handleToggle}>
          <ModalHeader toggle={handleToggle}>Add User</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleOnSubmit}>
              <FormGroup>
                <Label for="item">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                />

                <Label for="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>{" "}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register })(RegisterModal);
