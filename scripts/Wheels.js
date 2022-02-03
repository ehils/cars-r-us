import { getWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            window.alert(`User chose wheel ${event.target.value}`)
        }
    }
)

export const Wheels = () => {
    return `<h2>Wheels</h2>
    <select id="wheel">
        <option value="0">Select a Wheel Option
        ${
            wheels.map(
                (wheel) => {
                    return `<option value="${wheel.id}">${wheel.type}</options>`
                }
                
            ).join("")
        }
    </select>
`
}
    // let html = "<ul>"

    // // Use .map() for converting objects to <li> elements
    // const listItemsArray = interiors.map(interior => {
    //     return `<li>
    //         <input type="radio" name="interior" value="${interior.id}" /> ${interior.interior}
    //     </li>`
    // })


    // // Join all of the strings in the array into a single string
    // html += listItemsArray.join("")

    // html += "</ul>"
    // return html
