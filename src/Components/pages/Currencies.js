import Voice from '../voice/Voice';
import Question from '../question/Question';
import { generateRandNum } from '../../utils/generator';

const currencies = [
  {
    label: '5 Naira',
    src: '/asset/naira-notes/5.jpg',
    value: 5,
  },
  {
    label: '10 Naira',
    src: '/asset/naira-notes/10.jpg',
    value: 10,
  },
  {
    label: '20 Naira',
    src: '/asset/naira-notes/20.jpg',
    value: 20,
  },
  {
    label: '50 Naira',
    src: '/asset/naira-notes/50.jpg',
    value: 50,
  },
  {
    label: '100 Naira',
    src: '/asset/naira-notes/100.jpg',
    value: 100,
  },
  {
    label: '200 Naira',
    src: '/asset/naira-notes/200.jpg',
    value: 200,
  },
  {
    label: '500 Naira',
    src: '/asset/naira-notes/500.jpg',
    value: 500,
  },
  {
    label: '1000 Naira',
    src: '/asset/naira-notes/1000.jpg',
    value: 1000,
  },
];

const Currencies = () => {
  const generateOptions = ({
    insertQuestionAtIndex,
    questionToDisplay,
    options,
  }) => {
    const opts = [...options];

    return Array.from({ length: 4 }, (_, index) => {
      if (insertQuestionAtIndex === index) return questionToDisplay.label;

      return opts.splice(generateRandNum(opts.length - 1), 1);
    });
  };

  const generateQuestion = (max = 8) => {
    const questionToDisplay = currencies[generateRandNum(max)];
    const insertQuestionAtIndex = generateRandNum(4);

    const options = generateOptions({
      insertQuestionAtIndex,
      questionToDisplay,
      max,
      options: currencies
        .filter(currency => currency.label !== questionToDisplay.label)
        .map(currency => currency.label),
    });

    return {
      questionToDisplay: { ...questionToDisplay, type: 'image' },
      label: questionToDisplay.label,
      options,
      ans: options[insertQuestionAtIndex],
      questionType: 'currency',
    };
  };

  return (
    <>
      <Voice voiceText="What note is displayed on the screen?" />
      <Question generateQuestion={generateQuestion} />
    </>
  );
};

export default Currencies;
