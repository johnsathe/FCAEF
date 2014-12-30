var page = new fcaef.base();
page.templateData = [
 {
     ID: "Page_1",
     Type: fcaef.templates.type.SINGLE_LINE,
     Text: [
         {             ID: "Txt1",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "Welcome to AIRS Overview",             CSS: "page1_txt1_0 hideme",         },
         {             ID: "Txt2",             Type: fcaef.templates.type.TABLE,             CSS: "page1_table hideme",             Table: [               [                 {                     ID: "Txt2_1",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "Intended audience",                 },                 {                     ID: "Txt2_2",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "Anyone in Freddie Mac who wants to learn more about ARIS and BPM",                 },               ],               [                 {                     ID: "Txt2_3",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "Prerequisite",                 },                 {                     ID: "Txt2_4",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "None",                 },               ],               [                 {                     ID: "Txt2_5",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "Approximate time",                 },                 {                     ID: "Txt2_6",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "20 minutes",                 },               ],             ]         },
     ],
 }
];
page.audioData = {   File: "page_0",   CueData:[       {         ID: "Txt1",         TriggerOn: "0.1",         CSS: "fadeIn",       },       {         ID: "Txt1",         TriggerOn: "0.1",         CSS: "page1_txt1_1",       },       {         ID: "Txt1",         TriggerOn: "3.0",         CSS: "page1_txt1_2",       },       {         ID: "Txt1",         TriggerOn: "3.5",         CSS: "page1_txt1border",       },       {         ID: "Txt2",         TriggerOn: "3.4",         CSS: "fadeIn",       },      ]}
page.init = function () { fcaef.renderer.render(page.templateData); };
