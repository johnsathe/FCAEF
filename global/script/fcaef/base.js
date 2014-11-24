/**
 * Base class
 * @constructor
 * @returns {fcaef.base}
 */
fcaef.base = function () {
    this._events = [];
    this.required = [];
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
    off: function (event, callBack) { },
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
    /**
     * Init widget
     */
    init: function () { },
    _events:[],
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
    DEFAULT: 0,
    CUSTOM: 1
};
