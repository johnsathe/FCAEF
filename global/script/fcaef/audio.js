fcaef.audio = new fcaef.base();
fcaef.audio.audioObj = null;
fcaef.audio.registerEvent("ON_TIME_CHANGE");
fcaef.audio.registerEvent("ON_AUDIO_START");
fcaef.audio.registerEvent("ON_AUDIO_PLAY");
fcaef.audio._onAudioStart = false;
fcaef.audio.init = function () {
    if (!this.check(this.events.BEFORE_INIT)) { return; }
    this._onAudioStart = false;
    $(document.body).append("<audio src=\"global/blank.mp3\" id=\"audioObj\" style=\"opacity:0;width:0px;height:0px;\"></audio>");
    this.audioObj = $("#audioObj")[0];
    try {
        this.audioObj.play();
        this.audioObj.pause();
    } catch (e) {
        error("ERROR: at audio init, " + e.message);
    };

    fcaef.renderer.on(fcaef.renderer.events.BEFORE_RENDER_START, {}, function (e) {
       return fcaef.audio.pageLoaded();
    });

    fcaef.navigation.on(fcaef.navigation.events.BEFORE_PAGE_LOAD, {}, function (e) {
        fcaef.audio.audioObj.pause();
    });
};
fcaef.audio.pageLoaded = function (e) {
    if ("audioData" in page) {
        this._onAudioStart = false;
        if (page.audioData.File != undefined && page.audioData.File != "" && page.audioData.File != null) {
            var audiFileName = fcaef.global.LANG + "/audio/" + page.audioData.File;
            if(fcaef.audio.supportOGG())
            {
                audiFileName += ".ogg";
            } else {
                audiFileName += ".mp3";
            }
            this.audioObj.src = audiFileName;
            this.audioObj.play();
            var that = this;
            this.audioObj.removeEventListener("timeupdate", fcaef.audio.onTimeUpdate);
            this.audioObj.addEventListener("timeupdate", fcaef.audio.onTimeUpdate);
        } else {
            error("ERROR: invalid audio file name");
        }
    };
};
fcaef.audio.onTimeUpdate = function (e) {
    var that = fcaef.audio;
    var retObj = {
        pos: e.currentTarget.currentTime,
        total: e.currentTarget.duration
    };
    document.title = retObj.pos;
    that.dispach(that.events.ON_TIME_CHANGE, retObj);
    if (retObj.pos > 0.3 && that._onAudioStart == false) {
        that._onAudioStart = true;
        that.dispach(that.events.ON_AUDIO_START, {});
        that.dispach(that.events.ON_AUDIO_PLAY, {});
    };
};
fcaef.audio.supportOGG = function () {
    var a = document.createElement('audio');
    return !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
};