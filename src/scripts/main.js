console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds} from "./tractor.js"
import { harvestPlants} from "./harvester.js"


const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
console.log(yearlyPlan)

const plantsToUse = usePlants()
console.log(plantsToUse)

const harvestArray = harvestPlants(plantsToUse)
console.log(harvestArray)




const asparagusSeed = createAsparagus()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
const cornSeed = createCorn()



addPlant(asparagusSeed)
addPlant(potatoSeed)
addPlant(soybeanSeed)
addPlant(sunflowerSeed)
addPlant(wheatSeed)
addPlant(cornSeed)







