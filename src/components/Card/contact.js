import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import ContactCard from "./ContactCard";

class Contact extends Component {
  render() {
    return (
      <div className="contact-component">
        <Grid container direction="row">
          <Grid item xs={10} md={6} className="contact-component__mentioned">
            <Grid container justify="flex-end" alignContent="center">
              <Grid item>
                <Typography paragraph>...as i mentioned</Typography>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" justify="space-around" wrap="wrap">
          <Grid item className="contact-component__bio" xs={12} md={6}>
            <Grid container>
              <Typography component="p" variant="h3">
                <strong>
                  I’m a Web Developer and Certified Kubernetes Administrator
                </strong>

                <br />
              </Typography>
              <Typography component="p" paragraph>
                I’ve worked extensively with <strong>React</strong> and{" "}
                <strong>Vue</strong>, most of those projects have been deployed
                either to <strong>Google Cloud Platform (GCP)</strong> or{" "}
                <strong>Amazon Web Services (AWS)</strong> using{" "}
                <strong>Docker Containers</strong> and{" "}
                <strong>Kubernetes</strong> when it’s been necessary.
                <br />
              </Typography>
              <Typography paragraph component="p">
                Those web apps have usually required any sort of state
                management such as <strong>Redux</strong> or{" "}
                <strong>VueX</strong>, and were connected to
                <strong>REST APIs (usually built with Node.js)</strong>
              </Typography>
            </Grid>
          </Grid>
          <Grid item className="contact-component__card" xs={12} md={6}>
            <Grid container justify="center">
              <ContactCard> </ContactCard>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Contact.propTypes = {};

export default Contact;
