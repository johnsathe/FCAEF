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
    };
    if ((typeof obj.CSS) == "string") {
        $obj.addClass(obj.CSS);
    };
    return $obj.get(0).outerHTML;
};