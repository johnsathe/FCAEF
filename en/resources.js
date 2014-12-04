﻿var resources = {
    title: "Sample Application",
    widgets: {
        screenresize: { type: fcaef.widget.type.DEFAULT },
        layout: {
            type: fcaef.widget.type.DEFAULT,
            data: [
                {
                    id: "mainRow1",
                    css: "topBand",
                    height: 112,
                    cols: [
                        {
                            id: "topbandleft",
                            css:"topbandcols",
                            width:410
                        },
                        {
                            id: "topbandright",
                            css: "topbandcols",
                             width: "auto"
                        }
                    ]
                },
                {
                    id: "mainRow2",
                    css: "middleBand",
                    height: "auto",
                    contentHolder:true
                },
                {
                    id: "mainRow3",
                    css: "botBand",
                    height: 50,
                    cols: [
                        {
                            id: "bottomcol1",
                            css:"bottomcol",
                            width: 27
                        },
                        {
                            id: "bottomcol2",
                            css:"bottomcol",
                            width: 35
                        },
                        {
                            id: "bottomcol3",
                            css: "bottomcol",
                            width: 87
                        },
                        {
                            id: "bottomcol4",
                            css: "bottomcol",
                            width: 119
                        },
                        {
                            id: "bottomcol5",
                            css: "bottomcol",
                            width: "auto"
                        }
                    ]
                }
            ]
        },
        backnext: {
            type: fcaef.widget.type.DEFAULT,
            data: {
                target: "backnextholder"
            }
        },
        templates: {
            type: fcaef.widget.type.SYSTEM
        }, 
        renderer: {
            type: fcaef.widget.type.SYSTEM
        },
        templateSingleLine: {
            type: fcaef.widget.type.SYSTEM
        },
        templateSingleImage: {
            type: fcaef.widget.type.SYSTEM
        },
        templateLeftTextRightImage: {
            type: fcaef.widget.type.DEFAULT
        },
        navigation: {
            type: fcaef.widget.type.SYSTEM
        },
        title: {
            type: fcaef.widget.type.DEFAULT,
            data: {
                titleHolder: "topbandright"
            }
        },
        menubtn: {
            type: fcaef.widget.type.DEFAULT,
            data: {
                btnholder: "bottomcol4"
            }
        },
        audiobtn: {
            type: fcaef.widget.type.DEFAULT,
            data: {
                iconholder: "bottomcol2",
                auditextholder: "bottomcol3"
            }
        }
    },
    menu: [
        { pageID: "page_0", title: "Screen 1" },
        { pageID: "page_1", title: "Screen 2" },
        { pageID: "page_2", title: "Screen 3" }
    ]
};
resources.string = {};
resources.string.global = {};
resources.string.global.audioOn = "Audio On";
resources.string.global.menu = "Menu";

