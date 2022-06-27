Week 2 - Mastery quiz (answers)
====

<hr>

Question 1.

**Answer**: `constructor`

**Explanation**: `constructor` is the method that's called when you instantiate a new object (e.g. `new Employee()` will call the `constructor` method on `Employee`).

**If you got this wrong**: Review the below materials on the constructor method and OOP basics:

- [:link: - constructor (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [:link: - Object-oriented JavaScript for beginners: Constructors and object instances (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)

<hr>

Question 2.

**Answer**: Yes, without the `get` keyword, calling `e.name` wouldn't return the employee's name. To return the name you'd need to call `e.name()`.

**Explanation**: The `get` keyword defines a getter, which allows a method to be accessed as if it were a property (or, equivalently, allows you to define a property whose value is the result of calling a method). If we don't use the `get` keyword, `name` is a normal method.

**If you got this wrong**: Review the below materials on getters:

- [:link: - Working with Objects: Defining getters and setters (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
- [:link: - getter (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

<hr>

Question 3.

**Answer**: The first snippet (containing `Platypus extends Mammal`)

**Explanation**: If `A extends B` then:

- `A` inherits the behaviour of `B`
- `A` is a specialized version of `B`
- `A` is the subclass ("child") and `B` is the superclass ("parent")

We should set up our class inheritance to reflect as accurately as possible the real-world systems we're representing. It's more sensible to say the a platypus is a special kind of mammal, rather than that a mammal is a special kind of platypus, so `Platypus` should be the subclass and `Mammal` should be the superclass.

**If you got this wrong**: Review the below materials on inheritance:

- [:link: - The JavaScript language: Class inheritance](https://javascript.info/class-inheritance)
- [:link: - Inheritance in JavaScript: Inheritance with class syntax (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#Inheritance_with_class_syntax)

<hr>

Question 4.

**Answer & explanation**: There is an element of subjectivity to this question, so if you were thinking along the same lines as what's given here you can mark yourself correct even if your answer is slightly different. The first three validations are probably reasonable, since:

- Without some kind of name, it will probably be difficult to identify employees
- Since the store is a wine merchant, employees will likely have to be over 18 - so tracking DOB will be necessary
- It's correct that a date of birth shouldn't be in the future

The last three validations are probably not reasonable since:

- Many names are longer than 20 characters! For example the actor Arnold Schwarzenegger.
- Again, plenty of names contain non-alphabetical characters: for example, "John-Paul" (hyphen) or "José".
- Likewise, many people don't have a middle name, so enforcing a middle initial wouldn't be sensible.

Notice, that when we start trying to constrain the contents of a name, it's easy to add spurious validations. See the essay "[Falsehoods Programmers Believe About Names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)".

**If you got this wrong**: Review the below article on data validation:

- [:link: - Teach computer science: Data Validation](https://teachcomputerscience.com/validation/)

<hr>

Question 5.

**Answer**: `undefined`

**Explanation**: We pass the `firstName` as an argument to the `constructor` method, but we don't set the `firstName` property on the newly created employee (i.e. by calling `this.firstName = firstName` in the `constructor`). Therefore the newly created `Employee` has no `firstName` property and calling `e.firstName` returns `undefined`. Calling `e.name` would return `"John Doe"`.

**If you got this wrong**: Review the below materials on the constructor method and OOP basics:

- [:link: - constructor (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [:link: - Object-oriented JavaScript for beginners: Constructors and object instances (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)

<hr>

Question 6.

**Answer**: `throw new Error("Something went wrong")` or `throw "Something went wrong"`

**If you got this wrong**: Read more about throwing errors below.

- [:link: - Throwing Exceptions in JavaScript](https://rollbar.com/guides/javascript-throwing-exceptions/)
- [:link: - throw statement (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

<hr>

Question 7.

**Answer & explanation**: This statement is incorrect on several fronts. The purpose of object-oriented programming isn't to write fewer lines of code: indeed, OOP often means writing more lines of code. OOP is more about creating software that is less complex, easier to maintain and with a clearer design. Additionally, having fewer lines of code doesn't mean a program will run faster.

**If you got this wrong**: Review the material below on OOP:

- [:link: - How to explain object-oriented programming concepts to a 6-year-old](https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/)

<hr>

Question 8.

**Answer & explanation**: This isn't a trick question, the output will be `"Carter Kennedy"` as expected. This is quite a popular pattern because it can make it easier to understand an instance without needing to look at its class definition. Here we can clearly understand that Carter is the instance's `firstName` without needing to look at the arguments passed to `constructor`. For a more extreme example, consider which of these snippets is more readable:

```js
new BankAccount(1000, 0.5, '24-06-85')
```

```js
new BankAccount({ initialBalance: 1000, interestRate: 0.5, branchSortCode: '24-06-85' })
```

Lastly, when adopting this pattern, we can pass properties in any order:

```js
const e = new Employee({ firstName: 'Carter', lastName: 'Kennedy' })
// is the same as
const e = new Employee({ lastName: 'Kennedy', firstName: 'Carter' })
```

**If you got this wrong**: Read the articles below on the object argument pattern:

- [:link: - Cool Javascript 9: Named arguments — Functions that get and return Objects](https://medium.com/@afontcu/cool-javascript-9-named-arguments-functions-that-get-and-return-objects-337b6f8cfa07)
- [:link: - Always pass one argument to your JavaScript function](https://levelup.gitconnected.com/always-pass-one-argument-to-your-javascript-function-4140d909937e)

<hr>

Question 9.

**Answer**: There are 5 classes, and 16 instances: 3 `Team`s, 6 `Player`s, 6 `RacingCar`s, 1 `SafetyCar` and 0 `Vehicle`s.

**Explanation**: Counting the classes is straightforward, everything preceded by the `class` keyword is a class. We need to follow the logic of the program to see how many instances are being created: we iterate through an array with 3 entries (`['Red Bull', 'Mercedes', 'Ferrari']`) and create a ` new Team()` for each. Then for each team we create two `Player`s and `RacingCar`s, and finally create a single `SafetyCar` on the last line.

Note that we never create an instance of `Vehicle`: we treat it as an *abstract class*. Its role is just to provide `RacingCar` and `SafetyCar` the `wheels()` getter method.

**If you got this wrong**: Review the article below:

- [:link: - Object-oriented JavaScript for beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)

<hr>

Question 10.

**Answer**: This code will not work as expected, since it enters into an infinite loop! (On most runtimes we get a `Uncaught RangeError: Maximum call stack size exceeded`).

**Explanation**: Inside the `get name()` method, we call `this.name`. But because we have a getter on `name`, accessing the `.name` property calls the `name()` method (again). Thus the `name()` method keeps calling itself forever (our JavaScript runtime exits with the `"call stack size exceeded"` error to prevent our computer from freezing).

A common pattern to avoid this is to write the "raw" name property using a different key:

```js
class Person {
  constructor(name) {
    this._name = name
  }

  set name(name) {
    this._name = name
  }

  get name() {
    this._name.toUpperCase()
  }
}
```

**If you got this wrong**: Review the below materials on infinite recursion, and getters and setters:

- [:link: - InternalError: too much recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
- [:link: - Working with Objects: Defining getters and setters (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
- [:link: - getter (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)