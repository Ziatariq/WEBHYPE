import React from "react";
import { Link } from "react-router-dom";
import { TabPane, Col, Row } from "reactstrap";
import classnames from "classnames";

const SignUp = (props) => {
  const { activeTab, toggle, logintoggle } = props;

  return (
    <TabPane tabId="2">
      <form>
        <Row>
          <Col md="6">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
              ></input>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label>Last Name </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
              ></input>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <div className="form-group">
              <label>Email address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
              ></input>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label>Password </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Password"
              ></input>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Confirm Password"
              ></input>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label>Phone Number </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
              ></input>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
              ></input>
            </div>
          </Col>
        </Row>
        <div className="form-group">
          <Link className="btn btn-primary" to="">
            Register
          </Link>
          <Link className="btn btn-secondary ml-2" onClick={toggle} to="">
            Cancel
          </Link>
        </div>
        <p className="mb-0">
          Already have account?
          <Link
            to="#"
            className={classnames({
              active: activeTab === "1",
            })}
            onClick={() => {
              logintoggle("1");
            }}
          >
            SignIn
          </Link>
          here
        </p>
      </form>
    </TabPane>
  );
};

export default SignUp;
