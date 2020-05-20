import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className={'about-area'}>
        <h1 className={'about'}>About me</h1>
        <div className="bio">
          <p>
            I'm a colombian developer experienced in React and Angular
            frameworks. Although i've tasted several technologies ranging from
            back-end (nodeJS - express) my main area of expertise is front-end
            development. Specifically <strong>React</strong> and Angular
            frameworks.
          </p>
          <p>
            For some of my projects (like this portfolio). I've bought it's
            domain, managed DNS and SSL certificates, and deployed the projects
            to <strong>AWS</strong>, Heroku and recently{' '}
            <strong>Google App Engine</strong>{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default About;
