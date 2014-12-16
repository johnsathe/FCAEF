var menu = new fcaef.base();
menu.$listholder = null;
menu.$menuholder = null;
menu._defState = "close";
menu.init = function () {
    $("body").append("<div id=\"menuholder\"></div>");
    var holder = menu.$menuholder = $("#menuholder");
    holder.append("<div class=\"title\">" + resources.string.global.menu + "</div>");
    holder.append("<div id=\"menulistholder\"><div class=\"list\"></div></div>");

    var listHolder = this.$listholder = $("#menulistholder .list");
    var menulist = resources.menu;
    var that = this;
    for (var i = 0; i < menulist.length; i++) {
        var item = $("<div>" + menulist[i].title + "</div>");
        item.attr("pageid", menulist[i].pageID);
        item.addClass(menulist[i].pageID);
        item.on("click", { obj: menulist[i]}, function (e) { that.onItemClicked(e.data); })
        listHolder.append(item);
    };
    this.$menuholder.css({
        "left": (this.$menuholder.outerWidth() * -1)
    });
    fcaef.navigation.on(fcaef.navigation.events.PAGE_LOAD_COMPLETE, {}, function (e) { that.updateState(e); });
    fcaef.global.on(fcaef.global.events.TOGGLE_MENU, {}, function (e) { that.ontoggle(e); });
};
menu.onItemClicked = function (e) {
    fcaef.global.dispach(fcaef.global.events.NAVIGATE_TO_PAGEID, { pageID: e.obj.pageID });
};
menu.updateState=function(e)
{
    this.$listholder.find("div").removeAttr("current");
    this.$listholder.find(".page_" + e.PageID).attr("current", "");
};
menu.ontoggle = function (e) {
    if (this._defState == "open") {
        this.$menuholder.animate({
            "left": (this.$menuholder.outerWidth() * -1)
        });
        this._defState = "close";
    } else {
        this.$menuholder.animate({
            "left": 0
        });
        this._defState = "open";
    };
};