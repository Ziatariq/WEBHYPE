import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import Layout from "./layout/Layout";
import HomePage from "./homePage/HomePage";
import "../App.css";
import "../Vendor.js";
import Shop from "./shop/Shop";
import ProductDetail from "./productDetails/ProductDetails";
import { receiveProducts, getSelectedProductList } from "../store/actions/actions";
import CompareProducts from "./compareProducts/CompareProducts";
import CompareBrands from "./compareBrands/CompareBrands";

const history = createBrowserHistory();

class App extends React.Component {
  componentWillMount() {
    this.props.receiveProducts();
    this.props.getSelectedProductList();
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Layout history={history}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/compare-brands" component={CompareBrands} />
            <Route exact path="/compare-products" component={CompareProducts} />
            <Route path={`/shop/:category/:id`} component={ProductDetail} />
          </Layout>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.data.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveProducts: () => { dispatch(receiveProducts())},
    getSelectedProductList: () => { dispatch(getSelectedProductList())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
