var screen = new fcaef.base();
screen.templateData = [
 {
     ID: "Img345",
     Type: fcaef.templates.type.SINGLE_IMAGE,
     Path: "media/page_0/img1.jpg",
 }
];
screen.init = function () { fcaef.renderer.render(screen.templateData); };
