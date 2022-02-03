import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    return `<h2>Interiors</h2>
    <select id="interior">
        <option value="0">Select an Interior Option
        ${
            interiors.map(
                (interior) => {
                    return `<option value="${interior.id}">${interior.fabric}</options>`
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
