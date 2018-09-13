import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
          <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="../images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              I am a javascript developer who's main focus is to provide simple solutions to complex problems using various technologies.  My experience with digital marketing has enabled me to increase internal productivity, as well as enhance internal scalability issues.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Jordan Vera</span><br />
                  <span>6814 Lauderwick Ct<br />
                    Katy, TX 77450 US
                  </span><br />
                  <span>(225) 405-9790</span><br />
                  <span>verawebdevelopment@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}