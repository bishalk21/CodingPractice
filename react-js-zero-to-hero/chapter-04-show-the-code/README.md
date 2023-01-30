# React Features

### Table of contents

1. [React Fragment](##react.fragment)
2. [CSS in React](##css-in-react)

## React.Fragment

- jsx - one parent
- <Fragment>, often used via <>...</> syntax, lets you group elements without a wrapper node.

### Usage

- Returning multiple elements
- Assigning multiple elements to a variable
- Grouping elements with text
- Rendering a list of Fragments

[Back to top](###table-of-contents)

## CSS in React

### Styling React components with inline styling

- written as attributes and are passed to the element.
- First, there are two curly brackets. What we are rendering is written in JSX, and for pure JavaScript expressions to be used in JSX, they have to be included in curly brackets. The first curly bracket injects JavaScript into JSX. The inner curly brackets create an object literal. The styles are passed as object literals to the element.
- The next thing to note is that the properties are separated by a comma. This is because what we are passing is an object. Because it is a JavaScript attribute, the attributes are written in camelCase and not separated by a dash.

```js
const AddTodo = () => {
  //...
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white" }}>
        TODO
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label
          style={{ padding: "10px 20px", textAlign: "center" }}
          htmlFor="new-todo"
        >
          What needs to be done?
        </label>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </div>
      {message && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ color: "red" }}>{message}</h4>
        </div>
      )}
    </div>
  );
};
export default AddTodo;
```

**💡** JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX, but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children.

### Creating a style object variable

- create a style object variable the same way we create a JavaScript object. This object is then passed to the style attribute of the element we want to style.

```js
const AddTodo = () => {
  return (
    <div style={Container}>
      <h2 style={Header}>TODO</h2>
      <div style={LabelContainer}>
        <label style={Label} htmlFor="new-todo">
          What needs to be done?
        </label>
      </div>
      <div style={FormContainer}>
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </div>
      {message && (
        <div style={Message}>
          <h4 style={{ color: "red" }}>{message}</h4>
        </div>
      )}
    </div>
  );
};

const Container = { display: "flex", flexDirection: "column" };
const Header = { padding: "10px 20px", textAlign: "center", color: "white" };
const LabelContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Label = { padding: "10px 20px", textAlign: "center" };
const FormContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const ErrorMessage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
```

**💡** We did not have to use double curly brackets in the element because these variables are objects themselves.

- If you look at the object properties, the camelCases will be converted to dash-separated CSS attributes during compilation. For instance, this:

```js
backgroundColor: "#44014C",
minHeight: "200px",
boxSizing: "border-box"
In plain CSS, these will be written as:
background-color: #44014C;
min-height: 200px;
box-sizing: border-box;
```

### Sharing styles across many React components

```js
// styles.js
const Container = { display: "flex", flexDirection: "column" };
const Header = { padding: "10px 20px", textAlign: "center", color: "white" };
const LabelContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Label = { padding: "10px 20px", textAlign: "center" };
const FormContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const ErrorMessage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styles = {
  Container: Container,
  Header: Header,
  LabelContainer: LabelContainer,
  Label: Label,
  ErrorMessage: ErrorMessage,
  FormContainer: FormContainer,
};

export const styles = {
  Container: Container,
  Header: Header,
  LabelContainer: LabelContainer,
  Label: Label,
  ErrorMessage: ErrorMessage,
  FormContainer: FormContainer,
};

/** AddTodo.js file **/

// Import the styles
import { styles } from "./styles";

const AddTodo = () => {
  //....
  return (
    <div style={styles.Container}>
      <h2 style={styles.Header}>TODO</h2>
      <div style={styles.LabelContainer}>
        <label style={styles.Label} htmlFor="new-todo">
          What needs to be done?
        </label>
      </div>
      <div style={styles.FormContainer}>
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </div>
      {message && (
        <div style={styles.ErrorMessage}>
          <h4 style={{ color: "red" }}>{message}</h4>
        </div>
      )}
    </div>
  );
};
```

### Using styled-components

With styled-components, we can write actual CSS in our JavaScript file. This means you can use all the features of CSS — like media queries, pseudo-selectors, nesting, and more — in JavaScript.

```bash
$ npm install --save styled-components
```

```js
/** AddTodo.js file **/
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  padding: 10px 20px;
  text-align: center;
  color: white;
`;

function AddTodo() {
  //...

  return (
    <Container>
      <Header>TODO</Header>
      <LabelContainer>
        <Label htmlFor="new-todo">What needs to be done?</Label>
      </LabelContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </FormContainer>
      {message && (
        <ErrorContainer>
          <ErrorMessage>{message}</ErrorMessage>
        </ErrorContainer>
      )}
    </Container>
  );
}
```

### Styling with Tailwind CSS
