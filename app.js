let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
setInterval(() => {
    const date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();
    let hrotation = 30 * htime + mtime / 12;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;
    hr.style.transform = `rotateZ(${hrotation}deg)`;
    min.style.transform = `rotateZ(${mrotation}deg)`;
    sec.style.transform = `rotateZ(${srotation}deg)`;
});