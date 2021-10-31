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
  Container,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";
import { addItem } from "./../redux/actions/itemAction";

const ShoppingModal = ({ addItem }) => {
  const handleToggle = () => {
    setModal(!modal);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const itemAdded = {
      id: uuidv4(),
      name,
    };
    addItem(itemAdded);
    setModal(!modal);
  };

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  return (
    <div>
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          // block
          onClick={() => setModal(true)}
        >
          Add Item
        </Button>
        <Modal isOpen={modal} toggle={handleToggle}>
          <ModalHeader toggle={handleToggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleOnSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  onChange={handleChangeName}
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
  item: state.item, //There in no need in this place
});

export default connect(mapStateToProps, { addItem })(ShoppingModal);
