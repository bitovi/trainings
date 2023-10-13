import VideoPlayer from "./VideoPlayer";

  describe('Uses global setup', () => {
    it('returns value of volume', () => {
        const videoPlayer = new VideoPlayer(false, 100)
        const getVolumeSpy = jest.spyOn(videoPlayer, 'getVolume');
        const volume = videoPlayer.getVolume();
        
        expect(getVolumeSpy).toHaveBeenCalledTimes(1);
        expect(volume).toBe(100);
    });

    it('updates value of play and returns the value', () => {
        const videoPlayer = new VideoPlayer(false, 100)
        const videoGetterSpy = jest.spyOn(videoPlayer, 'getPlay');
        const videoSetterSpy = jest.spyOn(videoPlayer, 'setPlay');
        
        // triggering the getter we spied on
        const isPlaying = videoPlayer.getPlay();
        
        expect(videoGetterSpy).toHaveBeenCalledTimes(1);
        expect(isPlaying).toEqual(false);
        
        // triggering the setter we spied on
        videoPlayer.setPlay();
        
        expect(videoSetterSpy).toHaveBeenCalledTimes(1);
        expect(videoPlayer.play).toEqual(true);  
    })
})