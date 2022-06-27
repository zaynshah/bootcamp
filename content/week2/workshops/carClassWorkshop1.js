class createCar {
  constructor(
    isLeftHandDrive,
    passengerNumber,
    fuelTankSizeInGallons,
    milesPerGallon,
    maxNumberOfWheels
  ) {
    this.isLeftHandDrive = isLeftHandDrive
    this.passengerNumber = passengerNumber
    this.fuelTankSizeInGallons = fuelTankSizeInGallons
    this.milesPerGallon = milesPerGallon
    this.maxNumberOfWheels = this.createWheel()
    this.caluculateMaxDistance = this.caluculateMaxDistance()
  }
  caluculateMaxDistance() {
    return this.fuelTankSizeInGallons * this.milesPerGallon
  }

  createWheel() {
    const newWheels = []
    for (let i = 1; i <= 4; i++) {
      newWheels.push(new wheel(17, 25))
    }
    return newWheels
  }
}

class wheel {
  constructor(rimRadius, maxAirPressure) {
    this.rimRadius = rimRadius
    this.maxAirPressure = maxAirPressure
  }
}

console.log(new createCar(false, 5, 12, 25))
