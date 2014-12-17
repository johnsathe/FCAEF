/**
 * Main application namespace
 * @namespace
 */
var fcaef = {};
fcaef.global = {};
/**
 * Framework version
 * @readonly
 * @type {string}
 * @static
 */
fcaef.version = "0.1";
/**
 * Init application
 */
fcaef.init = function () {
    fcaef.global = new fcaef.base();

    fcaef.global.registerEvent("REMOVE_EXTRAS");
    fcaef.global.registerEvent("TOGGLE_MENU");
    fcaef.global.registerEvent("NAVIGATE_TO_PAGEID");

    fcaef.global.LANG = config.lang;
    log("Initalizing started...");
    log("Application framework version " + fcaef.version);
    log("Loading resources from \"" + fcaef.global.LANG + "\" folder");
    
    utils.scriptLoader(fcaef.global.LANG + "/resources.js", function () {
        log("Resources loaded...");
        fcaef.loadWidgets();
    });
};
fcaef.loadWidgets = function () {
    log("Load widget dependencies...");
    var widgetsLoadList = [];

    var onWidgetLoad=function(e)
    {
       
            widgetsLoadList.pop();
            if (widgetsLoadList.length == 0) {
                fcaef.parseResource();
            };
 
    };

    for (widgetKey in resources.widgets) {
        var widgetObj = resources.widgets[widgetKey];
        var widgeUrl = "";
        if (widgetObj.type === fcaef.widget.type.DEFAULT) {
            widgeUrl = "global/script/fcaef/widgets/";
            widgeUrl += widgetKey + ".js";
            log("Loading widget..." + widgeUrl);
            widgetsLoadList.push(widgeUrl);
            new utils.scriptLoader(widgeUrl, onWidgetLoad);
        } else if (widgetObj.type === fcaef.widget.type.SYSTEM) {

        };        
    };
};
fcaef.parseResource=function()
{
    log("Parsing resources...");
    for (widgetKey in resources.widgets) {
        if (resources.widgets[widgetKey].type == fcaef.widget.type.SYSTEM) {
            fcaef[widgetKey].data = resources.widgets[widgetKey].data;
            log("Widget \"" + widgetKey + "\" init...");
            fcaef[widgetKey].init();
        } else {
            window[widgetKey].data = resources.widgets[widgetKey].data;
            log("Widget \"" + widgetKey + "\" init...");
            window[widgetKey].init();
        }
    };
}
$(function () {
    fcaef.init();
});