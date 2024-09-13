var noOfDrums=document.querySelectorAll(".drum").length;


//for mouse press
for (var i=0;i<noOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var character = this.innerHTML;
        makeSound(character);
    });
}

//for keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
});


function makeSound(character){
    switch (character) {
        case "w":
            var drumSound = new Audio("./sounds/tom-1.mp3");
            drumSound.play();
            break;
        case "a":
            var drumSound = new Audio("./sounds/tom-2.mp3");
            drumSound.play();
            break;
        case "s":
            var drumSound = new Audio("./sounds/tom-2.mp3");
            drumSound.play();
            break;
        case "d":
            var drumSound = new Audio("./sounds/tom-4.mp3");
            drumSound.play();
            break;
        case "j":
            var drumSound = new Audio("./sounds/snare.mp3");
            drumSound.play();
            break;
        case "k":
            var drumSound = new Audio("./sounds/crash.mp3");
            drumSound.play();
            break;
        case "l":
            var drumSound = new Audio("./sounds/kick-bass.mp3");
            drumSound.play();
            break;
    }
}


// var drumSound = new Audio("./sounds/tom-1.mp3");
// drumSound.play();