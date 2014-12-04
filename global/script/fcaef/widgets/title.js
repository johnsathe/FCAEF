var title = new fcaef.base();
title.init = function () {
    var $titleHolder = $("#" + this.data.titleHolder);
    $titleHolder.html("<div id=\"moduleNameHolder\"></div>");
    $("#moduleNameHolder").append("<div id=\"moduleName\">Module Name</div>");
    $("#moduleNameHolder").append("<div id=\"pageName\">Page Title</div>");
    var that = this;
    fcaef.renderer.on(fcaef.renderer.events.BEFORE_RENDER_START,{}, function () { that.beforepagerender(); });
};
title.beforepagerender = function () {
    $("#pageName").html(resources.menu[fcaef.global.CURRENT_PAGE_ID].title);
};