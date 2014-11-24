var backnext = new fcaef.base();
backnext.target = null;
backnext.init = function () {
    log("Widget backnext init...");
    var target = $("#" + this.data.target);
    
    var str = "";
    str += "<div class=\"row navholder\">";
    str += " <div class=\"col-xs-4\"><button id=\"btnPrevious\" type=\"button\" class=\"btn\">Previous</button></div>";
    str += " <div class=\"col-xs-4\">0 of 9</div>";
    str += " <div class=\"col-xs-4\"><button id=\"btnNext\" type=\"button\" class=\"btn\">Next</button></div>";
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