// Icon column entries.
var Icons = ["bi bi-dice-3",
             "bi bi-egg-fried",
             "bi bi-joystick",
             "bi bi-camera-reels",
             "bi bi-music-player"
            ]
// Description column entries.
var Descriptions = ["board games",
                    "cooking",
                    "games",
                    "movie",
                    "music"
                   ]
// Info column entries.
var Infos = ["Monopoly's great!",
             "Pasta's love!",
             "Pokemon rocks!",
             "Harry Potter's cool!",
             "Classical music, pls!"
            ]
// Images column entries with alternative text.
var Images = ["'img/boardgames.jpg' alt='Monopoly.'",
              "'img/pasta.jpg' alt='Pasta with fork.'",
              "'img/game.jpg' alt='Laptop and controller.'",
              "'img/movie.jpg' alt='Clapperboard.'",
              "'img/music.jpg' alt='Walkman.'"
             ]

const tablebody = personalTable.querySelector('tbody');
for (var i=0; i < Icons.length; i++) {
    tablebody.innerHTML += "<tr class='rows' style='text-align:center; vertical-align:middle;'><td>" + (i+1) + // ID column entries. // All cells are aligned. // Class for rows.
                           ".</td><td><i class='"+ Icons[i] + // Dote after each ID entry.
                           "' style='font-size:24px;'><i></td><td>"+ Descriptions[i] + // Icon sizes manipulated.
                           "</td><td>"+ Infos[i] +
                           "</td><td><img class='images' src="+ Images[i] + " height='150' width='150'></td></tr>" // Image dimension change. // Class for images.
}

$("document").ready(function() {
    // Images will open in a new tab if clicked:
    $("img.images").click(function() {
        window.open($(this)[0].src, '_blank')
    })

    // Odd rows will change color on hover:
    $("tr.rows:even").hover(changeFontColor, changeFontColorBack)
})

// Function for changing the font color to red:
function changeFontColor() {
    $(this).css('color', 'red')
}
// Function for changing the font color back to black:
function changeFontColorBack() {
    $(this).css('color', 'black')
}