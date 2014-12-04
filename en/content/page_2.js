var screen = new fcaef.base();
screen.templateData = [
 {
     Type: fcaef.templates.type.SINGLE_IMAGE,
     ID: "Img345",
     Path: "media/page_0/img1.jpg",
 }
];
screen.init = function () { fcaef.renderer.render(screen.templateData); };
