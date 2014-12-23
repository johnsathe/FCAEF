/**
 * Base class
 * @constructor
 * @returns {fcaef.base}
 */
fcaef.base = function () {
    this._events = [];
    this.required = [];
    this.events = {};
    $.extend(this.events, fcaef.events);
    return this;
};
fcaef.base.prototype = {
    /**
     * attach event
     * @abstract
     * @param {fcaef.events} event - Event type
     * @param {object} data - JSON object
     * @param {function} callBack - Callback function
     */
    on: function (event, data, callBack) {
        this._events.push({
            event: event,
            data: data,
            callBack: callBack
        });
    },
    /**
     * Remove event
     * @abstract
     */
    off: function (event, callBack) {
        var eveObj = {
            event: event,
            callBack: callBack
        };
        eveObj.callBack = String(eveObj.callBack);
        eveObj = JSON.stringify(eveObj);
        for (var i = 0; i < this._events.length ; i++)
        {
            var aObj = {
                event: this._events[i].event,
                callBack: this._events[i].callBack
            };
            aObj.callBack = String(aObj.callBack);
            aObj = JSON.stringify(aObj);            
            if(eveObj==aObj)
            {
                this._events.splice(i, 1);
            }
        }
    },
    /**
     * Dispach event
     * @abstract
     * @param {fcaef.events} event - Event type
     * @param {object} retObj - JSON object
     */
    dispach: function (event, retObj)
    {
        for (var e = 0; e < this._events.length; e++) {  
            var eveObj = this._events[e];
            if (eveObj.event == event) {
                retObj.data = eveObj.data;
                eveObj.callBack(retObj);
            };
        };
    },
    check:function(event)
    {
        var ret = true;
        for (var e = 0; e < this._events.length; e++) {
            var eveObj = this._events[e];
            if (eveObj.event == event) {
                var retObj = {};
                retObj.data = eveObj.data;
                var cRet = eveObj.callBack(retObj);
                if (cRet == false) {
                    ret = false;
                };
            };
        };
        return ret;
    },
    /**
     * Init widget
     */
    init: function () { },
    _events: [],
    events: {},
    registerEvent:function(eventType){
        if(String(eventType) in this.events)
        {
            log("event '" + eventType + "' already exist...");
            return;
        } else {
            this.events[String(eventType)] = String(eventType);
        }
        
    },
    required: [],
    /**
     * Widget data
     * @type {object}
     */
    data:null
};
/*
 * Widgets
 * @inner
 */
fcaef.widget = {};
/*
 * Widget type
 * @enum {number}
 * @readonly
 */
fcaef.widget.type = {
    SYSTEM:0,
    DEFAULT: 1,
    CUSTOM: 2
};
