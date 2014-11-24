fcaef.templateSingleLine = new fcaef.base();
fcaef.templateSingleLine.init = function () {
    fcaef.templates.regesterTemplate("SINGLE_LINE",this);
    log("Template -> SingleLine... Loaded");
};
fcaef.templateSingleLine.render = function (obj) {
    var retStr = "";
    if ((typeof obj.Text) == "string") {
        retStr += "<div id=\""+obj.ID+"\">" + obj.Text + "</div>";
    };
    return retStr;
};