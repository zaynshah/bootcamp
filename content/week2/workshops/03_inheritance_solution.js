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

class RacketSport extends Sport {
  constructor(teamSize, name) {
    super(teamSize, name, 'Racket')
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

class Football extends BallSport {
  constructor() {
    super(11, 'Football')
  }
}

class Tennis extends RacketSport {
  constructor() {
    super(1, 'Tennis')
  }
}

class Badminton extends RacketSport {
  constructor() {
    super(1, 'Badminton')
  }
}

console.log('Is Badminton a Sport?: ' + (new Badminton() instanceof Sport))
console.log(
  'Is Badminton a Racket Sport?: ' + (new Badminton() instanceof RacketSport)
)
console.log(
  'Is Badminton a Ball Sport?: ' + (new Badminton() instanceof BallSport)
)

function printDetails(sport) {
  console.log(
    `${sport.name} is a sport played with ${sport.teamSize} people using a ${sport.equipmentType} `
  )
}

printDetails(new Tennis())
printDetails(new Badminton())
printDetails(new Running())
