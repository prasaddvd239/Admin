import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAdminAction, updateAdminAction } from "../redux/AdminReducer";

export function AdminUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);

  const [userName, setUserName] = useState(state.admin.refadm.userName);
  const [password, setPassword] = useState(state.admin.refadm.password);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const addAdmin = (e) => {
    e.preventDefault();
    console.log(userName, password);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createAdminAction({
        userName,
        password,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setUserName("");
    setPassword("");
  };

  const updateAdmin = () => {
    dispatch(
      updateAdminAction({
        id: state.admin.refadm.id,
        userName,
        password,
      })
    );

    // reset the form
    setUserName("");
    setPassword("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-primary">
          {state.admin.refadm.id ? "Update Admin" : "Create Admin"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            value={userName}
            onChange={(e) => updateUserName(e)}
            className="form-control"
            placeholder="Enter Username"
          />
        </div>

        <div className="mb-1">
          <input
            type="password"
            value={password}
            onChange={(e) => updatePassword(e)}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <div className="mb-1">
          {state.admin.refadm.id ? (
            <input
              type="button"
              className="btn btn-primary w-100"
              value="Update Admin"
              onClick={() => updateAdmin()}
            />
          ) : (
            <input
              type="button"
              className="btn btn-primary w-100"
              value="Add Admin"
              onClick={(e) => addAdmin(e)}
            />
          )}
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
