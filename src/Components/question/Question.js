import { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestion, countStreak } from '../../actions';
import './Question.css';
import { selectedOption } from '../../actions';
import Options from '../options/Options';

class Question extends Component {
  nextQuestion = validity => {
    if (!validity) {
      this.props.countStreak(this.props.currStreak - 1);
    } else {
      this.props.countStreak(this.props.currStreak + 1);
    }

    this.props.resetOptions();
    this.props.getQuestion(this.props.generateQuestion());
  };

  componentDidMount() {
    this.props.getQuestion(this.props.generateQuestion());
  }

  renderQuestion(question) {
    if (!question.questionToDisplay) return null;
    if (question.questionToDisplay.type === 'image')
      return (
        <div className="image-wrapper">
          <img src={`${question.questionToDisplay.src}`} alt="" />
        </div>
      );

    return question.questionToDisplay;
  }

  render() {
    return (
      <>
        <div className={`question`}>
          <div className="question-description">
            {this.renderQuestion(this.props.question)}
          </div>
        </div>
        <Options onclick={this.nextQuestion} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.question,
    selectedOption: state.selectedOption,
    currStreak: state.streak,
  };
};

export default connect(mapStateToProps, {
  getQuestion,
  resetOptions: selectedOption,
  countStreak,
})(Question);
