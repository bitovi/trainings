export default class VideoPlayer {
    play: boolean
    volume: number
   
    constructor(play: boolean, vol: number) {
      this.play = play;
      this.volume = vol;
    }
   
    getVolume() {
      return this.volume;
    }

    setVolume(vol: number) {
        this.volume = vol;
    }

    getPlay() {
        return this.play;
    }

    setPlay() {
        this.play = !this.play;
    }
  }
  
