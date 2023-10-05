const randomColor = function () {
    const hexColor = "123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; ++i) {
        color += hexColor[Math.floor(Math.random() * hexColor.length)]
    }
    return color;
}
console.log(randomColor);
let intervalId;

const startChaingingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBackgroundClr, 1000);

    }
    function changeBackgroundClr() {
        document.querySelector("body").style.backgroundColor = randomColor()
    }
}

const stopChaingingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById("start").addEventListener("click", startChaingingColor)

document.getElementById("stop").addEventListener("click", stopChaingingColor)