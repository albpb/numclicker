
let control = false

document.addEventListener("keydown", function(e){
  if(e.ctrlKey){
    control = true;
  }
  if (e.key == "F3") {
    alert("mira que listillo, ¿creias que dandole a F3 no te iba a pillar bribón?")
  }

  if (control && (e.key == "f") || (e.key == "g")) {
    alert("epaaaaaaa te he pillao pillin")
  }
});
document.addEventListener("keyup", function(e){
    if(!e.ctrlKey){
        control = false;
    }
});

