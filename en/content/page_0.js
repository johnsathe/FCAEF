var screen = new fcaef.base();
screen.templateData = [
    {
        ID: "txt1",
        Type: fcaef.templates.type.SINGLE_LINE,
        Text:"Hello world"
    },
    {
        ID: "txt2",
        Type: fcaef.templates.type.SINGLE_LINE,
        Text: "Hello Manish"
    }
];
screen.init = function () {
    fcaef.renderer.render(screen.templateData);
};