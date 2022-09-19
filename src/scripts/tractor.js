// TODO Define and export a plantSeeds function
//  Function must accept the year's planting plan as input
// The plan is an array. It contains 4 arrays
// ?? How to iterate both the parent array and child arrays?
// TODO When iterating row of food types to be planted, invoke corresponding function, e.g. asparagus would be createAsparagus
// TODO Take that seed and add it to array of plants in the field module

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()

export const plantSeeds = (plan) => {


    for (let row of plan) {
        for (let each of row) {
            if (each === 'Asparagus') {

                addPlant(asparagusSeed)
            }

            if (each === 'Corn') {

                addPlant(cornSeed)

            }

            if (each === 'Potato') {

                addPlant(potatoSeed)

            }

            if (each === 'Soybean') {

                addPlant(soybeanSeed)

            }

            if (each === 'Sunflowed') {

                addPlant(sunflowerSeed)

            }

            if (each === 'Wheat') {

                addPlant(wheatSeed)

            }




        }
    }

}









