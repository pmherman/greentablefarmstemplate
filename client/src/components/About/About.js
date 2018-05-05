import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import MapContainer from '../MapContainer';
import { relative } from 'upath';
// import Facebook from "../Facebook";
import "./About.css";

const style = {
  position: relative
}

class About extends Component {
  render() {
    return (
      <div className="content">
       <Row className="noSidePadding">
          <Col sm={12} md={6}>
            <h2 className="text-center">About Us</h2>

            <p className="aboutText"> &nbsp; We are a small-scale diversified vegetable and livestock farm that focuses on raising heritage and heirloom varieties adapted to the arid Southwest climate. </p>

            <p className="aboutText"> &nbsp; Over 75+ varieties of vegetables are grown and sold at the Durango Farmers Market and through Southwest Farm Fresh Coop. We also have a sizable laying flock of chickens, which lay some of the most delicious eggs in the area because of their pasture-based and non-GMO diet. Our ducks and turkeys contribute to the egg supply as well this year.</p> 
              
            <p className="aboutText"> &nbsp; Our goats and hogs are rotated through our regenerating pastures to add more organic material to the soil and practice pig tillage on plots to be used for vegetable production the following year. We are incredibly visible from highway 184, just .9 miles from the stoplight in Mancos on the left. Look for the big blue bus (intern housing) and some hard working humans and animals out in the fields!</p>

            <h2 className="text-center">Where Are We Located?</h2>
            <MapContainer 
              style={style}
          /> 
          </Col>
          <Col md={6} sm={12} className="text-center">
            <h2>Facebook Reviews</h2>
            <div className="facebook" sm={12} md={6}>
          <iframe className="tryingToCenter"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftim.m.wilson1%2Fposts%2F10155436064349838%3A0&width=500" 
            title="facebookReview1"
            width="600" 
            height="373" 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media">
          </iframe>
          <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D10116691030143684%26id%3D9327905%26substory_index%3D0&width=500" 
            title="facebookReview2"
            width="600" 
            height="335" 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media">
          </iframe>
          <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmatt.margo%2Fposts%2F10100194791044636%3A2&width=500" 
            title="facebookReview3"
            width="600" 
            height="335" 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media">
          </iframe>
        </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default About;
