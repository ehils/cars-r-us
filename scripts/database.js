// This module holds all data for car customization
const database = {
    paints: [
        {id: 1, price: 205.85, color: "Silver"},
        {id: 2, price: 214.75, color: "Midnight Blue"},
        {id: 3, price: 236.74, color: "Firebrick Red"},
        {id: 4, price: 276.53, color:"Spring Green"}
    ],
    interiors: [
        {id: 1, price:406.89, fabric: "Beige Fabric"},
        {id: 2, price: 420.69, fabric:"Charcoal Fabric"},
        {id: 3, price: 567.36, fabric: "White Leather"},
        {id: 4, price: 536.65, fabric: "Black Leather"}
    ],
    technologies: [
        {id: 1, price: 1156.89, package: "Basic Package"},
        {id: 2, price: 1364.89, package: "Navigation Package"},
        {id: 3, price: 1556.89, package: "Visibility Package"},
        {id: 4, price: 1785.78, package: "Ultra Package"}
    ],
    wheels: [
        {id: 1, price: 378.78, type: "17-inch Pair Radial"},
        {id: 2, price: 489.67, type: "17-inch Pair Radial Black"},
        {id: 3, price: 578.89, type: "18-inch Pair Spoke Silver"},
        {id: 4, price: 609.23, type: "18-inch Pair Spoke Black"}
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            packageId: 1,
            wheelId: 1,
            date: 2/3/2022
            // timestamp: 1614659931693
        }
    ],
    orderBuilder: {},
}

// Getter Functions

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technologie => ({...technologie}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

// Setter Functions

export const setPaint = (id) => {
    return database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    return database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    return database.orderBuilder.packageId = id
}
export const setWheel = (id) => {
    return database.orderBuilder.wheelId = id
}

// Chaning Permanent State Fucntion

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    // newOrder.timestamp = Date.now()
    
    // Add actual date
    newOrder.date = new Date().toLocaleString()

    // Add the new order object to custom orders state
    // from the orderBuilder
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


