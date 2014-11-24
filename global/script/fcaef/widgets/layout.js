var layout = new fcaef.base();
layout.required=['screenresize']
layout.init = function () {
    this.dispach(fcaef.events.BEFORE_INIT);
    var that=this;
    log("Widget layout init...");
    $("body").html("<div id=\"mainBody\" class=\"container-fluid\"></div>");
    var mainBody = $("#mainBody");
    for (var i = 0; i < this.data.length; i++) {
        var rowData = this.data[i];
        mainBody.append("<div id=\"" + rowData.id + "\" class=\"row-fluid\"></div>");
        var thisRow = mainBody.find("#" + rowData.id);
        if(rowData.css)
        {
            thisRow.addClass(rowData.css);
        }
    };
    screenresize.on(fcaef.events.ON_RESIZE, {}, function (dims) { that.onScreenResize(dims) });
    $(window).resize();
    this.dispach(fcaef.events.AFTER_INIT);
};
layout.onScreenResize = function (dims) {
    var totalFixedHeight = 0;
    var noOfAutoHeight = 0;
    for (var i = 0; i < this.data.length; i++) {
        var rowData = this.data[i];
        var $row = $("#" + rowData.id);
        $row.css({
            "height": rowData.height
        });
        if (rowData.height != "auto") {
            totalFixedHeight += rowData.height;
        } else {
            noOfAutoHeight++;
        }
    };
    var remHeightForAuto = dims.height - totalFixedHeight;
    var eachAutoHeight = remHeightForAuto / noOfAutoHeight;
    for (var i = 0; i < this.data.length; i++) {
        var rowData = this.data[i];
        var $row = $("#" + rowData.id);
        if (rowData.height == "auto") {
            $row.css({
                "height": eachAutoHeight
            });
        }
    }
};