## React Notes -- Events

1. **State?**
    - In react, data that changes over time is called 'state'. we can add state to any component, and update it as needed.
    - 'Event Handler' will help when you interact with the web to perform the functions.
2. **Arrow function**
    ```jsx
   // Single parameter without parentheses
   const functionName = parameter => expression;
   
   // Multiple parameters or no parameter with parentheses
   const functionName = (parameter1, parameter2) => expression;
   
   // Body with multiple statements enclosed in curly braces
   const functionName = (parameter1, parameter2) => {
   // Statements
   return expression;
   ```
   - a. No 'this' Binding: They inherit 'this' from the enclosing lexical context (the context in which they are defined). This behavior can be useful when working with object methods or event handlers.
   - b. Implicit Return: when the body consists of a single expression, it is implicitly returned without using the 'return' keyword.
   ```jsx
   const double = x => x * 2;
   ```
   - c. No 'arguments' Objects
   - d. Cannot be used as Constructors: can not be used with 'new' keyword. runtime error.
Let's analyse the code below:
   ```jsx
   export default function App() {
   return (
   <Toolbar
   onPlayMovie={() => alert("Playing!")}
   onUploadImage={() => alert("Uploading!")}
   />
   );
   }
   
   function Toolbar({ onPlayMovie, onUploadImage }) {
   return (
   <div>
   <Button onClick={onPlayMovie}>Play Movie</Button>
   <Button onClick={onUploadImage}>Upload Image</Button>
   </div>
   );
   }
   
   function Button({ onClick, children }) {
   return <button onClick={onClick}>{children}</button>;
   }
   ```
   This code defines a React application with three components: `App`, `Toolbar`, and `Button`.

   a. **App Component**: This is the top-level component of the application. It renders a `Toolbar` component and passes two props (`onPlayMovie` and `onUploadImage`) to it. These props are functions that trigger alerts when certain actions occur.
   
   b. **Toolbar Component**: This component receives props `onPlayMovie` and `onUploadImage` from its parent (`App`). It renders two `Button` components, one for playing a movie and another for uploading an image. Each button receives an `onClick` handler corresponding to the respective action to be taken when the button is clicked.
   
   c. **Button Component**: This is a reusable component for rendering buttons. It receives two props: `onClick` (a function to be executed when the button is clicked) and `children` (the content of the button, typically text). It renders a `<button>` element with the provided `onClick` handler and children.
   
   Overall, this code demonstrates the composition of React components, passing props between components, and handling events using function callbacks. When the user clicks the "Play Movie" or "Upload Image" buttons, an alert message will be displayed accordingly.

3. **Hook**
   - We can add state to a component with a 'useState' Hook.
   - Hooks are special functions that let our components use React features (state is one of those features).
   - Hook takes the initial state and returns a pair of values: the current state, and a state setter function that lets us update it.
   ```jsx
   const [index, setIndex] = useState(0);
   const [showMore, setShowMore] = useState(false);
   ```