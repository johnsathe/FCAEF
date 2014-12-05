var screen = new fcaef.base();
screen.templateData = [
 {
     ID: "Txt2",
     Type: fcaef.templates.type.SINGLE_LINE,
     Text: [
         {             ID: "Txt1_0",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",             CSS: "bold-text",         },
         {             ID: "Img3454",             Type: fcaef.templates.type.SINGLE_IMAGE,             Path: "media/page_0/img1.jpg",         },
     ],
 }
];
screen.init = function () { fcaef.renderer.render(screen.templateData); };
