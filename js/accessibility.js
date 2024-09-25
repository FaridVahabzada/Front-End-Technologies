/*// Method 1 WITH a need for .css file:
$("document").ready(function() {
    // Determining need for the accessibility assistance:
    $("#accessToggle").change(function() {
        $("p").toggleClass("changeFontSize")
    })
})*/

// Method 2 WITHOUT a need for .css file:
$("document").ready(function() {
    $("#accessToggle").change(function() {
        // Defining variables responsible for font size changes:
        //let currentFontSize = parseInt($("p").css("font-size"))
        //let smallerFontSize = currentFontSize / 1.2
        //let biggerFontSize = 1.2 * currentFontSize
        // Determining need for the accessibility assistance:
        if (this.checked) {
            $("p").css("font-size", '1.2em')
        } else {
            $("p").css("font-size", '1em')
        }
    })
})