// $("document").ready(function() {}) was NOT used as this task asks when page loads.
function replaceContent() {
    // This part changes "student name":
    $(".aboutme:contains('| student name | -')").html("I am Farid Vahabzada, the code master.")
    // This part changes "Something about me":
    $("#about p:first").replaceWith(
        "<p class='sthAboutMe'>Proudly living on planet Earth!</p> \
         <p class='sthAboutMe'>Making war or love? Obviously, the latter!</p>"
    )
    $("#about p:last").replaceWith(
        "<p class='sthAboutMe'>I am a dog person, with no dogs!</p> \
         <p class='sthAboutMe'>Travelling when not coding, while coding, and after done with coding!</p>"
    )
}

// Function initiation:
replaceContent()

// For hanging background & font color:
$("document").ready(function() {
    $(".sthAboutMe").click(function() {
        $(this).css({"background-color": "powderblue", "color": "white"})
    })
})