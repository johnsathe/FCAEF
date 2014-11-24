var layout = new fcaef.base();
layout.required=['screenresize']
layout.init = function () {
    if (!this.check(fcaef.events.BEFORE_INIT)) { return;}
    var that=this;
    log("Widget layout init...");
    $("body").html("<div id=\"mainBody\" class=\"container-fluid\"></div>");
    var mainBody = $("#mainBody");
    for (var i = 0; i < this.data.length; i++) {
        var rowData = this.data[i];
        mainBody.append("<div id=\"" + rowData.id + "\" class=\"row-fluid\"></div>");
        var thisRow = mainBody.find("#" + rowData.id);
        if (rowData.css) {
            thisRow.addClass(rowData.css);
        };
        if ("contentHolder" in rowData) {
            if (rowData.contentHolder) {
                fcaef.global.$CONTENT_HOLDER = thisRow;
            };
        };
        if ($.isArray(rowData.cols)) {
            for (var c = 0; c < rowData.cols.length; c++) {
                var colData=rowData.cols[c];
                thisRow.append("<div id=\"" + colData.id + "\">Hello</div>");
                var thisCol = thisRow.find("#" + colData.id);
                if (colData.css) {
                    thisCol.addClass(colData.css);
                };
            };
        };
    };
    screenresize.on(fcaef.events.ON_RESIZE, {}, function (dims) { that.onScreenResize(dims) });
    $(window).resize();

    //mainBody.find("#mainRow3").append("<div id=\"navBtnHolder\" class=\"col-md-2 col-md-offset-10\"></div>");
    //mainBody.find("#navBtnHolder").append("<button type=\"button\"  class=\"btn btn-default\">Previous</button>");

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