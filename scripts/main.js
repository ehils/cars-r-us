import { CarsUs } from "./CarsUs.js"
// CarsUs() defines HTML structure
const mainContainer = document.querySelector("#container")

// renderAllHTML needed for growth of application
const renderAllHTML = () => {
    mainContainer.innerHTML = CarsUs()
}

renderAllHTML()

// Listens for stateChanged event
// once event is heard, HTML is re-rendered(renderALLHTML invoked again)

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})