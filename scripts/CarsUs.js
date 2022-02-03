import { Interiors } from "./Interiors.js";
import { Paints } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";
import { Orders } from "./Orders.js";
import { addCustomOrder} from "./database.js";

// event listener which invokes addCustomOrder()
document.addEventListener(
    "click",
    (clickEvent) => {
        // set a variable equal to click target
        const buttonClicked = clickEvent.target
        // if this thing happens
        if (buttonClicked.id === "orderButton") { 
        // then call this function
            addCustomOrder()
        }
    }
)

export const CarsUs = () => {
    return `
        <h1>Cars 'R' Us</h1>

        <article class="choices">
            <section class="choices__paint options">
            ${Paints()}
            </section>
            <section class="choices__interior options">
            ${Interiors()}
            </section>
            <section class="choices__technology options">
            ${Technologies()}
            </section>
            <section class="choices__paint options">
            ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom car Orders</h2>
            ${Orders()}
        </article>
    `
}