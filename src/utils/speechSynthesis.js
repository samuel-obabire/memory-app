class speechSynthesis {
  static synth = window.speechSynthesis;

  static speak(text, rate) {
    const utter = new SpeechSynthesisUtterance();
    utter.rate = rate || 0.3;
    utter.text = text;

    this.synth.speak(utter);
  }
}

export default speechSynthesis;
