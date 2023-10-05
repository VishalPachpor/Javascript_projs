const randomColor = function () {
    // const hexColor = "123456789ABCDEF"
    // let color = "#"
    // for (let i = 0; i < 6; ++i) {
    //     color += hexColor[Math.floor(Math.random() * hexColor.length)]
    // }
    // return color;


    // Without using loop
    
    const randomHexValue = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
    const redHex = randomHexValue()
    const greenHex = randomHexValue()
    const blueHex = randomHexValue()
    return `#${redHex}${greenHex}${blueHex}`
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