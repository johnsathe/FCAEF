var screen = new fcaef.base();
screen.templateData = [
 {
     ID: "Txt1",
     Type: fcaef.templates.type.LEFT_TEXT_RIGHT_IMAGE,
     Text: [
         {             ID: "Txt1_0",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "Excepteur 'sint' occaecat cupidatat non proident,/ su@nt in culpa qui officia deserunt mollit anim id est laborum.",             CSS: "bold-text",         },
         {             ID: "Txt1_2",             Type: fcaef.templates.type.SINGLE_LINE,             Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",             CSS: "italic-text gutter10-t",         },
     ],
     Image: [
         {            ID: "Img345",            Type: fcaef.templates.type.SINGLE_IMAGE,            Path: "media/page_0/img1.jpg",         },
     ],
 }
];
screen.init = function () { fcaef.renderer.render(screen.templateData); };
