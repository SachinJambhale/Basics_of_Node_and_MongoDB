// npm init -y
// npm i redux

const redux = require("redux");

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment": {
      return { count: state.count + (action.payload ? action.payload : 1) };
    }

    case "counter/decrement": {
      return { count: state.count - (action.payload ? action.payload : 1) };
    }

    case "reset": {
      return initialState;
    }
  }
};

const store = redux.createStore(counterReducer);

const inc = (amount) => {
  return {
    type: "counter/increment",
    payload: amount,
  };
};
const dec = (amount) => {
  return {
    type: "counter/decrement",
    payload: amount,
  };
};
const reset = () => {
  return {
    type: "counter/reset",
  };
};

// subscribe to store

store.subscribe(() => {
  console.log(store.getState().count);
});

store.dispatch(inc()); //1
store.dispatch(inc(10)); //11
store.dispatch(inc(5)); //16
store.dispatch(dec(2)); //14
