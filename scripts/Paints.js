import { getPaints } from "./database.js";

const paints = getPaints()

export const Paints = () => {
    return `<h2>Paints</h2>`
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
}