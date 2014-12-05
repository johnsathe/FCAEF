fcaef.templateSingleLine = new fcaef.base();
fcaef.templateSingleLine.init = function () {
    fcaef.templates.regesterTemplate("SINGLE_LINE",this);
    log("Template -> SingleLine... Loaded");
};
fcaef.templateSingleLine.render = function (obj) {
    var $obj = $("<div></div>");
    if ((typeof obj.Text) == "string") {
        $obj.attr("id", obj.ID);
        $obj.append(obj.Text);
    } else if ($.isArray(obj.Text)) {
        $obj = $(fcaef.renderer.render1(obj.Text));
    };

    if ((typeof obj.CSS) == "string") {
        $obj.addClass(obj.CSS);
    };

    var ret = "";

    if ($obj.length > 1) {
        for (var i = 0; i < $obj.length; i++) {
            ret += $obj.get(i).outerHTML;
        };
    } else {
        ret = $obj.get(0).outerHTML;
    }

    return ret;
};