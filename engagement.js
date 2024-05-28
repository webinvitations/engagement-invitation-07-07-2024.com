window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollToTopButton.style.display = "block";
    } else{
        scrollToTopButton.style.display = "none";
    }
}

function toTop(){
    scrollToTop(0, 500);
};

function scrollToTop(to, duration) {
  if (duration <= 0) return;
  var difference = to - window.scrollY;
  var perTick = difference / duration * 10;

  requestAnimationFrame(function() {
    window.scrollBy(0, perTick);
    if (window.scrollY === to) return;
    scrollToTop(to, duration - 10);
  });
}

const countdownDate = new Date('2024-07-07T18:00:00').getTime();

const countdown = setInterval(function updateCountDown(){
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const minutes = Math.floor(((distance - seconds * 1000) % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(((distance - seconds * 1000 - minutes * 1000 * 60) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor((distance - seconds * 1000 - minutes * 1000 * 60- hours * 1000 * 60 * 60) / (1000 * 60 * 60 * 24));
    
    var d, h, m, s, rest
    if( days < 10 ){
        d = "0" + days;
    }else{
        d = days
    }
    if( hours < 10 ){
        h = "0" + hours;
    }else{
        h = hours
    }
    if( minutes < 10 ){
        m = "0" + minutes;
    }else{
        m = minutes
    }
    if( seconds < 10 ){
        s = "0" + seconds;
    }else{
        s = seconds
    }

    rest = d + ":" + h + ":" + m + ":" + s;
    document.getElementById('countdown').innerHTML = rest;

    if(distance < 0){
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Countdown is over!';
    }
}, 1000);


let currentDiv = 1;

function changeLang(){
    var a = document.getElementById("engTitle");
    var b = document.getElementById("armTitle");
    var c = document.getElementById("rusTitle");
    var d = document.getElementById("engNames");
    var e = document.getElementById("armNames");
    var f = document.getElementById("rusNames");
    var g = document.getElementById("engInvite");
    var h = document.getElementById("armInvite");
    var i = document.getElementById("rusInvite");
    var j = document.getElementById("engCounter");
    var k = document.getElementById("armCounter");
    var l = document.getElementById("rusCounter");
    var m = document.getElementById("engDressCode");
    var n = document.getElementById("armDressCode");
    var o = document.getElementById("rusDressCode");
    var p = document.getElementById("engAdress");
    var q = document.getElementById("armAdress");
    var r = document.getElementById("rusAdress");
    var s = document.getElementById("engAdressClick");
    var t = document.getElementById("armAdressClick");
    var u = document.getElementById("rusAdressClick");
    var v = document.getElementById("engEnd");
    var w = document.getElementById("armEnd");
    var x = document.getElementById("rusEnd");

    if(currentDiv === 1){
        a.style.display = 'none';
        b.style.display = 'block';
        c.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'block';
        f.style.display = 'none';
        g.style.display = 'none';
        h.style.display = 'block';
        i.style.display = 'none';
        j.style.display = 'none';
        k.style.display = 'block';
        l.style.display = 'none';
        m.style.display = 'none';
        n.style.display = 'block';
        o.style.display = 'none';
        p.style.display = 'none';
        q.style.display = 'block';
        r.style.display = 'none';
        s.style.display = 'none';
        t.style.display = 'block';
        u.style.display = 'none';
        v.style.display = 'none';
        w.style.display = 'block';
        x.style.display = 'none';
        currentDiv = 2;
    } else if(currentDiv === 2){
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'block';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'block';
        g.style.display = 'none';
        h.style.display = 'none';
        i.style.display = 'block';
        j.style.display = 'none';
        k.style.display = 'none';
        l.style.display = 'block';
        m.style.display = 'none';
        n.style.display = 'none';
        o.style.display = 'block';
        p.style.display = 'none';
        q.style.display = 'none';
        r.style.display = 'block';
        s.style.display = 'none';
        t.style.display = 'none';
        u.style.display = 'block';
        v.style.display = 'none';
        w.style.display = 'none';
        x.style.display = 'block';
        currentDiv = 3;
    } else{
        a.style.display = 'block';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'block';
        e.style.display = 'none';
        f.style.display = 'none';
        g.style.display = 'block';
        h.style.display = 'none';
        i.style.display = 'none';
        j.style.display = 'block';
        k.style.display = 'none';
        l.style.display = 'none';
        m.style.display = 'block';
        n.style.display = 'none';
        o.style.display = 'none';
        p.style.display = 'block';
        q.style.display = 'none';
        r.style.display = 'none';
        s.style.display = 'block';
        t.style.display = 'none';
        u.style.display = 'none';
        v.style.display = 'block';
        w.style.display = 'none';
        x.style.display = 'none';
        currentDiv = 1;
    }
    
}

let parentDiv, childImg, nameId, images, anyImg, element, k;

function maximize(n){
    document.getElementById("album_background").style.display = "block";
    parentDiv = document.getElementById("box");
    childImg = document.createElement("img");
    nameId = "a" + n;
    childImg.setAttribute("id", nameId);
    let src = "photos/photo" + n + ".jpg";
    childImg.setAttribute("src", src);
    childImg.setAttribute("width", "100%");
    parentDiv.appendChild(childImg);
}

function next(){
    parentDiv = document.getElementById("box");
    anyImg = parentDiv.querySelector("img");
    element = document.getElementsByTagName("img");
    if(element.length > 0){
        nameId = element[0].id; 
    }
    child = document.getElementById(nameId);
    if( k >= 10 ){
        k = nameId.slice(-2);
    } else{
        k = nameId.slice(-1);
    }
    if( k < 8 ){
        k++;
    }else{
        k = 1;
    }
    nextImg = document.createElement("img");
    nameId = "a" + k;
    nextImg.setAttribute("id", nameId);
    let src = "photos/photo" + k + ".jpg";
    nextImg.setAttribute("src", src);
    nextImg.setAttribute("width", "100%");
    let slide = document.getElementById("box");
    slide.replaceChild(nextImg, child);
}
function previous(){
    parentDiv = document.getElementById("box");
    anyImg = parentDiv.querySelector("img");
    element = document.getElementsByTagName("img");
    if(element.length > 0){
        nameId = element[0].id; 
    }
    child = document.getElementById(nameId);
    if( k >= 10 ){
        k = nameId.slice(-2);
    } else{
        k = nameId.slice(-1);
    }
    if( k > 1 ){
        k--;
    } else{
        k = 8;
    }
    nextImg = document.createElement("img");
    nameId = "a" + k;
    nextImg.setAttribute("id", nameId);
    let src = "photos/photo" + k + ".jpg";
    nextImg.setAttribute("src", src);
    nextImg.setAttribute("width", "100%");
    let slide = document.getElementById("box");
    slide.replaceChild(nextImg, child);
    nameId = "a" + k;
    child = document.getElementById(nameId);
}

function minimilze(){
    document.getElementById("album_background").style.display = "none";
    parentDiv = document.getElementById("box");
    images = parentDiv.querySelectorAll("img");
    images.forEach(function(image){
        parentDiv.removeChild(image);
    })
}