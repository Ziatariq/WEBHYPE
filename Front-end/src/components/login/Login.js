import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabPane } from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/login.actions";
const Login = (props) => {
  const { toggle, activeTab, logintoggle, isAuthenticated, isFetching } = props;
  const [login, setLogin] = useState({
    user_name: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user_name, password } = login;
    if (user_name && password) {
      props.loginUser(login);
    }
  };

  return (
    <TabPane tabId="1">
      <form>
        <div className="form-group">
          <label>User Name: </label>
          <input
            type="text"
            name="user_name"
            value={login.user_name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter user name"
          ></input>
        </div>
        <div className="form-group">
          <label>Password </label>
          <input
            type="text"
            name="password"
            value={login.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
          ></input>
        </div>

        {isAuthenticated && (
          <p style={{ color: "#d65e47" }}>Successfully Login!</p>
        )}
        <div className="form-group">
          <Link
            className="btn btn-primary mt-1"
            to=""
            onClick={(e) => handleSubmit(e)}
          >
            Log in
          </Link>
          <Link className="btn btn-secondary ml-2 mt-1" onClick={toggle} to="">
            Cancel
          </Link>
        </div>
        {isFetching && (
          <>
            <span>Trying </span>
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          </>
        )}
        <p className="mb-0">
          Don't have account?
          <Link
            to="#"
            className={classnames({
              active: activeTab === "2",
            })}
            onClick={() => {
              logintoggle("2");
            }}
          >
            Register
          </Link>
          here
        </p>
      </form>
    </TabPane>
  );
};

function mapState(state) {
  const { isAuthenticated, isFetching } = state.auth.authentication;
  return { isAuthenticated, isFetching };
}

const actionCreators = {
  loginUser: loginUser,
};

export default connect(mapState, actionCreators)(Login);
