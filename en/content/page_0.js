var screen = new fcaef.base();
screen.templateData = [
 {
     Type: fcaef.templates.type.LEFT_TEXT_RIGHT_IMAGE,
     ID: "firstText_001",
     Text: [
  {
     ID: "Txt1_0",
     Type: fcaef.templates.type.SINGLE_LINE,
     Text: "Welcome to this course",
  },
  {
     ID: "Txt1_2",
     Type: fcaef.templates.type.SINGLE_LINE,
     Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
],
     Image: [
  {
     ID: "Img_1",
     Type: fcaef.templates.type.SINGLE_IMAGE,
     Path: "media/page_0/img1.jpg",
  },
],
 }
];
screen.init = function () { fcaef.renderer.render(screen.templateData); };
