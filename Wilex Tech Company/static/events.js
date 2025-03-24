var btn = document.getElementById("changeTextButton");

btn.addEventListener('mouseover', function() {
    btn.style.fontStyle = "italic";
    btn.style.color = "lime";
});

btn.addEventListener('mouseout', function() {
    btn.style.fontStyle = "normal";
    btn.style.color = "black";
});

btn.addEventListener("click", function () {
    document.getElementById("welcomeText").innerText = "Text changed!";
    document.getElementById("output").innerText = "You clicked the button!";
    alert(document.getElementById("output").innerText);
});

document.getElementById("colorButton").addEventListener("click", function () {
    this.style.backgroundColor = "lightblue";
    this.innerText = "Color Changed!";
});


setTimeout(function() {
    console.log("This message appears after 2 seconds!");
}, 4000);

var count = 0;

setInterval(() => {
    console.log("Repeating message every 1 second. Count: " + count++);
}, 1000);

setTimeout(() => {
    document.getElementById("output").innerText = "This message appears after 3 seconds.";
}, 3000);
