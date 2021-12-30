function createParagraph(text, className) {
    var p = document.createElement("p");
    p.innerText = text;
    if (className) {
        p.classList.add(className)
    }
    return p;
}

function createH2(text, className) {
    var h2 = document.createElement("h2");
    h2.innerText = text;
    if (className) {
        h2.classList.add(className)
    }
    return h2;
}


window.addEventListener("keypress", function(e) {

    var oldP = document.querySelector(".input")
    console.log(oldP);

    if (oldP !== null) {
        oldP.parentElement.removeChild(oldP);
    }
    if (e.keyCode == 32) {
        document.write("<br>");
    }

    var p = createParagraph(e.key, "input");
    document.body.append(p);


    var h = createH2(e.key, "print");
    document.body.append(h);


})