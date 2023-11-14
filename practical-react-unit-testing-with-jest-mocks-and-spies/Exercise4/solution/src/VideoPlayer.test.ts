import VideoPlayer from "./VideoPlayer";

describe('VideoPlayer component', () => {
  it('updates value of play and returns the value', () => {
      const videoPlayer = new VideoPlayer(false, 100)
      const videoPlaySpy = jest.spyOn(videoPlayer, 'play');
      const videoStopSpy = jest.spyOn(videoPlayer, 'stop');
      
      videoPlayer.togglePlay();
      
      expect(videoPlaySpy).toHaveBeenCalledTimes(1);
      expect(videoStopSpy).toHaveBeenCalledTimes(0);
      expect(videoPlayer.isPlaying).toEqual(true);  
  });

  it('does not increase volume past 100', () => {
      const videoPlayer = new VideoPlayer(false, 100);
      const getVolumeSpy = jest.spyOn(videoPlayer, 'volume', 'get');
      const setVolumeSpy = jest.spyOn(videoPlayer, 'volume', 'set');

      videoPlayer.increaseVolume();
      expect(getVolumeSpy).toHaveBeenCalledTimes(1);
      expect(setVolumeSpy).toHaveBeenCalledTimes(0);
      expect(videoPlayer.volume).toBe(100);
  });
})