import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabPane, Col, Row } from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import { register } from "../../store/actions/login.actions";

const SignUp = (props) => {
  const { activeTab, toggle, logintoggle } = props;
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    address: "",
    user_name: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
      address,
      user_name,
    } = user;
    if (
      first_name &&
      last_name &&
      email &&
      password &&
      confirm_password &&
      address &&
      user_name
    ) {
      props.register(user);
    }
  };

  const { isFetching, isFetched } = props;

  return (
    <TabPane tabId="2">
      <form>
        <Row>
          <Col md="6">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={user.first_name}
                onChange={handleChange}
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
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
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
                name="email"
                value={user.email}
                onChange={handleChange}
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
                name="password"
                value={user.password}
                onChange={handleChange}
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
                name="confirm_password"
                value={user.confirm_password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Confirm Password"
              ></input>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <label>User Name </label>
              <input
                type="text"
                name="user_name"
                value={user.user_name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter User Name"
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
                name="address"
                value={user.address}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Address"
              ></input>
            </div>
          </Col>
        </Row>
        {isFetched && (
          <p style={{ color: "#d65e47" }}>User Successfully Registered!</p>
        )}
        <div className="form-group">
          <Link className="btn btn-primary" onClick={handleRegister} to="">
            Register
          </Link>
          <Link className="btn btn-secondary ml-2" onClick={toggle} to="">
            Cancel
          </Link>
        </div>
        {isFetching && (
          <>
            <span>Registering  </span>
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          </>
        )}
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

const mapStateToProps = (state) => {
  const { isFetching, isFetched } = state.auth.registration;
  return { isFetching, isFetched };
};

const mapDispatchToProps = {
  register: register,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
