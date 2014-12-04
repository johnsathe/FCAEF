var templateLeftTextRightImage = new fcaef.base();
templateLeftTextRightImage.init = function () {
    fcaef.templates.regesterTemplate("LEFT_TEXT_RIGHT_IMAGE", this);
    log("Template -> LEFT_TEXT_RIGHT_IMAGE... Loaded");
};
templateLeftTextRightImage.render = function (obj) {
    var retStr = "";

    retStr += "<div class=\"col-md-6\">";
    retStr += fcaef.renderer.render1(obj.Text);    
    retStr += "</div>";

    retStr += "<div class=\"col-md-6 tmpLeftTextRightImage_imgHolder clear\">";
    retStr += fcaef.renderer.render1(obj.Image);
    retStr += "</div>";

    return retStr;
};