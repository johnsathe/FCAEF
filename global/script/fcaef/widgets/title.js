var title = new fcaef.base();
title.init = function () {
    var $titleHolder = $("#" + this.data.titleHolder);
    $titleHolder.html("<div id=\"moduleNameHolder\"></div>");
    $("#moduleNameHolder").append("<div id=\"moduleName\">" + resources.title + "</div>");
    $("#moduleNameHolder").append("<div id=\"pageName\"></div>");
    document.title = resources.title;
    var that = this;
    fcaef.renderer.on(fcaef.renderer.events.BEFORE_RENDER_START,{}, function () { that.beforepagerender(); });
};
title.beforepagerender = function () {
    $("#pageName").html(resources.menu[fcaef.global.CURRENT_PAGE_ID].title);
};