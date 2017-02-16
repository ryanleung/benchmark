import React, {Component} from 'react';
import NavBar from './NavBar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import AddBenchmarkMuiTheme from './AddBenchmarkMuiTheme.js';


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
          <div>
            <h1>
              Add a Benchmark
            </h1>
            <p>
              Contribute anonymously to our database and unlock thousands of benchmarking data points on top industry companies.
            </p>
            <p>
              Simply pick one of the questions below to answer about a company you work or used to work for.
            </p>
            <div><RaisedButton label="Question 1" onClick={this.handleNext}/></div>
            <div><RaisedButton label="Question 2" onClick={this.handleNext}/></div>
            <div><RaisedButton label="Question 3" onClick={this.handleNext}/></div>
          </div>
        )
      case 1:
        return (
          <div>
            <h1>
              Add Metrics
            </h1>
            <TextField
              hintText="e.g. Google"
              floatingLabelText="Company"
              floatingLabelFixed={true} /><br />
            <TextField
              hintText="e.g. Maps division"
              floatingLabelText="Business Unit / Division"
              floatingLabelFixed={true} /><br />
            <TextField
              hintText="e.g. 2009"
              floatingLabelText="Year"
              floatingLabelFixed={true} /><br />
            <TextField
              hintText="e.g. ????????????"
              floatingLabelText="Metric Question"
              floatingLabelFixed={true} /><br />
            <TextField
              hintText="e.g. USA"
              floatingLabelText="Country"
              floatingLabelFixed={true} /><br />
            <TextField
              hintText="e.g. blah"
              floatingLabelText="Verification Code"
              floatingLabelFixed={true} /><br />
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
      <div className="AddBenchmarkPage">
        <MuiThemeProvider muiTheme={AddBenchmarkMuiTheme}>
          <div>
            <NavBar />
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Pick a question</StepLabel>
              </Step>
              <Step>
                <StepLabel>Complete metric</StepLabel>
              </Step>
            </Stepper>
            {this.getStepContent(stepIndex)}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AddBenchmarkPage;