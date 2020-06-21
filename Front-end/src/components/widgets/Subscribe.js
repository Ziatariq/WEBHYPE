import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import BG_Image from "../../assets/images/categories/default/section-banner.jpg";

class Subscribe extends Component {
  state = {
    fieldvalue: {},
    errors: {},
    modal: false,
  };

  handleValidation() {
    let fieldvalue = this.state.fieldvalue;
    let errors = {};
    let formIsValid = true;

    //Email ID
    if (!fieldvalue["newsletter_email"]) {
      formIsValid = false;
      errors["newsletter_email"] = "Please Enter Email ID";
    }

    if (typeof fieldvalue["newsletter_email"] !== "undefined") {
      if (
        !fieldvalue["newsletter_email"].match(
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        )
      ) {
        formIsValid = false;
        errors["newsletter_email"] = "Please Enter Valid Email Address";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  onProfileFormSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      return true;
    }
  }

  handleChange(field, e) {
    let fieldvalue = this.state.fieldvalue;
    fieldvalue[field] = e.target.value;
    this.setState({ fieldvalue });
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      modal: !this.state.modal,
    });
  };

  render() {
    const { modal } = this.state;
    return (
      <div
        className="banner-bg section-ptb"
        style={{ backgroundImage: `url(${BG_Image})` }}
      >
        <Row className="justify-content-center">
          <Col sm={10} lg={6} md={8}>
            <div className="newsletter-wrapper newsletter-style-1 newsletter-design-4">
              <h2 className="newsletter-title">
                Subscribe today and get notifications of new sales!
              </h2>
              <div className="newsletter">
                <Button onClick={this.toggle}>Notification</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Modal isOpen={modal} toggle={this.toggle} className="modal-lg">
            <ModalHeader toggle={this.toggle} className="noficationModal">
              Notification
            </ModalHeader>
            <ModalBody>
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
                  <Link
                    className="btn btn-secondary ml-2"
                    onClick={this.toggle}
                    to=""
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </Row>
      </div>
    );
  }
}

export default Subscribe;
