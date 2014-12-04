var screen = new fcaef.base();
screen.templateData = [
 {
     ID: "Txt2",
     Type: fcaef.templates.type.SINGLE_LINE,
     Text: "Dummy Text",
 }
];
screen.init = function () { fcaef.renderer.render(screen.templateData); };
