// TODO Define a variable with initial value as an empty array, Do not export
// ! This array stores all of the plants growing in the field

const fieldPlants = []



// TODO Define and export a function named addPlant.
// TODO addPlant must accept a seed object as input. The function will add the seed to the field. .push()??
// ! This function exports addPlant and accept a seed object as input. It will add the seed to the field.


export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const seed of seedObject) {
            fieldPlants.push(seed)
        }

    } else {
        return fieldPlants.push(seedObject)
    }

}


// TODO Define and export function named usePlant that returns a copy of the array of plants

export const usePlants = () => {
    return plants.map(plant => ({ ...plant }))

}



