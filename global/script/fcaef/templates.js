fcaef.templates = new fcaef.base();
fcaef.templates.list = [];
fcaef.templates.type = {};
fcaef.templates.init = function () {
    log("templates loaded...");
};
fcaef.templates.regesterTemplate = function (templateName, cntx) {
    var newTempl = {
        name: templateName,
        context: cntx
    };
    fcaef.templates.list.push(newTempl);
    fcaef.templates.type[templateName] = templateName;
};