import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

 class Footer extends Component {


  render() {
    return (
        
  <footer className="page-footer text-center mt-4 wow fadeIn">

    {/*Call to action  */}
    <div className="pt-2">
      <p id="footerConnect">Connect With Us</p>
    </div>
    {/*/.Call to action  */}

    {/* Optional spacing */}
    {/* <div className="container">
      <hr className="my-2 mx-2"></hr>
    </div> */}
    
    {/* Social icons   */}
    <div className="icons">

    {/* Like on Facebook */}
    {/* <div class="fb-like" data-href="https://www.facebook.com/greentablefarm/" data-width="50px" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div> */}
    
      {/* Facebook Update href */}
      <a href="https://www.facebook.com/greentablefarm/" target="_blank" rel="noopener noreferrer">
        <i className="icon fa fa-facebook mr-3"></i>
      </a>

      {/*  Email Update href */}
      <a href="mailto:tjhoyt7@gmail.com" className="social-link rounded-circle text-white mr-3" data-toggle="tooltip" data-placement="top" title="Email" data-original-title="Email">
        <i className="icon fa fa-fw fa-envelope"></i>
      </a>

      {/* GitHub update href */}
      {/* <a href="" target="_blank" rel="noopener noreferrer">
        <i className="icon fa fa-github mr-3"></i>
      </a> */}

      {/* LinkedIn update href */}
      {/* <a className="social-link rounded-circle text-white mr-3" data-toggle="tooltip" data-placement="top" target="_blank" rel="noopener noreferrer" title="LinkedIn" href="">
        <i className="icon fa fa-linkedin" aria-hidden="true"></i>
      </a> */}

    </div>
    {/* Social icons   */}

    {/*Copyright  */}
    <div className="footer-copyright">
      <div className="container">
        <small>Powered by <i className="fa fa-coffee" aria-hidden="true"></i> and <Link to="/adminview"><i className="fa fa-heart" aria-hidden="true"></i> </Link>Copyright &copy; Aidan Clemente & Paul Herman 2018</small>
      </div>
    </div>
    {/*/.Copyright  */}

  </footer>

    )
  }
}

export default Footer;