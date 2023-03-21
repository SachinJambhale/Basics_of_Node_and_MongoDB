// npm init -y

// npm i redux

// withoutToolKit

const { createStore } = require("redux");

const initialstate = { count: 0 };

const counterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "increment": {
      // mutable
      // state.count = state.count+1
      // immutable
      return { ...state, count: state.count + 1 };
    }
    case "decrement": {
      return { ...state, count: state.count - 1 };
    }
    case "reset": {
      return initialstate;
    }
    case "incrementByAmount": {
      return { ...state, count: state.count + parseFloat(action.payload) };
    }
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log("Count: ", store.getState().count);
});

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "incrementByAmount", payload: 25 });
