class SolarSystem {
  constructor() {
    this.planets = []
    this.stars = []
    this.#populatePlanets()
    this.#populateStars()
  }

  #populatePlanets() {
    for (let i = 0; i < getRandomNumber(6, 10); i++) {
      this.addPlanet(new Planet())
    }
  }

  #populateStars() {
    for (let i = 0; i < getRandomNumber(2, 5); i++) {
      this.addStar(new Star())
    }
  }

  addPlanet(newPlanet) {
    this.planets.push(newPlanet)
  }

  addStar(newStar) {
    this.stars.push(newStar)
  }

  get systemStars() {
    return this.stars
  }

  get systemPlanets() {
    return this.planets
  }
}

class Star {
  constructor() {
    ;[this.name, this.mass, this.temperature] = this.createStar()
  }

  createStar() {
    return [
      generateId(),
      getRandomNumber(0.0, 60),
      getRandomNumber(3000, 50000)
    ]
  }

  get classification() {
    if (this.temperature > 40000 && this.mass >= 50) return 'O'
    else if (this.temperature > 20000 && this.mass >= 10) return 'B'
    else if (this.temperature > 8500 && this.mass >= 2) return 'A'
    else if (this.temperature > 6500 && this.mass >= 1.5) return 'F'
    else if (this.temperature > 5700 && this.mass >= 1) return 'G'
    else if (this.temperature > 4500 && this.mass >= 0.2) return 'K'
    else return 'M'
  }

  get starMass() {
    return this.mass
  }

  get starName() {
    return this.name
  }
}

class Planet {
  constructor() {
    ;[this.name, this.radius] = this.createPlanet()
  }

  createPlanet() {
    return [generateId(), getRandomNumber(500, 10000)]
  }

  get circumference() {
    return Math.ceil(Math.PI * this.radius * 2)
  }

  get planetName() {
    return this.name
  }
}

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9)
}

function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function calcHeaviestStar() {
  let currentHighest = 0
  let currentHighestName = ''
  let currentHighestClass = ''
  for (let i in milkyWay.systemStars) {
    const star = milkyWay.systemStars[i]
    if (star.starMass > currentHighest) {
      currentHighest = star.starMass
      currentHighestName = star.starName
      currentHighestClass = star.classification
    }
  }
  return [Math.ceil(currentHighest), currentHighestName, currentHighestClass]
}

function calcSmallestPlanet() {
  const allPlanetCircs = milkyWay.systemPlanets.map(
    (planet) => planet.circumference
  )
  return Math.min(...allPlanetCircs)
}

const milkyWay = new SolarSystem()

const [heaviestStarMass, heaviestStarName, heaviestStarClass] =
  calcHeaviestStar()
console.log(
  `The heaviest star has the mass of ${heaviestStarMass} suns. It is called ${heaviestStarName} and has a classification of ${heaviestStarClass}.`
)

console.log(
  `The circumference of the smallest planet is ${calcSmallestPlanet()}km.`
)
