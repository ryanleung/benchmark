import React, {Component} from 'react';

import {Card, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';

import './AddBenchmarkPage.css';


class AddBenchmarkPage extends Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 1,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div className="QuestionCard">
            <h1>
              Add a Benchmark
            </h1>
            <p>
              Contribute anonymously to our database and unlock thousands of benchmarking data points on top industry companies.
            </p>
            <p>
              Simply pick one of the questions below to answer about a company you work or used to work for.
            </p>
            <RaisedButton
              className="QuestionCard__question-btn"
              label="Question 1" 
              fullWidth={true}
              labelStyle={{textTransform: "none"}}
              onClick={this.handleNext}
            />
            <RaisedButton
              className="QuestionCard__question-btn"
              label="Question 2" 
              fullWidth={true}
              labelStyle={{textTransform: "none"}}
              onClick={this.handleNext}
            />
            <RaisedButton
              className="QuestionCard__question-btn"
              label="Question 3" 
              fullWidth={true}
              labelStyle={{textTransform: "none"}}
              onClick={this.handleNext}
            />
          </div>
        )
      case 1:
        return (
          <div className="AddBenchmarkMetricCard">
            <h1>
              Add Metrics
            </h1>
            <TextField
              hintText="e.g. Google"
              floatingLabelText="Company"
              floatingLabelFixed={true} 
              fullWidth={true} /><br />
            <TextField
              hintText="e.g. Maps division"
              floatingLabelText="Business Unit / Division"
              floatingLabelFixed={true}
              fullWidth={true} /><br />
            <TextField
              hintText="e.g. 2009"
              floatingLabelText="Year"
              floatingLabelFixed={true} 
              fullWidth={true} /><br />
            <TextField
              hintText="e.g. ????????????"
              floatingLabelText="Metric Question"
              floatingLabelFixed={true} 
              fullWidth={true} /><br />
            <TextField
              hintText="e.g. USA"
              floatingLabelText="Country"
              floatingLabelFixed={true} 
              fullWidth={true} /><br />
            <TextField
              hintText="e.g. blah"
              floatingLabelText="Verification Code"
              floatingLabelFixed={true} 
              fullWidth={true} /><br />
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
            />
            <RaisedButton
              label={stepIndex === 1 ? 'Finish' : 'Next'}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        )
      case 2:
        return 'Done';
      default:
        return 'you aint supposed to be here';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div className="BenchmarkForm">
        <div className="BenchmarkForm__stepper">
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Pick a question</StepLabel>
            </Step>
            <Step>
              <StepLabel>Fill out metric</StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className="BenchmarkForm__content">
          <Card>
            <CardText>
              {this.getStepContent(stepIndex)}
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default AddBenchmarkPage;