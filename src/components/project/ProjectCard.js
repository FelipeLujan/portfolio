import { Grid, Typography, withStyles, withTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import * as PropTypes from "prop-types";
import React from "react";
import Collapse from "@material-ui/core/Collapse";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

function ProjectCard(props) {
  let { styles, theme, project } = props;
  let LaunchButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #75A5DB 30%, #D8DBE2 90%)",
      borderRadius: 50,
      border: 0,
      color: theme.palette.primary.main,
      height: 36,
      padding: "0 30px",
      boxShadow:
        "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)"
    },
    label: {
      textTransform: "capitalize"
    }
  })(Button);
  let DetailsButton = withStyles({
    root: {
      borderRadius: 50,
      border: `1px solid ${theme.palette.error.main}`,
      color: theme.palette.error.main,
      height: 36,
      padding: "0 20px",
      marginLeft: "5px",
      marginRight: "5px"
    },
    label: {
      textTransform: "capitalize"
    }
  })(Button);

  let expandMedia = {
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    }
  };

  styles = {
    card: {
      maxWidth: 345
    },
    media: {
      objectFit: "cover"
    },

    actions: {
      display: "flex"
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
  };

  let getIcon = name => {
    switch (true) {
      case name === "node":
        return "https://res.cloudinary.com/felipelujan/image/upload/v1556853010/portfolio/node.png";
      case name === "angular":
        return "https://res.cloudinary.com/felipelujan/image/upload/v1556853010/portfolio/ang.png";
      case name === "k8s":
        return "https://res.cloudinary.com/felipelujan/image/upload/v1556853010/portfolio/k8s.png";
      case name === "react":
        return "https://res.cloudinary.com/felipelujan/image/upload/v1557330626/portfolio/Group.png";
      case name === "docker":
        return "https://res.cloudinary.com/felipelujan/image/upload/v1557332322/portfolio/docker.png";
      case name === "gcp":
        return "https://res.cloudinary.com/felipelujan/image/upload/v1557331094/portfolio/gcp.png";
      default:
        return "";
    }
  };
  let stack = project.stack.map(tech => {
    return (
      <Grid item>
        <img src={getIcon(tech)} />
      </Grid>
    );
  });

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={
            window.innerWidth <= 736
              ? project.thumb.mobile
              : project.thumb.desktop
          }
        />
        <CardContent style={{ backgroundColor: "#fafafa" }}>
          <Typography variant="h6" className="title">
            {project.name}
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            style={{ marginTop: 50, marginBottom: 50 }}
          >
            {stack}
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={8}>
              <Typography variant="body1" className="description">
                {project.description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: 50 }}
          >
            <LaunchButton href={project.link} target="_blank">
              Launch App
            </LaunchButton>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: 25, marginBottom: 50 }}
          >
            <DetailsButton
              aria-expanded={props.expanded}
              aria-label="Show more"
              onClick={() => {
                props.handleExpandClick(project.id);
              }}
            >
              {props.expanded === project.id ? "Show Less" : "Show More"}
            </DetailsButton>
            <DetailsButton
              aria-label="Source Code"
              href={project.source}
              target="_blank"
            >
              Source Code
            </DetailsButton>
          </Grid>
        </CardContent>

        <Collapse
          in={props.expanded === project.id}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <div>
              <Stepper activeStep={props.step} orientation="vertical">
                {project.steps.map((title, index) => (
                  <Step key={title}>
                    <StepLabel>{title}</StepLabel>
                    <StepContent>
                      <Typography>{project.detailedStep[index]}</Typography>
                      <div>
                        <Button
                          disabled={props.step === 0}
                          onClick={props.handleBack}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={props.handleNext}
                        >
                          {props.step === props.step.length - 1
                            ? "Finish"
                            : "Next"}
                        </Button>
                      </div>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {props.step === project.steps.length && (
                <div>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={props.handleReset}>Reset</Button>
                </div>
              )}
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

ProjectCard.propTypes = {
  styles: PropTypes.shape({
    media: PropTypes.shape({ objectFit: PropTypes.string }),
    card: PropTypes.shape({ maxWidth: PropTypes.number })
  })
};

export default withTheme()(ProjectCard);
