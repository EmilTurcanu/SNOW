const N_FLAKES = 20
let flakes_x = []
let flakes_y = []
function generateCoords() {
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_x[i] = parseInt(Math.random() * 500)
        flakes_y[i] = parseInt(Math.random() * 500)
    }
}
function drawFlake(i) {
    snowContainer.innerHTML += `
        <div
            class="flake"
            style="
            left: ${flakes_x[i]}px;
            top: ${flakes_y[i]}px;
        ">
        <div> 
    `
}
function drawAllFlakes() {
    snowContainer.innerHTML = ``
    for (let i = 0; i < N_FLAKES; i++) {
        drawFlake(i)
    }
}
function fall() {
    for(let i = 0; i < N_FLAKES; i++) {
        flakes_y[i] += 5
        if (flakes_y[i] > 500) {
            flakes_y[i] = -parseInt(Math.random() * 500)
        }
    }
    drawAllFlakes()
}
generateCoords()
drawAllFlakes()
function stop() {
    if (started === true) {
        started = false
        clearInterval(fallTimer)
    } else if (started === false) {
        started = true
        setInterval(fall, 20)
    }
}
let started = true
let fallTimer = setInterval(fall, 20)
/* Cum de facut can dupa ce ai apasat de 2 ori zapada 
din div sa nu se miste mai rapid dar sa continue sa 
continue codul stopului*/
