fcaef.templateBullet = new fcaef.base();
fcaef.templateBullet.init = function () {
    fcaef.templates.regesterTemplate("BULLET", this);
    log("Template -> Bullet... Loaded");
};
fcaef.templateBullet.render = function (obj) {
    var $retObj = $("<div></div>");
    if (obj.CSS) {
        $retObj.addClass(obj.CSS);
    };
    if (obj.ID) {
        $retObj.attr("id", obj.ID);
    };
    var $ul = $("<ul></ul>");
    for (var b = 0; b < obj.Text.length; b++) {
        var $li = $("<li></li>");
        $li.html(fcaef.renderer.render2(obj.Text[b]));
        $ul.append($li);
    };
    $retObj.append($ul);

    return ret = $retObj.get(0).outerHTML;
};