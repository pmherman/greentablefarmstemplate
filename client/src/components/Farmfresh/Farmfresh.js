import React, { Component } from 'react'
import { Grid, Row, Thumbnail, Col, ListGroup } from 'react-bootstrap';
import "./Farmfresh.css";
import API from "../../utils/API";

export default class Farmfresh extends Component {
  state = {
    thumbnails: [],
    photo: "",
    title: "",
    description: ""
  };
  componentDidMount() {
    this.loadThumbnails();
  }

  loadThumbnails = () => {
    API.getThumbnails()
      .then(res => {
        this.setState({ thumbnails: res.data, photo: "", title: "", description: "" })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Grid className="content">
        <br />
        <img className="coverPhotoFarm text-center" src="https://scontent-mia3-1.xx.fbcdn.net/v/t31.0-8/10988303_1586767414902091_6874153224968529675_o.jpg?_nc_cat=0&oh=014ca5e51af1071c23cfc4ce0ec724c6&oe=5B9ABBA3" alt="Tyler and Kendra on Farm" />
        <h1 className="customTitle text-center">Farm Fresh Products</h1>
        <Row>
          {this.state.thumbnails.length ? (
              <ListGroup>
                {this.state.thumbnails.map(thumbnail => (
                      <Col xs={12} md={3} key={thumbnail._id}>
                      <Thumbnail src={thumbnail.photo} alt="242x200">
                          <h3 className="text-center">{thumbnail.title}</h3>
                          <p className="text-center">{thumbnail.description}</p>
                          <p className="text-center" id="price">Price: {thumbnail.price}</p>
                        </Thumbnail>
                      </Col>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
        <div className="push"></div>
      </Grid>
    )
  }
}
