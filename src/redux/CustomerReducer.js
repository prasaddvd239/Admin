const initState = {
  list: [],

  refemp: {},
};

// ACTION TYPES
const CUSTOMER_CREATE = "CUSTOMER_CREATE";
const CUSTOMER_UPDATE = "CUSTOMER_UPDATE";
const CUSTOMER_DELETE = "CUSTOMER_DELETE";
const CUSTOMER_GET_ALL = "CUSTOMER_GET_ALL";
const CUSTOMER_GET_BY_ID = "CUSTOMER_GET_BY_ID";

const REF_CUSTOMER = "REF_CUSTOMER";

// ACTIONS :: COmponents are interacting with this action
export function createCustomerAction(payload) {
  // return { type: CUSTOMER_CREATE, payload: payload };

  // MAKE SURE redux-thunk is installed.
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/customer/create";
    const requestBody = { ...payload };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: CUSTOMER_CREATE, payload: payload });
  };
}

export function updateCustomerAction(payload) {
  // return { type: CUSTOMER_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/customer/update/${payload.id}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefCustomer({}));
  };
}

export function deleteCustomerAction(payload) {
  // return { type: CUSTOMER_DELETE, payload: payload };

  // redux thunk
  return async (dispatch) => {
    const url = `http://localhost:8080/api/customer/delete/${payload.id}`;
    await fetch(url, { method: "DELETE" });

    dispatch(getAllCustomerAction());
  };
}

export function getAllCustomerAction(payload) {
  return async (dispatch) => {
    const url = "http://localhost:8080/api/customer/findall";

    const response = await fetch(url);
    const customerList = await response.json();
    console.log(customerList);

    dispatch({ type: CUSTOMER_GET_ALL, payload: customerList });
  };
}

export function getByIdCustomerAction(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/customer/find/${payload.id}`;
    const response = await fetch(url);
    const customerObj = await response.json();

    dispatch(updateRefCustomer(customerObj));
  };
}

export function updateRefCustomer(payload) {
  return { type: REF_CUSTOMER, payload: payload };
}

// REDUCER LOGIC
export function CustomerReducer(state = initState, action) {
  switch (action.type) {
    case CUSTOMER_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case CUSTOMER_UPDATE:
      // TODO
      return state;
    case CUSTOMER_DELETE:
      // TODO
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };
    case CUSTOMER_GET_ALL:
      // Update the list
      return { ...state, list: action.payload };
    case CUSTOMER_GET_BY_ID:
      // TODO
      return state;

    case REF_CUSTOMER:
      return { ...state, refemp: action.payload };

    default:
      return state;
  }
}
