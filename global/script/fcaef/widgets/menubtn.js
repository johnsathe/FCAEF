var menubtn = new fcaef.base();
menubtn.init = function () {
    var $btnholder = $("#" + this.data.btnholder);

    var str = "";    
    str += "<div id=\"btnMenu\">";
    str += "    <div class=\"menuicon\"></div>";
    str += "    <div class=\"menutext\">" + resources.string.global.getString("menu") + "</div>";
    str += "    <div></div>";
    str += "</div>";

    $btnholder.html(str);
    var that = this;
    $btnholder.find("#btnMenu").on("click", {}, function (e) { that.onClick(e); });
};
menubtn.onClick = function (e) {
    fcaef.global.dispach(fcaef.global.events.TOGGLE_MENU, {});
};