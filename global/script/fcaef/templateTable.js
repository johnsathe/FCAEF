fcaef.templateTable = new fcaef.base();
fcaef.templateTable.init = function () {
    fcaef.templates.regesterTemplate("TABLE",this);
};
fcaef.templateTable.render = function (obj) {

    var $retObj = $("<div></div>");
    if (obj.CSS) {
        $retObj.addClass(obj.CSS);
    };
    if (obj.ID) {
        $retObj.attr("id",obj.ID);
    };
    var $table = $("<table></table>");
    if ($.isArray(obj.Table) == false) { error("Invalid table object, expected array"); return; }
    for (var i = 0; i < obj.Table.length; i++) {
        var $row = $("<tr></tr>");
        var cols = obj.Table[i];
        if ($.isArray(cols) == false) { error("Invalid table column data, expected array at index " + i); return; }
        for (var j = 0; j < cols.length; j++) {
            var $cell = $("<td></td>");
            if ($.isArray(cols[j])) {
                $cell.html(fcaef.renderer.render1(cols[j]));
            } else {
                $cell.html(fcaef.renderer.render2(cols[j]));
            };            
            $row.append($cell);
        };
        $table.append($row);
    };
    $retObj.append($table);
    return ret = $retObj.get(0).outerHTML;
};