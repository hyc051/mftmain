$(document).ready(function() {
    $(".storage-option").each(function() {
        const lightBlue = "rgb(241, 241, 241)";
        const darkBlue = "rgb(70,130,180)";

        $(this).attr("selected", false);

        $(this).on("click", function() {
            const currentColor = $(this).css("background-color")
            var currName = $(this).text()

            if (currentColor === lightBlue) {
                $(this).css("background-color", darkBlue);
                $(this).attr("selected", true);
                
                $(".storage-option").each(function() {
                    if ($(this).text() != currName) {
                        $(this).attr("selected", false);
                        $(this).css("background-color", lightBlue);
                    }
                })
            } else {
                $(this).css("background-color", lightBlue);
                $(this).attr("selected", false);
            }
        });
    });
    $("#addStorageButton").on("click", function() {
            window.location.href = "./manageStorage.html";
    });
});
