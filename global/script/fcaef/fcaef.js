/**
 * Main application namespace
 * @namespace
 */
var fcaef = {};
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
    log("Initalizing started...");
    log("Application framework version " + fcaef.version);
    log("Loading resources from \"" + config.lang + "\" folder");
    
    utils.scriptLoader(config.lang + "/resources.js", function () {
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
        };
        widgeUrl += widgetKey + ".js";
        log("Loading widget..." + widgeUrl);
        widgetsLoadList.push(widgeUrl);
        new utils.scriptLoader(widgeUrl, onWidgetLoad);
    };
};
fcaef.parseResource=function()
{
    log("Parsing resources...");
    for (widgetKey in resources.widgets) {
        log("Init.." + widgetKey);
        window[widgetKey].data = resources.widgets[widgetKey].data;
        window[widgetKey].init();
    };
    fcaef.navigation.init();
}
$(function () {
    fcaef.init();
});