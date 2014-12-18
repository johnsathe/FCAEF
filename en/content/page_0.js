var page = new fcaef.base();
page.templateData = [
 {
     ID: "Page_1",
     Type: fcaef.templates.type.SINGLE_LINE,
     Text: [
         {             ID: "Txt1",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "Welcome to AIRS Overview",             CSS: "page1_txt1",         },
         {             ID: "Txt2",             Type: fcaef.templates.type.TABLE,             Table: [               [                 {                     ID: "Txt2_1",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "R1C1",                 },                 {                     ID: "Txt2_2",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "R1C2",                 },               ],               [                 {                     ID: "Txt2_3",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "R2C1",                 },                 {                     ID: "Txt2_4",                     Type: fcaef.templates.type.SINGLE_LINE,                     Text: "R2C2",                 },               ],             ]         },
     ],
 }
];
page.audioData = {
    File: "page_0",
    CueData: [

    ]
}
page.init = function () { fcaef.renderer.render(page.templateData); };
