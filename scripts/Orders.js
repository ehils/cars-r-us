import { getOrders, getInteriors, getPaints, getTechnologies, getWheels } from "./database.js";

const buildOrderListItem = (order) => {
    const paints = getPaints()

    const chosenPaint = paints.find(
        (paint => {
            return paint.id === order.paintId
        })
    )
    
    const interiors = getInteriors()
    
    // Remember that the function you pass to find() must return true/false
    const chosenInterior = interiors.find(
        
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const wheels = getWheels()
    
    // Remember that the function you pass to find() must return true/false
    const chosenWheel = wheels.find(
        
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const technologies = getTechnologies()
    
    // Remember that the function you pass to find() must return true/false
    const chosenTechnology = technologies.find(
        
        (technology) => {
            return technology.id === order.packageId
        }
    )

    const totalCost = chosenInterior.price + chosenPaint.price + chosenTechnology.price + chosenWheel.price
        
    const costString = totalCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
        })
    
        return `<li>
            ${chosenPaint.color} car with ${chosenWheel.type} wheels, ${chosenInterior.fabric}, and cost ${chosenTechnology.package} costs a total of ${costString}
        </li>`
        
}
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    // const listItems = orders.map(order => {
        //     return buildOrderListItem(order)
        // }
        // )
        
        // the following iteration gives us the times
        
        // for (const order of orders) {
            // this gives us the english date
            // html += `<li>Order ${order.id} was place ${order.date}`
            // This gives us the timestamp
            // html += `<li>Order ${order.id} was place ${order.timestamp}`
            // }
            
    html += listItems.join("")
    html += "</ul>"
    return html
}