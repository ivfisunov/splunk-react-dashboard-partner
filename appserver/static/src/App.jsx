import React from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import "./app.css";

export const AppContext = React.createContext();

class App extends React.Component {
  constructor({ props }) {
    super();
    this.state = {
      text: props.text,
      SearchManager: props.SearchManager,
      mvc: props.mvc
    };
    // console.log(props.text);
  }

  componentDidMount() {
  }

  render() {

    // дефолтный стейт для Redux store 
    const initialState = {
      data: 'initial data'
    };

    const store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );

    const { text } = this.state;

    return (
      <>
        <AppContext.Provider value={this.state}>
          <Provider store={store}>
            <h1>HELLO!!!</h1>
            <h1>{text}</h1>
          </Provider>
        </AppContext.Provider>
      </>
    );
  }
}

export default App;
