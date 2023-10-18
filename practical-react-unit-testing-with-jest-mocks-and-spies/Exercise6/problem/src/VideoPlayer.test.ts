import VideoPlayer from "./VideoPlayer";


//spy on the getter and setter of the VideoPlayer class in the tests below
describe("VideoPlayer", () => {
  it("returns value of volume", () => {
    const videoPlayer = new VideoPlayer(false, 100)
  
    //spy here
    const getVolumeSpy = jest.fn()
    const volume = videoPlayer.getVolume()
  
    expect(getVolumeSpy).toHaveBeenCalledTimes(1)
    expect(volume).toBe(100)
  })
  
  it("updates value of play and returns the value", () => {
    const videoPlayer = new VideoPlayer(false, 100)
  
    //spy here
    const videoGetterSpy = jest.fn()
    const videoSetterSpy = jest.fn()
  
    // triggering the getter we spied on
    const isPlaying = videoPlayer.getPlay()
  
    expect(videoGetterSpy).toHaveBeenCalledTimes(1)
    expect(isPlaying).toEqual(false)
  
    // triggering the setter we spied on
    videoPlayer.setPlay()
  
    expect(videoSetterSpy).toHaveBeenCalledTimes(1)
    expect(videoPlayer.play).toEqual(true)
  })
})