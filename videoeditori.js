var processor;

  processor.doLoad = function doLoad() {
    this.video = document.getElementById('video');
    this.canvas1 = document.getElementById('canvas1');
    this.ctx1 = this.canvas1.getContextx('2d');
    let self = this;
    this.video.addEventListenet('play',  function() {
      self.width = self.video.videoWidth /2;
      self.height = self.video.videoHeight /2;
      self.timerCallback();
    }, false );
  }
