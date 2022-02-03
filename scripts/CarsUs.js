import { Interiors } from "./Interiors.js";
import { Paints } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";

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
            <section class="choices__wheel options">
            ${Paints()}
            </section>
        </article>
    `
}