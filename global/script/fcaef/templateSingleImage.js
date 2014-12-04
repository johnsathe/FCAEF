fcaef.templateSingleImage = new fcaef.base();
fcaef.templateSingleImage.init = function () {
    fcaef.templates.regesterTemplate("SINGLE_IMAGE",this);
    log("Template -> SingleImage... Loaded");
};
fcaef.templateSingleImage.render = function (obj) {
    var $obj = $("<div></div>");
    $obj.attr("id", obj.ID);
    if ((typeof obj.Path) == "string") {
        $obj.append("<img src=\"" + fcaef.global.LANG + "\\" + obj.Path + "\"></img>");
    };
    if ((typeof obj.CSS) == "string") {
        $obj.addClass(obj.CSS);
    };
    if ((typeof obj.ImgCSS) == "string") {
        $obj.find("img").addClass(obj.ImgCSS);
    };
    if ((typeof obj.ImgStyle) == "string") {
        $obj.find("img").attr("style", obj.ImgStyle);
    };
    return $obj.get(0).outerHTML;
};