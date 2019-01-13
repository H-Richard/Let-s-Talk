function Move(id) {
    var elem = document.getElementsByClassName("translucent-box" + id)[0];
    var item = document.getElementById("pick");
    console.log(item);
    var pos = -100;
    var id = setInterval(frame, 0.2);
    item.style.display='';
    function frame() {
        console.log(pos);
        if (pos == 0) {
            item.style.display='';
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + '%';
        }
    }
}
