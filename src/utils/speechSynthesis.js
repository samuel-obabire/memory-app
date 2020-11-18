const synth = window.speechSynthesis;

class speechSynthesis {
  // constructor() {
  //   this.voices = synth.getVoices();
  // }

  static speak(text, rate) {
    const utter = new SpeechSynthesisUtterance();
    utter.rate = rate || 0.3;
    utter.text = text;

    window.speechSynthesis.speak(utter);
  }
}

export default speechSynthesis;
