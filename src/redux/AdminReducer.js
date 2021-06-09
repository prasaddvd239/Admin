const initState = {
  list: [],

  refadm: {},
};

// ACTION TYPES
const ADMIN_CREATE = "ADMIN_CREATE";
const ADMIN_UPDATE = "ADMIN_UPDATE";
const ADMIN_DELETE = "ADMIN_DELETE";
const ADMIN_GET_ALL = "ADMIN_GET_ALL";
const ADMIN_GET_BY_ID = "ADMIN_GET_BY_ID";

const REF_ADMIN = "REF_ADMIN";

// ACTIONS :: COmponents are interacting with this action
export function createAdminAction(payload) {
  // return { type: EMPLOYEE_CREATE, payload: payload };

  // MAKE SURE redux-thunk is installed.
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/admin/addadmin";
    const requestBody = { ...payload, age: 30 };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: ADMIN_CREATE, payload: payload });
  };
}

export function updateAdminAction(payload) {
  // return { type: EMPLOYEE_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/admin/changepassword/${payload.id}`;
    const requestBody = { ...payload, age: 25 };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefAdmin({}));
  };
}

export function deleteAdminAction(payload) {
  // return { type: EMPLOYEE_DELETE, payload: payload };

  // redux thunk
  return async (dispatch) => {
    const url = `http://localhost:8080/api/admin/removeadmin/${payload.id}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllAdminAction());
  };
}

export function getAllAdminAction(payload) {
  // return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/admin/getalladmins";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const adminList = await response.json();
    console.log(adminList);

    // Update the UI
    dispatch({ type: ADMIN_GET_ALL, payload: adminList });
  };
}

export function getByIdAdminAction(payload) {
  // return { type: EMPLOYEE_GET_BY_ID, payload: payload };
  return async (dispatch) => {
    const url = `http://localhost:8080/api/admin/getadmin/${payload.id}`;
    const response = await fetch(url);
    const adminObj = await response.json();

    // this wil update the refemp
    dispatch(updateRefAdmin(adminObj));
  };
}

export function updateRefAdmin(payload) {
  return { type: REF_ADMIN, payload: payload };
}

// REDUCER LOGIC
export function AdminReducer(state = initState, action) {
  switch (action.type) {
    case ADMIN_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case ADMIN_UPDATE:
      // TODO
      return state;
    case ADMIN_DELETE:
      // TODO
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };
    case ADMIN_GET_ALL:
      // Update the list
      return { ...state, list: action.payload };
    case ADMIN_GET_BY_ID:
      // TODO
      return state;

    case REF_ADMIN:
      return { ...state, refadm: action.payload };

    default:
      return state;
  }
}
