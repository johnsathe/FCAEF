fcaef.audiosync = new fcaef.base();
fcaef._triggeredCue = [];
fcaef.audiosync.init = function () {
    var that = this;
    if (!this.check(this.events.BEFORE_INIT)) { return; }

    fcaef.renderer.on(fcaef.renderer.events.AFTER_RENDER, {}, function (e) {
        that.pageRendered(e);
    });
};
fcaef.audiosync.pageRendered = function (e) {
    if ("audioData" in page) {
        var that = this;
        that._triggeredCue = [];
        fcaef.audio.off(fcaef.audio.events.ON_TIME_CHANGE, function (e) { that.onAudioChangePos(e); });
        fcaef.audio.on(fcaef.audio.events.ON_TIME_CHANGE, { cueData: page.audioData.CueData }, function (e) { that.onAudioChangePos(e); });
    };
};
fcaef.audiosync.onAudioChangePos = function (e) {
    var cueData = e.data.cueData;
    for (var d = 0; d < cueData.length; d++) {
        var cue = cueData[d];
        if (e.pos > cue.TriggerOn) {
            var triggerThis = true;
            for (var g = 0; g < this._triggeredCue.length; g++) {
                if (utils.compareObject(cue, this._triggeredCue[g])) {
                    triggerThis = false;
                };
            };
            if (triggerThis) {
                fcaef.audiosync.applyAction(cue);
                this._triggeredCue.push(cue);
            };
        };
    };
};
fcaef.audiosync.applyAction = function (cue) {
    var tarObj = fcaef.global.$CONTENT_HOLDER.find("#" + cue.ID);
    if (cue.CSS) {
        tarObj.addClass(cue.CSS);
    };
    if (cue.NoCSS) {
        tarObj.removeClass(cue.NoCSS);
    };
};
