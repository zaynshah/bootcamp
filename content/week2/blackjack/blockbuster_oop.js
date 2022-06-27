import moment from 'https://deno.land/x/momentjs@2.29.1-deno/mod.ts'

export class Video {
  constructor(title, year, runtime) {
    if (!title || !year || !runtime) {
      throw new Error('Video mush contain a title, year and runtime.')
    }

    if (
      year < 1990 ||
      year.toString().length != 4 ||
      typeof year !== 'number'
    ) {
      throw new Error(
        'The video year must be a given as a 4 digit number and before 1990'
      )
    }
    if (runtime <= 30 || runtime >= 300 || typeof runtime !== 'number') {
      throw new Error(
        'The runtime must be a number in mins and not less then 30 mins or greater then 300 mins.'
      )
    }

    this.title = title
    this.year = year
    this.runtime = runtime
  }

  displayTitle() {
    return `${this.title} (${this.year})`
  }
  rentalPrice() {
    const cost = 0
    if (this.year === new Date().getFullYear()) {
      cost += 1000
    } else {
      cost += 500
    }
    if (this.runtime > 240) {
      cost *= 2
    }
    return cost
  }

  displayPrice() {
    const penniesToPound = this.rentalPrice() / 100
    return `£${penniesToPound.toFixed(2)}`
  }
}

export class Customer {
  constructor(firstName, lastName, dateOfBirth) {
    if (!firstName || !lastName || !dateOfBirth) {
      throw new Error(
        'You must input a first and last name as well as a date of birth.'
      )
    }
    if (
      moment(dateOfBirth, 'DD/MM/YYYY').format('DD/MM/YYYY') == 'Invalid date'
    ) {
      throw new Error('The date does not exist')
    }

    ;(this.firstName = firstName),
      (this.lastName = lastName),
      (this.dateOfBirth = dateOfBirth)

    if (this.age() < 13) {
      throw new Error('too young')
    }
  }
  get name() {
    return `${this.firstName} ${this.lastName}`
  }
  age() {
    let DOB = Number(moment(this.dateOfBirth, 'DD/MM/YYYY').format('YYYY'))
    let currentYear = Number(new Date().getFullYear())
    return Math.floor(Math.abs(currentYear - DOB))
  }
  outstandingFine() {
    return 0
  }
}

export class VideoStore {
  constructor(videoCollection) {
    if (videoCollection.length <= 0 || videoCollection.length >= 11) {
      throw new Error(
        'The store must contain more then 0 movies but cannot carry more then 10 movies.'
      )
    }
    if (!videoCollection.every((video) => video instanceof Video)) {
      throw new Error('Video stores contains videos that has not been recorded')
    }

    this.videoCollection = videoCollection
    this.availability = {}

    //Each title has 1-5 available copies
    for (let i of videoCollection) {
      this.availability[i.title] = Math.floor(Math.random() * 5) + 1
    }
  }
  findVideoByTitle(titleSearch) {
    for (let i = 0; i < this.videoCollection.length; i++) {
      if (this.videoCollection[i].title == titleSearch) {
        return i
      }
    }
    return null
  }
  isAvailable(titleSearch) {
    let findVideo = this.findVideoByTitle(titleSearch)
    if (findVideo == null) {
      throw new Error('video is undefined')
    } else if (this.availability[titleSearch] > 0) {
      return true
    } else {
      return false
    }
  }
  rentVideo(titleSearch, customer) {
    if (
      customer instanceof Customer !== true ||
      this.findVideoByTitle(titleSearch) == null
    ) {
      throw new Error(
        'Customer is not instantiated and/or title is non-existant'
      )
    }

    // Adjust the Available stock
    if (this.isAvailable(titleSearch)) {
      this.availability[titleSearch]--
    } else {
      throw new Error('Not in Stock')
    }
    //Instantiate rental properties
    const returnWeeks = 3
    const returnTotalTime = 7 * 24 * 60 * 60 * 1000 * returnWeeks // Time is in ms
    const dueDate = returnTotalTime + new Date(Date.now())

    return new Rental()
  }

  returnVideo(rental, returnDate) {}
}

export class Rental {
  constructor(video, dueDate, customer) {
    ;(this.video = video), (this.dueDate = dueDate), (this.customer = customer)
  }
}

export class DVD extends Video {}

export class VendingMachine extends VideoStore {}

const zayn = new Customer('zayn', 'shah', '14/12/1997')
console.log(zayn.outstandingFine())
