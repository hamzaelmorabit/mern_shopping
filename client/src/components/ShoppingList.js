import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import {
  Container,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { getItems, deleteItems } from "../redux/actions/itemAction";
import { connect } from "react-redux";

const ShoppingList = ({ item, getItems, deleteItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);

  const { items: itemShopping } = item;
  return (
    <div>
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list rounded">
            {itemShopping?.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size={"sm"}
                    onClick={() => {
                      deleteItems(id);
                    }}
                  >
                    &times;
                  </Button>
                  <div style={{ display: "inline-block" }}> {name}</div>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => ({
  item: state.item,
});
export default connect(mapStateToProps, { getItems, deleteItems })(
  ShoppingList
);

//    <button
//         onClick={() => {
//           const name = prompt("Insert Item :");
//           setItemShopping([...itemShopping, { name, id: uuidv4() }]);
//         }}
//       >
//         Insert
//       </button>
//       <ul className={`items`}>
//         {itemShopping.map(({ name, id }) => (
//           <li>
//             <button
//               onClick={() => {
//                 setItemShopping(itemShopping.filter((item) => item.id !== id));
//               }}
//             >
//               Delete
//             </button>
//             <span key={id}>{name}</span>
//           </li>
//         ))}
//       </ul>
