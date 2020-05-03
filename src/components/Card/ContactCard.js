import React, { Component } from "react";
import PropTypes from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Grid, Card, withStyles } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

let styles = {
  card: {
    minWidth: 800
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};
class ContactCard extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <Card className="contact-card">
            <CardContent>
              <Grid container>
                <Grid item>
                  <Typography color="textSecondary" gutterBottom>
                    Contact Info
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" component="h2" gutterBottom>
                Felipe Luján
              </Typography>

              <Typography component="p" color="textSecondary" gutterBottom>
                Web Developer &
                <br />
                Kubernetes Certified Administrator
              </Typography>

              <Typography component="h3" variant="h5" gutterBottom>
                Jfelipelujan@gmail.com
              </Typography>
              <Typography component="h3" variant="h5" gutterBottom>
                Felipelujan@hotmail.com
              </Typography>
            </CardContent>
            <CardActions>
              <CopyToClipboard text="Felipe Lujan | Front-end Developer. Jfelipelujan@gmail.com https://felipe.app">
                <Button
                  size="small"
                  onClick={() => {
                    this.onChange(true);
                  }}
                >
                  Copy to clipboard
                </Button>
              </CopyToClipboard>
              <Button size="small">Send Email</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

ContactCard.propTypes = {};

export default withStyles(styles)(ContactCard);
