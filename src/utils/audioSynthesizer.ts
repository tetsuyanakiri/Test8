/**
 * Authentic Siamese Classical Web Audio Synthesizer
 * Simulates the resonant acoustic timbre of the Ranad Ek (Thai Wooden Xylophone)
 * and Khong Wong Yai (Tuned Gong Chimes) in traditional Thai heptatonic/pentatonic tuning.
 */

class ThaiInstrumentSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: any = null;
  private masterGain: GainNode | null = null;
  private volume = 0.8;
  private noteIndex = 0;
  private onNotePlayCallback: ((noteFreq: number) => void) | null = null;

  // Authentic Thai classical melody notes (frequencies in Hz: Ranad Ek pitch spectrum)
  // Phom Rong Pathom Dusit melodic motif notes
  private readonly melodyFrequencies = [
    329.63, 369.99, 440.00, 493.88, 554.37, 659.25, 739.99, 880.00,
    739.99, 659.25, 554.37, 493.88, 440.00, 369.99, 329.63, 293.66,
    369.99, 440.00, 554.37, 440.00, 493.88, 554.37, 659.25, 493.88,
    440.00, 369.99, 329.63, 293.66, 329.63, 440.00, 369.99, 329.63
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public setNoteCallback(cb: (freq: number) => void) {
    this.onNotePlayCallback = cb;
  }

  public start() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Trigger strikes in traditional Thai rhythm (approx 220ms - 350ms per strike)
    this.playNextRanadStrike();
    this.intervalId = setInterval(() => {
      if (this.isPlaying) {
        this.playNextRanadStrike();
      }
    }, 280);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private playNextRanadStrike() {
    if (!this.ctx || !this.masterGain) return;

    const baseFreq = this.melodyFrequencies[this.noteIndex % this.melodyFrequencies.length];
    this.noteIndex++;

    const now = this.ctx.currentTime;

    // Ranad bar fundamental tone (hardwood bar strike with padded mallet)
    const oscFundamental = this.ctx.createOscillator();
    oscFundamental.type = 'triangle';
    oscFundamental.frequency.setValueAtTime(baseFreq, now);

    // Strike transient high harmonic (wooden click click)
    const oscClick = this.ctx.createOscillator();
    oscClick.type = 'sine';
    oscClick.frequency.setValueAtTime(baseFreq * 2.76, now); // inharmonic wooden overtones

    // Subtle gong / resonator body
    const oscSub = this.ctx.createOscillator();
    oscSub.type = 'sine';
    oscSub.frequency.setValueAtTime(baseFreq * 0.5, now);

    const gainFundamental = this.ctx.createGain();
    const gainClick = this.ctx.createGain();
    const gainSub = this.ctx.createGain();

    // Fast mallet strike attack & exponential natural decay
    gainFundamental.gain.setValueAtTime(0.001, now);
    gainFundamental.gain.linearRampToValueAtTime(0.35, now + 0.008);
    gainFundamental.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

    gainClick.gain.setValueAtTime(0.001, now);
    gainClick.gain.linearRampToValueAtTime(0.12, now + 0.003);
    gainClick.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    gainSub.gain.setValueAtTime(0.001, now);
    gainSub.gain.linearRampToValueAtTime(0.08, now + 0.015);
    gainSub.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

    oscFundamental.connect(gainFundamental);
    oscClick.connect(gainClick);
    oscSub.connect(gainSub);

    gainFundamental.connect(this.masterGain);
    gainClick.connect(this.masterGain);
    gainSub.connect(this.masterGain);

    oscFundamental.start(now);
    oscClick.start(now);
    oscSub.start(now);

    oscFundamental.stop(now + 0.5);
    oscClick.stop(now + 0.1);
    oscSub.stop(now + 0.4);

    if (this.onNotePlayCallback) {
      this.onNotePlayCallback(baseFreq);
    }
  }
}

export const thaiSynthesizer = new ThaiInstrumentSynthesizer();
