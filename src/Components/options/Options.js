import { connect } from 'react-redux';
import './Options.css';
import { useRef } from 'react';

const Options = ({ question, onclick }) => {
  const audioRef1 = useRef(null),
    audioRef2 = useRef(null);

  const playNotificationSound = selectedIndex => {
    switch (true) {
      case selectedIndex === false:
        if (!audioRef1.current) return;
        if (audioRef1.current.currentTime > 0) {
          audioRef1.current.currentTime = 0;
          audioRef1.current.pause();
        }
        audioRef1.current.play();

        onclick(selectedIndex);
        break;

      case selectedIndex === true:
        audioRef2.current && audioRef2.current.play();

        onclick(selectedIndex);
        break;
      default:
        return;
    }
  };

  const renderedOptions = question?.options?.map(option => {
    return (
      <div
        className={`option`}
        onClick={() => {
          const validity = option === question.ans ? true : false;

          playNotificationSound(validity);
          onclick(validity);
        }}
        key={option * Math.random()}>
        {option}
      </div>
    );
  });

  return (
    <div className="options">
      {renderedOptions}
      <audio src="../asset/fail-buzzer-01.mp3" ref={audioRef1} />
      <audio
        src="../asset/feedback-correct-3.wav-sound-effect-55313111.mp3"
        ref={audioRef2}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { question: state.question };
};

export default connect(mapStateToProps)(Options);
