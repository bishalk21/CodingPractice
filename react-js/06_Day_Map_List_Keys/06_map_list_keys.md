[<< Day 5](./../05_Day_Props/05_props.md) | [Day 7 >>](../07_Day_Class_Components/07_class_components.md)

- [Mapping arrays](#mapping-arrays)
  - [Mapping and rendering arrays](#mapping-and-rendering-arrays)
    - [Mapping array of numbers](#mapping-array-of-numbers)
    - [Mapping array of arrays](#mapping-array-of-arrays)
    - [Mapping array of objects](#mapping-array-of-objects)
    - [Key in mapping arrays](#key-in-mapping-arrays)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
  - [Exercises: Level 3](#exercises-level-3)

# Mapping arrays

An array is the most frequently used data structure to handle many kinds of problems. In React, we use map to modify an array to list of JSX by adding a certain HTML elements to each element of an array.

## Mapping and rendering arrays

Most of the time data is in the form of an array or an array of objects. To render this array or array of objects most of the time we modify the data using _map_. In the previous section, we have rendered the techs list using a map method. In this section, we will see more examples.

In the following examples, you will see how we render an array of numbers, an array of strings, an array of countries and an array of skills on the browser.

```js
import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        {[1, 2, 3, 4, 5]}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

If you check the browser, you will see the numbers are attached together in one line. To avoid this, we modify the array and change the array elements to JSX element. See the example below, the array has been modified to a list of JSX elements.

### Mapping array of numbers

```js
import React from "react";
import ReactDOM from "react-dom";

const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <li>{number}</li>);
  return list;
};

// App component

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Mapping array of arrays

Let's see how to map array of arrays

```js
import React from "react";
import ReactDOM from "react-dom";

const skills = [
  ["HTML", 10],
  ["CSS", 7],
  ["JavaScript", 9],
  ["React", 8],
];

// Skill Component
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
);

// Skills Component
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />);
  console.log(skillsList);
  return <ul>{skillsList}</ul>;
};

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Mapping array of objects

Rendering array of objects

```js
import React from "react";
import ReactDOM from "react-dom";

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country country={country} />);
  return <div>{countryList}</div>;
};
// App component
const App = () => (
  <div className="container">
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Key in mapping arrays

Keys help React to identify items which have changed, added, or removed. Keys should be given to the elements inside the array to give the elements a stable identity. The key should be unique. Mostly data will come with as an id and we can use id as key. If we do not pass key to React during mapping it raises a warning on the browser. If the data does not have an id we have to find a way to create a unique identifier for each element when we map it. See the following example:

```js
import React from "react";
import ReactDOM from "react-dom";

const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((num) => <li key={num}>{num}</li>);
  return list;
};

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Let's also add in key in countries mapping example.

```js
import React from "react";
import ReactDOM from "react-dom";

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
  return <div>{countryList}</div>;
};
const App = () => (
  <div className="container">
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Exercises

## Exercises: Level 1

1. Why you need to map an array ?

> An array is the most frequently used data structure to handle many kinds of problems. In React, we use map to modify an array to list of JSX by adding a certain HTML elements to each element of an array.

Most of the time data is in the form of an array or an array of objects. To render this array or array of objects most of the time we modify the data using _map_.

2. Why we need keys during mapping an array ?

> Keys help React to identify items which have changed, added, or removed. Keys should be given to the elements inside the array to give the elements a stable identity. The key should be unique. Mostly data will come with as an id and we can use id as key. If we do not pass key to React during mapping it raises a warning on the browser. If the data does not have an id we have to find a way to create a unique identifier for each element when we map it.

3. What is the importance of destructuring your code ?

> Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.

4. Does destructuring make your code clean and easy to read ?

> Yes, destructuring makes your code clean and easy to read.

## Exercises: Level 2

1. In the following design, evens are green, odds are yellow and prime numbers are red. Build the following colors using React component

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

```js
import React from "react";
import ReactDOM from "react-dom";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Number = ({ number }) => {
  let color = "black";
  if (number % 2 === 0) {
    color = "green";
  } else if (number % 2 !== 0) {
    color = "yellow";
  }
  if (number === 2 || number === 3 || number === 5 || number === 7) {
    color = "red";
  }
  return (
    <div>
      <h1 style={{ color: color }}>{number}</h1>
    </div>
  );
};

const Numbers = ({ numbers }) => {
  const list = numbers.map((num) => <Number key={num} number={num} />);
  return list;
};

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

2. Create the following hexadecimal colors using React component

```js
const hexaColors = [
  "#f15025",
  "#ffaa00",
  "#00b894",
  "#00cec9",
  "#0984e3",
  "#6c5ce7",
  "#d63031",
  "#fd79a8",
  "#fdcb6e",
  "#e17055",
  "#fab1a0",
  "#ffeaa7",
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#a29bfe",
  "#dfe6e9",
  "#b2bec3",
  "#636e72",
  "#fd79a8",
  "#fdcb6e",
  "#e17055",
  "#fab1a0",
  "#ffeaa7",
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#a29bfe",
  "#dfe6e9",
  "#b2bec3",
  "#636e72",
];
```

```js
import React from "react";
import ReactDOM from "react-dom";

const hexaColors = [
  "#f15025",
  "#ffaa00",
  "#00b894",
  "#00cec9",
  "#0984e3",
  "#6c5ce7",
  "#d63031",
  "#fd79a8",
  "#fdcb6e",
  "#e17055",
  "#fab1a0",
  "#ffeaa7",
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#a29bfe",
  "#dfe6e9",
  "#b2bec3",
  "#636e72",
  "#fd79a8",
  "#fdcb6e",
  "#e17055",
  "#fab1a0",
  "#ffeaa7",
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#a29bfe",
  "#dfe6e9",
  "#b2bec3",
  "#636e72",
];

const HexaColor = ({ color }) => {
  return (
    <div>
      <h1 style={{ color: color }}>{color}</h1>
    </div>
  );
};

const HexaColors = ({ colors }) => {
  const list = colors.map((color) => <HexaColor key={color} color={color} />);
  return list;
};

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Hexa Colors List</h1>
        <ul>
          <HexaColors colors={hexaColors} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Exercises: Level 3

1.Make the following bar group using the given

```js
const data = [
  { name: "A", value: 100 },
  { name: "B", value: 60 },
  { name: "C", value: 30 },
  { name: "D", value: 80 },
  { name: "E", value: 20 },
];
```

```js
import React from "react";
import ReactDOM from "react-dom";

const data = [
  { name: "A", value: 100 },
  { name: "B", value: 60 },
  { name: "C", value: 30 },
  { name: "D", value: 80 },
  { name: "E", value: 20 },
];

const Bar = ({ name, value }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div
        style={{
          height: "20px",
          width: `${value}px`,
          backgroundColor: "green",
        }}
      ></div>
    </div>
  );
};

const Bars = ({ data }) => {
  const list = data.map((item) => (
    <Bar key={item.name} name={item.name} value={item.value} />
  ));
  return list;
};

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Bar Chart</h1>
        <ul>
          <Bars data={data} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

🎉 CONGRATULATIONS ! 🎉

[<< Day 5](./../05_Day_Props/05_props.md) | [Day 7 >>](../07_Day_Class_Components/07_class_components.md)
