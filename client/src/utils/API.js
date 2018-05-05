import axios from "axios";

export default {
  // Gets all thumbnails
  getThumbnails: function() {
    return axios.get("/api/thumbnail");
  },
  // Gets the thumbnail with the given id
  getThumbnail: function(id) {
    return axios.get("/api/thumbnail/" + id);
  },
  // Deletes the thumbnail with the given id
  deleteThumbnail: function(id) {
    return axios.delete("/api/thumbnail/" + id);
  },
  // Saves a thumbnail to the database
  saveThumbnail: function(thumbnailData) {
    return axios.post("/api/thumbnail", thumbnailData);
  },
  // Update a thumbnail to the database
  updateThumbnail: function(id, thumbnailData) {
    return axios.put("/api/thumbnail/" + id, thumbnailData)
  },


  // ---- Second Admin Page Routes ----
  // Gets all cafes
  getCafes: function() {
    return axios.get("/api/cafe");
  },
  getCafe: function(id) {
    return axios.get("/api/cafe/" + id);
  },
  // Deletes the cafe with the given id
  deleteCafe: function(id) {
    return axios.delete("/api/cafe/" + id);
  },
  // Saves a cafe to the database
  saveCafe: function(cafeData) {
    return axios.post("/api/cafe", cafeData);
  },
  // Update a cafe to the database
  updateCafe: function(id, cafeData) {
    return axios.put("/api/cafe/" + id, cafeData)
  },


  // ---- User Accounts ----
  // Gets all information for Username
  getUsers: function() {
    return axios.get("/api/user");
  },
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Update a user to the database
  updateUser: function(id, userData) {
    return axios.put("/api/user/" + id, userData)
  },

  // Authorization to login
  loginUser: function(userData) {
    return axios.post("/api/user/login", userData);
  }
};
