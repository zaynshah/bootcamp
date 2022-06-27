class Dog {
  constructor(name, weight) {
    this.name = name
    this.weight = weight
  }

  barkAgain() {
    return this.#getBark()
  }
  #getBark() {
    if (this.weight > 100) {
      return 'BARK'
    } else {
      return 'bark'
    }
  }
}

class PetStore {
  #pets = []
  constructor(dog) {
    if (dog.length > 8) {
      throw new Error('Pet store can only contain 8 dogs')
    }
    this.#pets = dog
  }

  addPet(pet) {
    if (pet instanceof Dog !== true) {
      throw new Error('Can only add instances of Dog')
    }
    this.#pets.push(pet)
  }

  get petsForSale() {
    return this.#pets
  }
}

let mutt = new Dog('Mutt', 625)
let spot = new Dog('Spot', 32)
let gruff = new Dog('Gruff', 95)

let store = new PetStore([mutt, spot, gruff])
let bingo = new Dog('Bingo', 103)

store.addPet(bingo)
console.log(store.petsForSale)
console.log(bingo.barkAgain())
