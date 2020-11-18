import { connect } from 'react-redux';
import './Voice.css';
import speechSynthesis from '../../utils/speechSynthesis';
// import { useEffect } from 'react';
import { setVoices } from '../../actions';

const Voice = ({ question: { label }, setVoices, voices, voiceText }) => {
  return (
    <div className="voice">
      <div className="voice-text">
        <h4>{voiceText}</h4>
      </div>
      <div className="voice-control">
        <i
          className="volume up icon"
          onClick={() => {
            speechSynthesis.speak(voiceText);
          }}></i>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { question: state.question, voices: state.voices };
};

export default connect(mapStateToProps, { setVoices })(Voice);
