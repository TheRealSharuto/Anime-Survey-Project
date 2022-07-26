$(document).ready(function () {
    $('input[class=checkbox-one]').on('change', function (e) {
        if ($('input[class=checkbox-one]:checked').length > 3) {
            $(this).prop('checked', false);
            alert("Please only choose 3 in this section");
        }
    });

    $('input[class=checkbox-two]').on('change', function (e) {
        if ($('input[class=checkbox-two]:checked').length > 3) {
            $(this).prop('checked', false);
            alert("Please only choose 3 in this section");
        }
    });

    $('input[class=checkbox-three]').on('change', function (e) {
        if ($('input[class=checkbox-three]:checked').length > 3) {
            $(this).prop('checked', false);
            alert("Please only choose 3 in this section");
        }
    });

    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });
})

