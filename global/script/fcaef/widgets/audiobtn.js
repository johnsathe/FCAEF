var audiobtn = new fcaef.base();
audiobtn.$holder = null;
audiobtn.init = function () {
    var $iconHolder =  $("#" + this.data.iconholder);
    $iconHolder.html("<div id=\"btnAudio\" class=\"audioBtn\"></div>");

    var $textHolder = this.$holder = $("#" + this.data.auditextholder);
    $textHolder.html("<div id=\"txtAudioText\" class=\"audioBtn\">" + resources.string.global.getString("audioOn") + "</div>");

    $(".audioBtn").on("click", function (e) { audiobtn.toggleMute(); });

    var that = this;
    fcaef.navigation.on(fcaef.navigation.events.PAGE_LOAD_STARTED, {}, function (e) { that.onBeforePageLoad(e) });
    fcaef.audio.on(fcaef.audio.events.ON_AUDIO_START, {}, function (e) { that.onAudioStart(e) });
};
audiobtn.toggleMute = function () {
    if ($(".audioBtn").attr("disabled") != undefined) { return };
    if($(".audioBtn").attr("mute") != undefined)
    {
        fcaef.audio.unmute();
        $(".audioBtn").removeAttr("mute");
        this.$holder.find("#txtAudioText").html(resources.string.global.getString("audioOn"));
    } else {
        fcaef.audio.mute();
        $(".audioBtn").attr("mute", "mute");
        this.$holder.find("#txtAudioText").html(resources.string.global.getString("audioOff"));
    }
};
audiobtn.onAudioStart = function (e) {
    $(".audioBtn").removeAttr("disabled");
};
audiobtn.onBeforePageLoad = function (e) {
    $(".audioBtn").attr("disabled", "disabled");
};