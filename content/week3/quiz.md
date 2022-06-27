# Week 3 - Mastery quiz

<hr>

1. Which of these three snippets is valid CSS?

```css
border-color {
  span: red;
}
```

```css
div * {
  border-color: red;
}
```

```css
body {
  red border;
}
```

<hr>

2. Is this valid HTML? Why or why not?

```html
<div>
  <p>
    When creating webpages, we use:

    <li>
      <ul>
        HTML for content and structure
      </ul>
      <ul>
        CSS for presentation
      </ul>
      <ul>
        JS for behaviour
      </ul>
    </li>
  </p>
</div>
```

<hr>

3. Given the following HTML and CSS, in what color will `"John Doe"` appear?

```html
<div class="title">Hello world</div>
<article>
  <p>The rain in spain falls mainly on the plain</p>

  Written by <span id="author">John Doe</span>
</article>
```

```css
article span {
  color: green;
}

span {
  color: red;
}

.title #author {
  color: blue;
}
```

<hr>

4. Given the following HTML and JavaScript, what should `?????` be changed to make the `listener` function fire when the button is clicked. With `?????` replaced, what will the user see when the button is clicked?

```html
<button>Click me</button>

<script>
  const b = document.querySelector('button')

  b.?????('click', function listener() {
    b.style.display = 'none'
  })
</script>
```

<hr>

5. You're asked to recreate the image below (a BBC news headline) with HTML/CSS. Which HTML elements would you use, and why? You should actually explicitly write out HTML you'd write in your editor to answer this question (don't worry about the CSS).

<img src='https://user-images.githubusercontent.com/636814/92104616-7aabff80-edd9-11ea-839f-8665c52bf7a0.png' width='800'>

<hr>

6. What's the problem with the code below?:

```html
<ul>
  <li id="lucky-number">Your lucky number is 42</li>
</ul>
<button>Randomize</button>

<script>
  document.querySelector('button').addEventListener('click', function () {
    const random = Math.floor(Math.random() * 100)

    document
      .querySelector('#lucky-number')
      .insertAdjacentHTML(
        'afterend',
        `<li id='lucky-number'>Your lucky number is ${random}</li>`
      )
  })
</script>
```

<hr>

7. JavaScript executed in the browser can (true/false for each):

- Add elements to the current page
- Read any file from the user's hard drive
- Log messages to the DevTools consoles
- Continue executing when the user isn't connected to the internet
- Read the value entered into a password field on the current page
- Read a user's complete browsing history

<hr>

8. What will the result of clicking the button be given the snippet below?:

```html
<button>Click me</button>

<script>
  const b = document.querySelector('button')

  b.addEventListener('click', function () {
    b.addEventListener('click', function () {
      alert('Hi!')
    })
  })
</script>
```

<hr>

9. What will the result of clicking the button be given the snippet below?:

```html
<button>Click me</button>

<script>
  const b = document.querySelector('button')

  b.addEventListener('click', function () {
    alert('Hi!')
    if ([1, 2, 3] !== [1, 2, 3]) throw new Error('Oops')
    alert('Hi again!')
  })
</script>
```

<hr>

10. We begin with the following HTML and CSS:

```html
<div>
  <img src="dog.jpg" />
</div>

<style>
  * {
    box-sizing: border-box;
  }

  div {
    display: inline-block;
  }

  img {
    width: 200px;
    height: 200px;
  }
</style>
```

Yielding this result:

<img src='https://user-images.githubusercontent.com/636814/92107937-7df5ba00-edde-11ea-9f15-e5672415e6ba.png' width='250'>

Assuming we want the rendered output to match the image below:

<img src='https://user-images.githubusercontent.com/636814/92107984-91a12080-edde-11ea-8989-d7818618893e.png' width='290'>

replace the `????` placeholders with the appropriate CSS properties:

```html
<div>
  <img src="dog.jpg" />
</div>

<style>
  * {
    box-sizing: border-box;
  }

  div {
    ????: #ccc;
    display: inline-block;
    ????: 15px;
  }

  img {
    width: 200px;
    height: 200px;
    ????: 100px;
    ????: 5px solid #2bc;
  }
</style>
```

<hr>

11. What will happen when I click on the green `div` in this example?

```html
<div id="outer" style="background-color: blue; height: 200px; width: 200px">
  <div
    id="inner"
    style="background-color: green; height: 100px; width: 100px"
  ></div>
</div>

<script>
  const outer = document.getElementById('outer')
  const inner = document.getElementById('inner')

  outer.addEventListener('click', function () {
    alert('Outer Hi!')
  })

  inner.addEventListener('click', function () {
    alert('Inner Hi!')
  })
</script>
```

<hr>

12. What will be the HTML generated from this code be?

```html
<div id="content"></div>

<script>
  const content = document.getElementById('content')
  const container = document.createElement('div')
  const names = ['Mo', 'Berkan', 'Kasia', 'Nathan', 'Sean', 'Sohail']
  const tags = names.map((name) => {
    const ele = document.createElement('p')
    ele.innerText = name
    return ele
  })
  content.appendChild(tags.pop())
  content.appendChild(tags.pop())
  content.appendChild(tags.pop())
  container.append(...tags)
  content.appendChild(container)
</script>
```
