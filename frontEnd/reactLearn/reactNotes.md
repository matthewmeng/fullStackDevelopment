## 1. React Notes

1. **What's a component?**
    - A component is a piece of the UI that has its own logic and appearance (e.g., a button or an entire page).
    ```jsx
    function MyButton() {
      return (
        <button>I'm a button</button>
      );
    }

    export default function MyApp(){
        return (
            <div>
                <h1> Welcome to my app</h1>
                <MyButton/>
            </div>
       );
    }
    ```
    -  React component names must always start with a capital letter, while HTML tags must be lowercase.

2. **Why do we need `import React from 'react'` in each file?**
    - JSX syntax used in the component needs to be transpiled into JavaScript code that can be understood by the browser. React library provides methods like `React.createElement()` to achieve this transformation. So we need to import 'React' so that JSX can be transpiled correctly.

    - **What is JSX?**
        - JSX is a syntax extension for JavaScript that lets us write HTML-like markup inside a JavaScript file. The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript -- often in separate files. But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place -- components. (JSX is a syntax extension, while React is a JavaScript library.)

    - **The Rules of JSX:**
        - a. Return a single root element.
            - because JSX is transformed into plain JavaScript objects. We can't return 2 objects from a function without wrapping
              them into an array.
            - We need to use <></>
        - b. Close all the tags.
        - c. camelCase most of the things! JavaScript has limitations on variable names, i.e., their names can't contain dashes or be reserved words like class.

3. **Why do we need `export default XXX`?**
    - It is used to export the 'XXX' component in other files within our project. When we 'import' a component from another file, we usually use the `export default` syntax to export it. This syntax allows us to import the component using any name we want in the importing file.

    - Using `export default` allows us to have a simpler import statement and makes our code easier to read and maintain.

4. **Writing markup with JSX**
    - JSX is stricter than HTML. We have to close tags like `<br />`. Our component also can't return multiple JSX tags. We have to wrap them into a shared parent, like a `<div> ... </div>` or an empty `<>...</>` wrapper.

5. **Adding styles**
    - In React, we specify a CSS class with `className`, which works the same way as the HTML class attribute.

    ```css
    .avatar {
        border-radius: 50%;
    }
    ```

6. **Displaying data**
    - JSX lets us put markup into JavaScript. When we want to add a little JavaScript logic or reference a dynamic property inside that markup, we can use curly braces in our JSX to open a window to JavaScript.

7. **Conditional rendering**
    - Except for the original `if` statement, we can use the conditional operator. If we don't need the else branch, we can also use a shorter logical `&&` syntax.

8. **Rendering lists**
    - We rely on JavaScript features like `for` loop and the array `map()` function to render lists of components.

9. **Responding to events**
    - We can respond to events by declaring event handler functions inside our components.

10. **Updating the screen**
    - State - when we want our component to "remember" some information and display it.

11. **What are Props**
    - Props are a shorthand for "properties," which are a way of passing data from parent to child components. They are used to customize and configure React components, allowing us to make our components dynamic and reusable.

12. **Using Hooks**
    - Functions starting with `use` are called Hooks. `useState` is a built-in Hook provided by React. Hooks are more restrictive than other functions.

13. **Keeping components pure**
    - A pure function:
        - Minds its own business. It does not change any objects or variables that existed before it was called.
        - Same inputs, same output. Given the same inputs, a pure function should always return the same result.


