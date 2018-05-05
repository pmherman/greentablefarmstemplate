import React, { Component } from 'react';
import "./Facebook.css";

const style = {
    width: "47vw",
    height: "60vh",
    position: "relative"
}

class Facebook extends Component {
    render() {
        return (
        <iframe
            title="Facebook Reviews"
            className = "facebook-reviews"
            style= {style}
            allowTransparency="true"
            allow="encrypted-media"
            display="initial"
            src="http://www.facebook.com/permalink.php?story_fbid=10116691030143684&id=9327905&substory_index=0" />        
        )
    }
} 

export default Facebook;