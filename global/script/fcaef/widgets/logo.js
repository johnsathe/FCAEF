var logo = new fcaef.base();
logo.init = function () {
    log(this.data);

    $("#" + this.data.target).html("<div class=\"logo\"><img src=\"global/images/logo.jpg\"></div>");
};