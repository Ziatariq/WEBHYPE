import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

class HomSlider extends Component {
  render() {
    return (
      <Slider className="slider-01 slider-simple-arrow" {...settings}>
        <div key={1} className="slide-01-item">
          <div className="slide-inner">
            <div className="slide-image">
              <img
                src={require(`../../assets/images/home-01-slider/img-01.jpg`)}
                alt="slide-1"
              />
            </div>
            <div className="slide-content">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-md-8">
                    <div className="slide-left">
                      <div className="slide-sale">
                        20
                        <span>
                          %<br />
                          off
                        </span>
                      </div>
                      <div className="slide-title">
                        <h1>Spring</h1>
                      </div>
                      <div className="slide-subtitle">Season festival</div>
                      <span className="slide-since">Catalogue 2018</span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-4 text-right d-none d-md-block">
                    <div className="slide-offer">Limited time offer</div>
                    <Link className="slide-button" to="/shop">
                      Get the Offer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div key={2} className="slide-01-item">
          <div className="slide-inner">
            <div className="slide-image">
              <img
                src={require(`../../assets/images/home-01-slider/img-02.jpg`)}
                alt="slide-1"
              />
            </div>
            <div className="slide-content">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-md-8">
                    <div className="slide-left">
                      <div className="slide-title">
                        <h1>New Arrival</h1>
                      </div>
                      <div className="slide-subtitle">For women</div>
                      <Link className="slide-button-flat" to="/shop">
                        Shop now
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-4 text-right d-none d-md-block">
                    <div className="slide-offer">Limited time offer</div>
                    <Link className="slide-button" to="/shop">
                      Get the Offer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default HomSlider;