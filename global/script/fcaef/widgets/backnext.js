var backnext = new fcaef.base();
backnext.target = null;
backnext.init = function () {
    log("Widget backnext init...");
    var target = $("#" + this.data.target);
    
    var str = "";
    str += "<div class=\"bottomnavholder\">";
    str += "<div id=\"btnPrevious\"></div>";
    str += "<div id=\"btnNext\"></div>";
    str += "</div>";

    target.html(str);

    target.find("#btnNext").bind("click", function () { fcaef.navigation.next() });
    target.find("#btnPrevious").bind("click", function () { fcaef.navigation.previous() });

    this.target = target;

    var that = this;
    fcaef.navigation.on(fcaef.navigation.events.PAGE_LOAD_STARTED, {}, function (e) { that.onBeforePageLoad(e) });
    fcaef.navigation.on(fcaef.navigation.events.PAGE_LOAD_COMPLETE, {}, function (e) { that.onAfterPageLoad(e) });

};
backnext.onBeforePageLoad=function(e)
{
    this.target.find("#btnNext").attr("disabled", "disabled");
    this.target.find("#btnPrevious").attr("disabled", "disabled");
    
};
backnext.onAfterPageLoad = function (e) {
    var eveData = e;
    if (eveData.PageID < eveData.TotalPages - 1) {
        this.target.find("#btnNext").removeAttr("disabled");
    };
    if (eveData.PageID > 0) {
        this.target.find("#btnPrevious").removeAttr("disabled");
    };
};