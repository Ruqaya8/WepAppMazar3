function myFunction() {

    var txt;
    if (confirm("Thanks! your data has been submited")) {
        txt = "your data has been submited";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}



var points = [2, 1, 2, 2, 1] // sum the points
var total = 0;
for (var i = 0; i < points.length; i++) {
    total += points[i]
}
document.getElementById("points").innerHTML = 'Your total points = ' + total + '/10';

/*

function outerFunc() {
    function innerFunc(a, b) {
        return a - b;
    }

    return innerFunc;
}


const innerFunc = outerFunc();
innerFunc(10, 8);
document.getElementById("rest").innerHTML = 'You Have to collect =' + innerFunc;




function outerFunc(a, b) {
    function innerFunc(a, b) {
        return a - b;
    }
    var result = innerFunc(10, total);
    return result;
}

document.getElementById("rest").innerHTML = 'You Have to collect =' + result;
 


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("imgg");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { 
    slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);

} 


var points = [2, 1, 2, 2, 1] // sum the points
var total = 0;
for (var i = 0; i < points.length; i++) {
    points += points[i]
}
document.getElementById("d").innerHTML = 'Your total points = ' + total;


var salaries = [10000, 20000, 30000, 40000] // sums to 100000
var totalSalary = 0;
for (var i = 0; i < salaries.length; i++) {
    totalSalary += salaries[i]
}
document.getElementById(" ").innerHTML = totalSalary;




var el = document.getElementById('dis');

function showImg() {
    el.style.display = 'block'
}

document.getElementById('images').onmouseover = showImg
document.getElementById('images').onmouseout = function() {
    el.style.display = 'none'
}


*/