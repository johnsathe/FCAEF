var screen = new fcaef.base();
screen.templateData = [
 {
     Type: fcaef.templates.type.SINGLE_LINE,
     ID: "Txt2",
     Text: "Dummy Text",
 }
];
screen.init = function () { fcaef.renderer.render(screen.templateData); };
