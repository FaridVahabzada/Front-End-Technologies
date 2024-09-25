$(document).ready(function() {
    // "Like" button functionality:
    $("#liveToastBtn").click(function() {
        $("#liveToast").toast("show")
    })
    // "I'm bored" button functionality:
    $("#boredBtn").click(function() {
        $.ajax ({
            url: 'https://www.boredapi.com/api/activity/',
            success: function(response) {
                console.log(response)
            }
        })
    })
})