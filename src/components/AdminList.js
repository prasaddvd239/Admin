import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteAdminAction,
  getAllAdminAction,
  getByIdAdminAction,
  updateRefAdmin,
} from "../redux/AdminReducer";
import { AdminModal } from "./AdminModal";

export function AdminList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllAdminAction());
  }, []);

  const deleteAdmin = (item, index) => {
    dispatch(deleteAdminAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);
  };

  const updateAdmin = (item) => {
    // we are doing this so that we can access this objec in the form page
    dispatch(updateRefAdmin(item));

    // form page
    history.push("/create-admin");
  };

  const getAdminById = (item) => {
    dispatch(getByIdAdminAction(item));
  };

  return (
    <>
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-primary">Admin List</h3>

          {successOperation && (
            <div className="alert alert-primary">Operation Success</div>
          )}

          <table className="table">
            <thead className="alert alert-primary">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">USERNAME</th>
                <th scope="col">PASSWORD</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...state.admin.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.userName}</td>
                  <td>{"********"}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => getAdminById(item)}
                      value="Detail"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      onClick={() => updateAdmin(item)}
                      value="Edit"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deleteAdmin(item, index)}
                      className="btn btn-link text-primary"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-2 d-none d-md-block"></div>
      </div>

      {/** ADMIN MODAL */}
      <AdminModal />
    </>
  );
}
