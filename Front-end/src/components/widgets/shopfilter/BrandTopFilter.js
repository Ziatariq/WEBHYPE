import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Form, Row, Button } from "reactstrap";
import {
  ratingValue,
  sortValue,
  searchValue,
} from "../../../store/actions/filter";
import { products } from "../../utilities/constants";
import { getFilterProductsdata, uniqueBrand } from "../../../services";

class TopFilter extends Component {
  state = {
    SearchValue: "",
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      SearchValue: "",
    });
    this.props.searchValue("");
  }

  SearchTextchange(SearchText) {
    this.setState({
      ...this.state,
      SearchValue: SearchText.target.value,
    });
    this.props.searchValue(SearchText.target.value);
  }
  render() {
    const productlength = this.props.productlength;
    return (
      <Row>
        <Col md="3">
          <Form className="ordering">
            <select
              name="orderby"
              className="orderby select2"
              onChange={(e) => this.props.sortValue(e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
            >
              <option value=" " selected="selected">
                Select Brand First
              </option>
              {this.props.brands.map((data, index) => {
                return (
                  <option value={data} key={index}>
                    {data}
                  </option>
                );
              })}
            </select>
          </Form>
        </Col>
        <Col md="3">
          <Form className="ordering">
            <select
              name="orderby"
              className="orderby select2"
              onChange={(e) => this.props.sortValue(e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
            >
              <option value=" " selected="selected">
                Select Brand Second
              </option>
              {this.props.brands.map((data, index) => {
                return (
                  <option value={data} key={index}>
                    {data}
                  </option>
                );
              })}
            </select>
          </Form>
        </Col>

        <Col md="3">
          <Form className="ordering">
            <select
              name="orderby"
              className="orderby select2"
              onChange={(e) => this.props.sortValue(e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
            >
              <option value=" " selected="selected">
                Select Brand Three
              </option>
              {this.props.brands.map((data, index) => {
                return (
                  <option value={data} key={index}>
                    {data}
                  </option>
                );
              })}
            </select>
          </Form>
        </Col>
        <Col md="3">
          <Button color="primary">Compare Brand</Button>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (state) => ({
  products: getFilterProductsdata(state.data, state.filters),
  brands: uniqueBrand(state.data.products),
  filters: state.filters,
});

export default connect(mapDispatchToProps, {
  sortValue,
  ratingValue,
  searchValue,
})(TopFilter);
