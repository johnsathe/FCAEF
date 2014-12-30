var controls = new fcaef.base();
controls.target = null;
controls.init = function () {
    var target = $("#" + this.data.target);
    var that = this;
    
    var str = "";
    str += "<div class=\"bottomnavholder\">";
    str += "<div id=\"btnPlayPause\"></div>";
    str += "<div id=\"btnReplay\" title=\"" + resources.string.global.getString("replay") + "\"></div>";
    str += "<div id=\"btnPrevious\" title=\"" + resources.string.global.getString("previous") + "\"></div>";
    str += "<div id=\"btnNext\" title=\"" + resources.string.global.getString("next") + "\"></div>";
    str += "</div>";

    target.html(str);

    target.find("#btnNext").bind("click", function () { fcaef.navigation.next(); });
    target.find("#btnPrevious").bind("click", function () { fcaef.navigation.previous(); });
    target.find("#btnPlayPause").bind("click", function (e) { that.toggleAudio(e); });
    target.find("#btnReplay").bind("click", function (e) { that.replayScreen(e); });

    this.target = target;

    var that = this;
    fcaef.navigation.on(fcaef.navigation.events.PAGE_LOAD_STARTED, {}, function (e) { that.onBeforePageLoad(e) });
    fcaef.navigation.on(fcaef.navigation.events.PAGE_LOAD_COMPLETE, {}, function (e) { that.onAfterPageLoad(e) });

    fcaef.audio.on(fcaef.audio.events.ON_AUDIO_PLAY, {}, function (e) { that.onAudioStart(e) });
    fcaef.audio.on(fcaef.audio.events.ON_AUDIO_PAUSE, {}, function (e) { that.onAudioPause(e) });

};
controls.replayScreen = function (e) {
    var thisObj = $(e.currentTarget);
    if (thisObj.attr("disabled") != undefined) { return; }
    fcaef.navigation.loadPage();
};
controls.toggleAudio = function (e) {
    var thisObj = $(e.currentTarget);
    if (thisObj.attr("disabled") != undefined) { return; }
    
    if (thisObj.attr("playing") != undefined) {
        fcaef.audio.pauseAudio();
    } else {
        fcaef.audio.resumeAudio();
    }
};
controls.onAudioPause = function (e) {
    this.target.find("#btnPlayPause").removeAttr("playing").attr("title", resources.string.global.getString("play"));
};
controls.onAudioStart = function (e) {
    this.target.find("#btnPlayPause").removeAttr("disabled").attr("playing","playing").attr("title", resources.string.global.getString("pause"));
};
controls.onBeforePageLoad=function(e)
{
    this.target.find("#btnNext").attr("disabled", "disabled");
    this.target.find("#btnPrevious").attr("disabled", "disabled");
    this.target.find("#btnReplay").attr("disabled", "disabled");
    this.target.find("#btnPlayPause").attr("disabled", "disabled").removeAttr("playing");
    
};
controls.onAfterPageLoad = function (e) {
    var eveData = e;
    if (eveData.PageID < eveData.TotalPages - 1) {
        this.target.find("#btnNext").removeAttr("disabled");
    };
    if (eveData.PageID > 0) {
        this.target.find("#btnPrevious").removeAttr("disabled");
    };
    this.target.find("#btnReplay").removeAttr("disabled");
};