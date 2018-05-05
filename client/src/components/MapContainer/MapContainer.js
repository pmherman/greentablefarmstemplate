import React, { Component } from 'react'
import "./MapContainer.css";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { relative } from 'upath';

const style = {
    height: "60vh",
    position: relative
  }

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
    
  render() {
    return (
        <Map
        className="col-lg-6 override"
        google={this.props.google}
        style={style}
        initialCenter={{
        // Update to your latitude/logitude use http://maps.google.com to get information
          lat: 37.3605967,
          lng: -108.2954354
        }}
        // The bigger the number in zoom the closer you are zoomed in to your location
        zoom={17}
        onClick={this.onMapClicked}
      >
        {/* Change to your location Information */}
        <Marker onClick={this.onMarkerClick}
                name   =    {'Green Table Farm'}
                street =    {'41478 Colorado 184'}
                city   =    {'Mancos, CO 81328'}
                phone  =    {'(208) 484-5604'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h5>{this.state.selectedPlace.name}</h5>
              <p>
                 {this.state.selectedPlace.street}<br/>
                 {this.state.selectedPlace.city}<br/>
                 {this.state.selectedPlace.phone}
              </p>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
    // Your own API key is required to use Google Maps. Create API Key from http://developers.google.com
    apiKey: "AIzaSyC4U_mX5puZLwQHSMPsOAyGi810-bQ3fLk"
})(MapContainer)