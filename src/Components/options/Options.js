import { connect } from 'react-redux';
import './Options.css';
import { selectedOption } from '../../actions';
import { useEffect, useRef } from 'react';

const Options = ({ question, selected, selectedOption }) => {
  const audioRef1 = useRef(null),
    audioRef2 = useRef(null);

  useEffect(() => {
    return () => {
      selectedOption();
    };
  }, [selectedOption]);

  const playNotificationSound = selectedIndex => {
    switch (selectedIndex) {
      case 'wrong':
        if (!audioRef1.current) return;
        if (audioRef1.current.currentTime > 0) {
          audioRef1.current.currentTime = 0;
          audioRef1.current.pause();
        }
        audioRef1.current.play();
        break;

      case 'right':
        audioRef2.current && audioRef2.current.play();
        break;
      default:
        return;
    }
  };

  const renderedOptions = question?.options?.map((option, index) => {
    // how to make sure a text is not selectable
    const selectedIndex =
      selected.index === index && selected.right
        ? 'right'
        : selected.index === index && !selected.right
        ? 'wrong'
        : '';

    playNotificationSound(selectedIndex);

    return (
      <div
        className={`option ${selectedIndex}`}
        onClick={() => {
          if (selected.index === index) return;
          selectedOption({ index, option });
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
  return { question: state.question, selected: state.selectedOption };
};

export default connect(mapStateToProps, { selectedOption })(Options);
