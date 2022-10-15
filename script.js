var herotxt =  ["inexpensive","modular","innovative","accessible"]

textSequence(0);
function textSequence(i) {
    if (herotxt.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = herotxt[i];
            textSequence(++i);
        }, 1000); // 1 second (milliseconds)
    } else if (herotxt.length == i) { // loop
        textSequence(0);
    }
}