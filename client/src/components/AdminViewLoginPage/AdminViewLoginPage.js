import React, { Component } from 'react'
import { Grid, Col, ListGroup } from 'react-bootstrap';
import "./AdminViewLoginPage.css";
import API from "../../utils/API";
import { InputAdmin, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";

export default class AdminViewLoginPage extends Component {
  state = {
    users: [],
    id: "",
    photo: "",
    email: "",
    password: ""
  };
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        this.setState({ 
          users: res.data, 
          photo: "", 
          email: "", 
          password: "" })
      })
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  updateForm = id => {
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("editButton").style.display="inline";
    API.getUser(id)
    .then(res => {
      this.setState({
        id: res.data._id,
        photo: res.data.photo,
        email: res.data.email,
        password: res.data.password
      })
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleUpdate = event => {
    event.preventDefault();
    document.getElementById("editButton").style.display="none";
    document.getElementById("submitButton").style.display = "inline";
    API.updateUser(this.state.id, {
      photo: this.state.photo,
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
        this.setState({
        id: res.data._id,
        photo: res.data.photo,
        email: res.data.email,
        password: res.data.password
      });
      this.loadUsers();
      console.log("Updated Photo: " + res.data.photo);
    })
    .catch(err => console.log(err)); 
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.photo && this.state.password) {
      API.saveUser({
        photo: this.state.photo,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Grid className="content">
        <Col xs={12} md={6}>
          <h1 className="heading">Add a User</h1>
          <form>
            <InputAdmin 
              type="hidden"
              value={this.state.id}
              onChange={this.handleInputChange}
              name="id"
            />
            <InputAdmin
              value={this.state.photo}
              onChange={this.handleInputChange}
              type="url"
              name="photo"
              placeholder="Link to Photo (http://www.google.com)"
            />            
            <InputAdmin
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="email (required)"
            />
            <InputAdmin
              value={this.state.password}
              onChange={this.handleInputChange}
              type="text"
              name="password"
              placeholder="Enter Password"
            />
            <FormBtn
              id="editButton"
              className="btn btn-warning"
              disabled={!(this.state.photo && this.state.email && this.state.password)}
              onClick={this.handleUpdate}
            >
              Update Item
            </FormBtn>
            <FormBtn
              id="submitButton"
              className="btn btn-success"
              disabled={!(this.state.photo && this.state.email && this.state.password)}
              onClick={this.handleFormSubmit}
            >
              Submit Item
            </FormBtn>
          </form>
        </Col>
        <Col className="text-center" xs={12} md={6}>
          <h1 className="heading">Account Management</h1>
          {this.state.users.length ? (
              <ListGroup className="manageUsers">
                {this.state.users.map(user => (
                      <Col className="profileCol text-center" xs={10} md={4} key={user._id}>
                      <div className = "profileBox text-center">
                          <img className="profilePicture" src={user.photo} alt="242x200" />
                          <h5>{user.email}</h5>
                          <UpdateBtn onClick={() => (this.updateForm(user._id))}/>
                          <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                        </div>
                      </Col>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
        <div className="push"></div>
      </Grid>
    )
  }
}
