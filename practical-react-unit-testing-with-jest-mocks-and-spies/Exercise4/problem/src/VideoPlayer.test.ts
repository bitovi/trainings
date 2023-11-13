 /* 
  
 Exercise 4: 
  
 1) Use jest.spyOn() to "spy" on the play() and stop() methods of VideoPlayer
 2) Use jest.spyOn() to "spy" on VideoPlayer's `volume` getter and setter.
  
 The tests should pass after completing the steps above. 
  
 */ 
import VideoPlayer from "./VideoPlayer";

//spy on the volume getter and setter, and the play function
//  of the VideoPlayer class in the tests below

describe("VideoPlayer component", () => {
  it("updates value of play and returns the value", () => {
    const videoPlayer = new VideoPlayer(false, 100);
    // spy here
    const videoPlaySpy = jest.fn();
    const videoStopSpy = jest.fn();

    videoPlayer.togglePlay();

    expect(videoPlaySpy).toHaveBeenCalledTimes(1);
    expect(videoStopSpy).toHaveBeenCalledTimes(0);
    expect(videoPlayer.isPlaying).toEqual(true);
  });

  it("does not increase volume past 100", () => {
    const videoPlayer = new VideoPlayer(false, 100);
    // getter and setter spy here
    const getVolumeSpy = jest.fn();
    const setVolumeSpy = jest.fn();

    videoPlayer.increaseVolume();
    expect(getVolumeSpy).toHaveBeenCalledTimes(1);
    expect(setVolumeSpy).toHaveBeenCalledTimes(0);
    expect(videoPlayer.volume).toBe(100);
  });
});
