window.addEventListener('DOMContentLoaded', function () {
    let arr=[];
    for(let i = 1; i < 20; i++)
    arr.push("img/"+i+".jpg");
    let slider = document.getElementById('slider');
    console.log(slider);
        slider.src = arr[0];
    let nav = document.getElementsByClassName('nav-icon'),
         navPrev = nav[0],
         navNext = nav[1];


    console.log(slider);
    console.log(navNext);
    console.log(navPrev);
});