import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import {
  Container,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const ITEMS_SHOPPING = [
  {
    id: uuidv4(),
    name: "Eggs",
  },
  {
    id: uuidv4(),
    name: "Eggs",
  },
  {
    id: uuidv4(),
    name: "Eggs",
  },
  {
    id: uuidv4(),
    name: "Eggs",
  },
  {
    id: uuidv4(),
    name: "Eggs",
  },
];

function ShoppingList() {
  const [itemShopping, setItemShopping] = useState(ITEMS_SHOPPING);
  console.log(itemShopping);
  return (
    <div>
      <Container>
        <Button
          className="mb-2 rounded"
          onClick={() => {
            const name = prompt("Insert Item :");
            setItemShopping([...itemShopping, { name, id: uuidv4() }]);
          }}
        >
          Add Item
        </Button>
        <ListGroup >
          <TransitionGroup className="shopping-list rounded">
            {itemShopping.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem >
                  <Button
                    className="remove-btn"
                    color="danger"
                    size={"sm"}
                    onClick={() => {
                      setItemShopping(
                        itemShopping.filter((item) => item.id !== id)
                      );
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
}

export default ShoppingList;

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
