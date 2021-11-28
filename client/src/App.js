import React, { useEffect } from "react";

import "./App.css";
import AppNavbar from "./components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./redux/store";
import ShoppingModal from "./components/ShoppingModal";
import { loadUser } from "./redux/actions/authAction";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div  >
       <AppNavbar />
        <ShoppingModal />
        <ShoppingList /> 
      </div>
    </Provider>
  );
}

export default App;
