var resources = {
    title: "Sample Application",
    widgets: {
        screenresize: { type: fcaef.widget.type.DEFAULT },
        layout: {
            type: fcaef.widget.type.DEFAULT,
            data: [
                {
                    id: "mainRow1",
                    css: "topBand",
                    height:56
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
                    height: 60,
                    cols: [
                        {
                            id: "menuHolder",
                            css: "col-md-1"
                        },
                        {
                            id: "slider",
                            css: "col-md-8"
                        },
                        {
                            id: "navbuttons",
                            css: "col-xs-3"
                        }
                    ]
                }
            ]
        },
        backnext: {
            type: fcaef.widget.type.DEFAULT,
            data: {
                target: "navbuttons"
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
        navigation: {
            type: fcaef.widget.type.SYSTEM
        }
    },
    menu: [
        { pageID: "page_0", title: "Screen 1" },
        { pageID: "page_1", title: "Screen 2" },
        { pageID: "page_2", title: "Screen 3" }
    ]
};
