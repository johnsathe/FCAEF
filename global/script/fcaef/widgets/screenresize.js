var screenresize = new fcaef.base();
screenresize.init = function () {
    var that = this;
    var resizeTriggered=function()
    {
        var retObj = {
            width: $(window).width(),
            height: $(window).height()
        };
        that.dispach(fcaef.events.ON_RESIZE, retObj);
    };
    $(window).resize(resizeTriggered);
};
