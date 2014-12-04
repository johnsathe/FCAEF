var audiobtn = new fcaef.base();
audiobtn.init = function () {
    var $iconHolder = $("#" + this.data.iconholder);
    $iconHolder.html("<div id=\"btnAudio\"></div>");

    var $textHolder = $("#" + this.data.auditextholder);
    $textHolder.html("<div id=\"txtAudioText\">" + resources.string.global.audioOn + "</div>");
};