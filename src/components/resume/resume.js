import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
          <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Houston</h3>
                <p className="info">B.A. Degree in Economics <span>•</span> <em className="date">Current</em></p>
                <p>
                    I am currently styudying Economics full-time at the University of Houston.  My Economics degree has helped me to be able to interpret market trends within industry, and take appropriate measures as far as digital marketing is confirmed.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>UT Coding Bootcamp</h3>
                <p className="info">Graduate <span>•</span> <em className="date">April 2018</em></p>
                <p>
                  The UT Coding Bootcamp was a tremendous adventure that I begain, and can honestly admit that I wouldn't have the skills I have today without it.  This experience accelerated my learning rate up tremendously, and being around like-minded individuals and having the network to fall back on was my favorite part of the whole process.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Frontier Services Group</h3>
                <p className="info">Senior Digital Marketr <span>•</span> <em className="date">July 2018 - Present</em></p>
                <p>
                  FSG is a natural disaster restoration company who excels in mold remediation and water extraction.  I was &amp; am the sole digital marketer within the company and handle all of the web maintenaince, SEO/SEM, and social media.  FSG is a 80 employee company that nets over $4 million annually.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand sass" /><em>SASS</em></li>
                <li><span className="bar-expand react" /><em>React</em></li>
                <li><span className="bar-expand mongo" /><em>Mongo/Mongoose</em></li>
                <li><span className="bar-expand es6" /><em>es6</em></li>
                <li><span className="bar-expand node" /><em>Node.js</em></li>
                <li><span className="bar-expand google" /><em>Google Adwords</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}