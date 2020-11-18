import { Component } from 'react';
import Voice from './voice/Voice';
import Question from './question/Question';
import Options from './options/Options';
import { generateRandNum } from '../utils/generator';

class Numbers extends Component {
  generateOptions({ insertQuestionAtIndex, questionToDisplay, max }) {
    return Array.from({ length: 4 }, (_, index) => {
      return insertQuestionAtIndex === index
        ? questionToDisplay + 1
        : generateRandNum(max, questionToDisplay);
    });
  }

  generateQuestion = (max = 200) => {
    const questionToDisplay = generateRandNum(max);
    const insertQuestionAtIndex = generateRandNum(4);
    const options = this.generateOptions({
      insertQuestionAtIndex,
      questionToDisplay,
      max,
    });

    return {
      questionToDisplay,
      label: 'What number comes after ',
      options,
      ans: options[insertQuestionAtIndex],
    };
  };

  render() {
    return (
      <>
        <Voice voiceText="What number comes after the one shown on the screen?" />
        <Question generateQuestion={this.generateQuestion} />
        <Options />
      </>
    );
  }
}

export default Numbers;
