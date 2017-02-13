

setInterval(function () {
    var time = new Date();
    var sec = time.getSeconds();
    var min = time.getMinutes();
    var hour = time.getHours();

    var ds = document.querySelector('div.second');
    var dm = document.querySelector('div.minutes');
    var dh = document.querySelector('div.hour');

    ds.style.transform= `rotate(${90+(sec/60)*360}deg)`
    dm.style.transform= `rotate(${90+(min/60)*360}deg)`
    dh.style.transform= `rotate(${90+((hour+(min)/100)/12)*360}deg)`
    if (sec === 0) { ds.style.transitionDuration = '0.001s'}
    if (sec === 0) { dm.style.transitionDuration = '0.001s'}
    if (sec === 0) { dh.style.transitionDuration = '0.001s'}

}, 1000)
