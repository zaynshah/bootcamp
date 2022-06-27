# Week 2 - Mastery quiz

<hr>

1. What should the `??????` be changed to in the snippet below for `"John Doe"` to be logged to the console?

```js
class Employee {
  ??????(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get name() {
    return `${this.firstName} ${this.lastName}`
  }
}

const e = new Employee('John', 'Doe')
console.log(e.name)
```

<hr>

2. In the modified snippet (with `??????` correctly replaced) would removing the `get` keyword change the behaviour of the code?

<hr>

3. Which of these snippets better aligns with object-oriented programming best practices?:

```js
class Mammal {
  laysEggs() {
    return false
  }
}

class Platypus extends Mammal {
  laysEggs() {
    return true
  }
}
```

_or_

```js
class Platypus {
  laysEggs() {
    return true
  }
}

class Mammal extends Platypus {
  laysEggs() {
    return false
  }
}
```

<hr>

4. You're building a system for employees at a wine merchant. Which of these would be reasonable validations when adding a new employee to the system?:

- Employee must have a name
- Employee must have a date of birth
- Employee's date of birth can't be in the future
- Employees name must be less than 20 characters
- Employees name must contain only the letters A-Z (uppercase or lowercase)
- Employee's must have a middle initial

<hr>

5. What will the result of this snippet be?:

```js
class Employee {
  constructor(firstName, lastName) {
    this.name = `${this.firstName} ${this.lastName}`
  }
}

const e = new Employee('John', 'Doe')
console.log(e.firstName)
```

<hr>

6. What's the syntax for stopping the execution of a JavaScript program with an error message?

<hr>

7. Do you agree with the following statement: "Programs written in an object-oriented style require fewer lines of code, and so run faster than programs not written using OO principles."

<hr>

8. What will the output of this code be?

Also, why might we adopt the pattern of passing in an object to our constructor rather than passing in two parameters?

```js
class Employee {
  constructor(props) {
    this.firstName = props.firstName
    this.lastName = props.lastName
  }

  get name() {
    return `${this.firstName} ${this.lastName}`
  }
}

const e = new Employee({ firstName: 'Carter', lastName: 'Kennedy' })
console.log(e.name)
```

<hr>

1. Here's a short program modelling Formula 1 racing teams. How many different classes are there in the program? How many instances of each class are there?

```js
class Team {
  constructor(name) {
    this.name = name
  }
}

class Vehicle {
  averageSpeed() {
    return null
  }

  get wheels() {
    return 4
  }
}

class RacingCar extends Vehicle {
  speed() {
    return 225
  }
}

class SafetyCar extends Vehicle {
  speed() {
    return 150
  }
}

class Player {
  constructor(team, car) {
    this.team = team
    this.car = car
  }
}

for (const teamName of ['Red Bull', 'Mercedes', 'Ferrari']) {
  const team = new Team(teamName)
  const players = [
    new Player(team, new RacingCar()),
    new Player(team, new RacingCar())
  ]
}

new SafetyCar()
```

<hr>

10. What do you think the output of this code will be? (Think carefully before answering):

```js
class Person {
  constructor(name) {
    this.name = name
  }

  set name(name) {
    this.name = name
  }

  get name() {
    return this.name.toUpperCase()
  }
}

console.log(new Person('John Doe').name)
```

### Answers

Once you're done, check your answers [here](quiz_answers.md).
