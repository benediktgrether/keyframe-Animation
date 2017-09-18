var anim = document.getElementById("button")
anim.addEventListener('mousedown', mouse, false);

// Code for Chrome, Safari and Opera
anim.addEventListener("webkitAnimationStart", mouse);
anim.addEventListener("webkitAnimationEnd", myEndFunction);

function mouse() {
    anim.style.animation = "btn-ani 3s";
    console.log('Test');
}

function myEndFunction(){
    console.log("My End Function");
    anim.style.animation = ""; // Set back to Default
}


