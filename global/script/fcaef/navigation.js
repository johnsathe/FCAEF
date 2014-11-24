fcaef.navigation = new fcaef.base();
fcaef.navigation.registerEvent("BEFORE_PAGE_LOAD");
fcaef.navigation.registerEvent("PAGE_LOAD_STARTED");
fcaef.navigation.registerEvent("PAGE_LOAD_COMPLETE");
fcaef.navigation.registerEvent("AFTER_PAGE_LOAD");
fcaef.navigation.registerEvent("BEFORE_PAGE_INIT");
fcaef.navigation.registerEvent("AFTER_PAGE_INIT");
fcaef.navigation.registerEvent("BEFORE_NEXT");
fcaef.navigation.registerEvent("BEFORE_PREVIOUS");
fcaef.navigation.resMenuData = null;
fcaef.navigation.init = function () {
    log("Initalizing navigation...");
    if ($.isArray(resources.menu)) {
        fcaef.navigation.resMenuData = [].concat(resources.menu);
    } else {
        error("'resources.menu' is not an Array");
        return;
    };
    fcaef.global.CURRENT_PAGE_ID = 0;    
    this.dispach(fcaef.events.AFTER_INIT, {});
    fcaef.navigation.loadPage();
};
fcaef.navigation.loadPage = function () {
    if (!this.check(this.events.BEFORE_PAGE_LOAD)) { return; }
    var pageToLoadObj = resources.menu[fcaef.global.CURRENT_PAGE_ID];
    if (pageToLoadObj == null || (typeof pageToLoadObj) != "object") {
        error("invalid page object in resource.menu at index " + fcaef.global.CURRENT_PAGE_ID);
        return;
    };
    this.dispach(this.events.PAGE_LOAD_STARTED, { PageID: fcaef.global.CURRENT_PAGE_ID, TotalPages: resources.menu.length });
    var pageURL = config.lang + "/content/" + pageToLoadObj.pageID + ".js";
    log("loading page..." + pageURL);
    var that = this;
    new utils.scriptLoader(pageURL, function () { that.dispach(that.events.AFTER_PAGE_LOAD, {}); that.pageJSLoaded() });
};
fcaef.navigation.pageJSLoaded = function () {    
    if (!this.check(this.events.BEFORE_PAGE_INIT)) { return; }
    log("pageJS loaded");
    screen.init();
    this.dispach(this.events.AFTER_PAGE_INIT, {});
    this.dispach(this.events.PAGE_LOAD_COMPLETE, { PageID: fcaef.global.CURRENT_PAGE_ID, TotalPages: resources.menu.length});
};
fcaef.navigation.next = function () {
    if (!this.check(this.events.BEFORE_NEXT)) { return; }
    if (fcaef.global.CURRENT_PAGE_ID < resources.menu.length-1) {
        fcaef.global.CURRENT_PAGE_ID++;
        fcaef.navigation.loadPage();
    };
};
fcaef.navigation.previous = function () {
    if (!this.check(this.events.BEFORE_PREVIOUS)) { return; }
    if(fcaef.global.CURRENT_PAGE_ID >0)
    {
        fcaef.global.CURRENT_PAGE_ID--;
        fcaef.navigation.loadPage();
    }
};
