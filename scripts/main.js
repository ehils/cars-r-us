import { CarsUs } from "./CarsUs.js"
// CarsUs() defines HTML structure
const mainContainer = document.querySelector("#container")

// renderAllHTML needed for growth of application
const renderAllHTML = () => {
    mainContainer.innerHTML = CarsUs()
}

renderAllHTML()