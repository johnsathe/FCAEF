var page = new fcaef.base();
page.templateData = [
 {
     ID: "Page_2",
     Type: fcaef.templates.type.LEFT_TEXT_RIGHT_IMAGE,
     Text: [
         {             ID: "Txt1",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "The ARIS Design platform enables Freddie Mac to realize the benefits of Business Process Management.",             CSS: "hideme",         },
         {             ID: "Txt2",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "At the end of this module, you will be able to:",             CSS: "gutter10-t hideme",         },
         {             ID: "Txt3",             Type: fcaef.templates.type.BULLET,             CSS: "gutter10-t",       Text: [         {             ID: "Txt4",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "Describe ARIS and how it will be used at Freddie Mac.",             CSS: "hideme",         },         {             ID: "Txt5",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "Understand the benefits of using ARIS",             CSS: "hideme",         },         {             ID: "Txt6",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "Articulate the content that will be created and maintained in ARIS",             CSS: "hideme",         },         {             ID: "Txt7",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "Describe Freddie Mac's process architecture",             CSS: "hideme",         },       ],         },
     ],
     Image: [
         {            ID: "Img1",            Type: fcaef.templates.type.SINGLE_IMAGE,            Path: "media/page_1/img1.png",            CSS: "hideme",         },
     ],
 }
];
page.audioData = {   File: "page_1",   CueData:[       {         ID: "Img1",         TriggerOn: "0.1",         CSS: "fadeIn",       },       {         ID: "Txt1",         TriggerOn: "0.1",         CSS: "fadeIn",       },       {         ID: "Txt2",         TriggerOn: "6",         CSS: "fadeIn",       },       {         ID: "Txt4",         TriggerOn: "9",         CSS: "fadeIn",       },       {         ID: "Txt5",         TriggerOn: "13",         CSS: "fadeIn",       },       {         ID: "Txt6",         TriggerOn: "16",         CSS: "fadeIn",       },       {         ID: "Txt7",         TriggerOn: "21",         CSS: "fadeIn",       },      ]}
page.init = function () { fcaef.renderer.render(page.templateData); };
