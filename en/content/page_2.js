var page = new fcaef.base();
page.templateData = [
 {
     ID: "Page_3",
     Type: fcaef.templates.type.SINGLE_LINE,
     Text: [
         {             ID: "Txt1",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "The breadth and depth of the Advantage change effort highlighted the need for more robust business process management",             CSS: "page3_blueText margin-b5",         },
         {             ID: "Txt2",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "There was a need for several key enablers to improve chances of successful transformation and reduce the risks of such a large change effort, those key enablers included:",             CSS: "page3_blueText margin-b5",         },
         {             ID: "Txt3",             Type: fcaef.templates.type.BULLET,       Text: [         {             ID: "Txt4",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "A standard process framework to drive consistency and integration across work streams",             CSS: "page3_green margin-b5",         },       ],             CSS: "margin-b5",         },
     ],
 }
];
page.init = function () { fcaef.renderer.render(page.templateData); };
