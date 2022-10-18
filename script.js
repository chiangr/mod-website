var herotxt =  ["maximize the efficiency of finding furniture for college students?","reach our target audience of college students? ","source the materials and manufacturing resources to produce products that are sustainable for the business?","create efficient ways to reuse and recycle furniture?"]

textSequence(0);
function textSequence(i) {
    if (herotxt.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = herotxt[i];
            textSequence(++i);
        }, 3000); // 1 second (milliseconds)
    } else if (herotxt.length == i) { // loop
        textSequence(0);
    }
}