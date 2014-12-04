fcaef.renderer = new fcaef.base();
fcaef.renderer.registerEvent("BEFORE_RENDER_START");
fcaef.renderer.registerEvent("AFTER_RENDER");
fcaef.renderer.init = function () {
};
fcaef.renderer.render = function (pageData) {
    if (!this.check(this.events.BEFORE_RENDER_START)) { return; }
    log("rendering...");
    var retStr = "";
    retStr += fcaef.renderer.render1(pageData);
    
    fcaef.global.$CONTENT_HOLDER.empty();
    fcaef.global.$CONTENT_HOLDER.html(retStr);

    this.dispach(this.events.AFTER_RENDER, { retStr: retStr });
};
fcaef.renderer.render1 = function (pageData) {
    var retStr = "";
    for (var i = 0; i < pageData.length; i++) {
        var dispObj = pageData[i];
        retStr += this.render2(dispObj);
    };
    return retStr;
};
fcaef.renderer.render2 = function (pageData) {
    var retStr = "";
    if (String(pageData.Type) in fcaef.templates.type) {
        retStr += this.process(pageData);
    } else {
        error("Template for object '" + String(pageData.ID) + "' not found.....missing template " + String(pageData.Type));
    };
    return retStr;
};
fcaef.renderer.process = function (pageData) {
    var retStr = "";
    for (var j = 0; j < fcaef.templates.list.length; j++) {
        var mTemp = fcaef.templates.list[j];
        if (mTemp.name == pageData.Type) {
            retStr += mTemp.context.render(pageData);
        };
    };
    return retStr;
};