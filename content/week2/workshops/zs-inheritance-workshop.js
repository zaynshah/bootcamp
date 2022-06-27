class Sport {
  constructor(teamSize, name, equipmentType) {
    this.teamSize = teamSize
    this.name = name
    this.equipmentType = equipmentType
  }
}

class BallSport extends Sport {
  constructor(teamSize, name) {
    super(teamSize, name, 'Ball')
  }
}

class Football extends BallSport {
  constructor(name, equipmentType) {
    super(11, 'Football', equipmentType)
  }
}

class RacketSport extends Sport {
  constructor(teamSize, name) {
    super(teamSize, name, 'Racket')
  }
}

class Tennis extends RacketSport {
  constructor(equipmentType) {
    super(1, 'Tennis', equipmentType)
  }
}

class Badminton extends RacketSport {
  constructor(equipmentType) {
    super(1, 'Badminton', equipmentType)
  }
}

class AthleticSport extends Sport {
  constructor(teamSize, name, equipmentType) {
    super(teamSize, name, equipmentType)
  }
}

class Running extends AthleticSport {
  constructor() {
    super(1, 'Running', 'Shoes')
  }
}

let football = new Football()
let tennis = new Tennis()
let badminton = new Badminton()
let running = new Running()

console.log(football.name)
console.log(football.equipmentType)
console.log(tennis.name)
console.log(tennis.equipmentType)
console.log(badminton.name)
console.log(badminton.equipmentType)
console.log(running.name)
console.log(running.equipmentType)
