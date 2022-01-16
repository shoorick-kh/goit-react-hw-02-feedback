import React from 'react';
import './App.css';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Notification from './components/notification/Notification';
import Section from './components/section/Section';
import Statistics from './components/statistics/Statistics';

class App extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

  addFeedback = params => {
    this.setState(prevState => {
      return {
        [params]: prevState[params] + 1,
      };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions params={this.state} addFeedback={this.addFeedback} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              params={this.state}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
