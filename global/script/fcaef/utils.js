var utils = {};
utils.scriptLoader = function (scriptPath, callBack) {
    var Log = {
        e: log
    };
    if (typeof (scriptPath) == "undefined") {
        Log.e("Utils.ScriptLoader:- Invalid scriptPath");
        return;
    }
    var CallBack = function () { };
    var ScriptPath = scriptPath;
    if (typeof (callBack) == "undefined") {

    } else {
        CallBack = callBack;
    };

    var DoItManually = false;
    var ScriptID = null;
    var IsCallBackCalled = false;
    var slf = this;
    var CallCallBack = function (slfm) {
        if (IsCallBackCalled == false) {
            CallBack(slfm);
        }
        IsCallBackCalled = true
    };

    var Init = function () {
        ScriptID = "script_" + Math.round((Math.random() * 100000)).toString();
        var that = this;
        if (navigator.userAgent.indexOf("Chrome") > 1) {
            DoItManually = true;
        };
        if (navigator.userAgent.indexOf("Firefox") > 1) {
            DoItManually = true;
        };
        if (window.location.toString().indexOf("http") >= 0) {
            DoItManually = false;
        } else {
            DoItManually = true;
        };
        if (DoItManually) {
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement('script');
            script.id = ScriptID;
            var xthat = slf;
            script.onload = function () { CallCallBack(xthat); };
            
            script.onreadystatechange = function () {
                if (this.readyState != "complete" && this.readyState != "loaded") return;
                CallCallBack(xthat);
            };
            script.type = 'text/javascript';
            script.src = ScriptPath;
            head.appendChild(script);
        } else {
            $.getScript(ScriptPath, function (e) { CallBack(slf); });
        }
    };

    var Unload = function () {
        $("#" + ScriptID).remove();
    };

    this.ScriptPath = scriptPath;
    var fnArray = String(ScriptPath).split("/");
    this.FileName = fnArray[fnArray.length - 1];
    this.WidgetName = this.FileName.replace(".js", "");

    Init();
    return this;

};
/**
 * Print console log
 * @param {object} str - String or Object
 */
var log = function (str) {
    var logStr = new Date().toLocaleTimeString();
    logStr += ":- " + str;
    var logObj = null;
    if (typeof (str) == "object") {
        logObj = str;
    };
    try {
        console.log(logStr);
        if (logObj != null) {
            console.log(logObj);
        }
    } catch (e) { };
};
/**
 * Print error log
 * @param {object} str - String or Object
 */
var error = function (str) {
    var logStr = new Date().toLocaleTimeString();
    logStr += ":- " + str;
    var logObj = null;
    if (typeof (str) == "object") {
        logObj = str;
    };
    try {
        console.error(logStr);
        if (logObj != null) {
            console.error(logObj);
        }
    } catch (e) { };
};