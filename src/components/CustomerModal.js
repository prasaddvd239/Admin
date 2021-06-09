import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRefCustomer } from "../redux/CustomerReducer";

export function CustomerModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefCustomer({}));
  };

  return (
    <Modal show={state.customer.refemp.id} onHide={() => updateRefObj()}>
      <Modal.Header closeButton>
        <Modal.Title>Hello, {state.customer.refemp.userName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            First Name - {state.customer.refemp.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            Last Name - {state.customer.refemp.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            User Name - {state.customer.refemp.userName}
          </ListGroup.Item>
          <ListGroup.Item>Password - {"*********"}</ListGroup.Item>
          <ListGroup.Item>Email - {"******@gmail.com"}</ListGroup.Item>
          <ListGroup.Item>
            Mobile - {state.customer.refemp.mobile}
          </ListGroup.Item>
          <ListGroup.Item>
            Salary - {state.customer.refemp.salary}
          </ListGroup.Item>
          <ListGroup.Item>
            Address - {state.customer.refemp.address}
          </ListGroup.Item>
          <ListGroup.Item>City - {state.customer.refemp.city}</ListGroup.Item>
          <ListGroup.Item>
            State - {state.customer.refemp.stateName}
          </ListGroup.Item>
          <ListGroup.Item>
            PinCode - {state.customer.refemp.pinCode}
          </ListGroup.Item>
          <ListGroup.Item>Age - {state.customer.refemp.age}</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => updateRefObj()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
