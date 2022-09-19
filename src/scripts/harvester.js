// TODO Define and export harvestPlants function. Give it the plants array as input

// TODO Iterate the array of growing plants. On each plant get the value of the "output" property
// TODO Add that many of the plants objects to the array the function returns

//! This function will return an array of seed objects
import { usePlants } from "./field.js"

const plants = usePlants()

export const harvestPlants = (plants) => {
    const harvestArray = []

    // Iterate through all plants, separate out corn

    for (const plant of plants) {
        if (plant !== "Corn") {
            for (let i = 0; i < plant.output; i++) {
                harvestArray.push(plant)
            }

            // Iterate through corn and divide by 2
        } else {
            for (let i = 0; i < plant.output / 2; i++) {

            }
        }

        return harvestArray

    }
}
harvestPlants(plants)

