import { getPaints } from "./database.js";

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            window.alert(`User chose paint ${event.target.value}`)
        }
    }
)

export const Paints = () => {
    let html = `<h2>Paints</h2>`

    html += `<select id="paint">`
    html += `<option value="0">Select a paint color</option>`

    const listItemsArray = paints.map ( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += listItemsArray.join("")
    html += `</select>`
    return html
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
