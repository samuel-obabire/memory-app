class speechSynthesis {
  static synth = window.speechSynthesis;

  static getVoices = () => this.synth.getVoices();

  static speak(text, rate) {
    const utter = new SpeechSynthesisUtterance();
    utter.rate = rate || 0.3;
    utter.text = text;

    this.synth.speak(utter);
  }
}

export default speechSynthesis;
