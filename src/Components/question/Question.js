import { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestion } from '../../actions';
import './Question.css';
import { selectedOption } from '../../actions';
import speechSynthesis from '../../utils/speechSynthesis';

class Question extends Component {
  nextQuestion = () => {
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
      <div className={`question`}>
        <div className="question-description">
          {this.renderQuestion(this.props.question)}
        </div>
        <span
          className="next-icon"
          onClick={() => {
            if (
              Object.keys(this.props.selectedOption).length === 0 ||
              !this.props.selectedOption.right
            ) {
              speechSynthesis.speak(
                'select the right option in order to continue',
                1
              );
              return;
            }

            this.nextQuestion();
            this.props.resetOptions();
          }}>
          <i className="arrow right icon"></i>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { question: state.question, selectedOption: state.selectedOption };
};

export default connect(mapStateToProps, {
  getQuestion,
  resetOptions: selectedOption,
})(Question);
