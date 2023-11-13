export default class VideoPlayer {
    #playState: boolean
    #volume: number
   
    constructor(play: boolean, vol: number) {
      this.#playState = play;
      this.#volume = vol;
    }
   
    // volume getter/setter and increment functions
    get volume() {
      return this.#volume;
    }
    set volume(vol: number) {
        if (vol >= 0 && vol <= 100) {
            this.#volume = vol;
        }
    }

    increaseVolume() {
        if(this.volume < 100) {
            this.volume++;
        }
    }
    decreaseVolume() {
        if(this.volume > 0) {
            this.volume--;
        }
    }
 
    // play state functions and isPlaying getter
    get isPlaying() {
        return this.#playState;
    }
    play() {
        this.#playState = true;
    }

    stop() {
        this.#playState = false;
    }

    togglePlay() {
        if (!this.isPlaying) {
            this.play();
        } else {
            this.stop();
        }
    }
  }
  