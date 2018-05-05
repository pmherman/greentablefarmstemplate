import React, { Component } from "react";
import { Carousel, Image, Grid, Row } from 'react-bootstrap';
import './Home.css';

// Home Page

class Home extends Component {
  render () {
    return(
      <div className="carousel slide content">
      <Carousel>
        <Carousel.Item className="carousel-item">
          <div className="view"></div>

          {/* Update alt and src, carousel caption (optional) will overlay on top of the pictures */}

          {/* First Slide */}
          <Image className="carouselPicture" alt="Kendra and Tyler" src="assets/images/portrait.jpg" />
          {/* <Carousel.Caption>
            <h3>Welcome</h3>
            <p>Green Table Farm has much to offer, from hosting weddings, catering events, hosting campers, Farmer's Markets, and much more!</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <Image alt="Durango Farmers Market" src="assets/images/FarmersMarket.jpg" />
          {/* <Carousel.Caption>
            <h3>Come Visit at Durango Farmer's Market</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <Image alt="Green Table Cafe Bus" src="assets/images/cafeBus.jpg" />
          {/* <Carousel.Caption>
            <h3>Green Table Cafe Bus</h3>
            <p>Visit "Cafe" to find out more about Green Table Cafe!</p>
          </Carousel.Caption> */}
        </Carousel.Item>

          {/* Add more slides here, copy and paste a previous slide, then update the information */}

      </Carousel>

        {/*  Currently set to show max width 780px  */}
        <Grid className="smScreenOnly">
          <Row>

            {/* Optional Summary below the slides */}

            <p className="summary text-center"> &nbsp; Green Table Farm is booking wedding and event dates for the upcoming season. Get married or host your event on a working farm/ranch in the scenic Mancos Valley. Farm to table catering is also available through Green Table Cafe. Prices are very reasonable this season, so dates are filling up fast. Book now to lock in your date at a magical place in the Southwest!</p>
          </Row>
        </Grid>
      </div>
    )
  }
}
  
export default Home;
