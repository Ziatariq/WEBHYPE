import React from "react";
import { Link } from "react-router-dom";
import { TabPane } from "reactstrap";
import classnames from "classnames";

const Login = (props) => {
  const { toggle, activeTab, logintoggle } = props;

  return (
    <TabPane tabId="1">
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
          ></input>
        </div>
        <div className="form-group">
          <label>Password </label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
          ></input>
        </div>

        <div className="form-group">
          <Link className="btn btn-primary mt-1" to="">Log in</Link>
          <Link className="btn btn-secondary ml-2 mt-1" onClick={toggle} to="">
            Cancel
          </Link>
        </div>
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

export default Login;
