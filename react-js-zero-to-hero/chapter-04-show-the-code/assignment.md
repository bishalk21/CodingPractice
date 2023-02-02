## Is JSX mandatory for React?

- JSX is not mandatory for react. we can still work with react using create element from the react object from the react library.
- JSX is a simple way of creating react element by using HTML like language to make developers life easy, but at the end of the day JSX is also converted into a react element.
- Basically React element can be created using plain javascript, JSX justs gives us a synatical sugar for creating a react element.
  <br />

- [Is JSX mandatory for React?](https://reactjs.org/docs/react-without-jsx.html#:~:text=JSX%20is%20not%20a%20requirement,%2C%20...children)%20.)

## Is ES6 mandatory for React ?

- Again react element can be created using plain JS, we don't need ES6 for implementing react, ES6 makes developer lives easy thats it. Still we can implement React using Plain js.
  <br />
- [Is ES6 mandatory for React ?](https://reactjs.org/docs/react-without-es6.html)

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?

In react {} are used to write Js code with in JSX syntax.

    - {TitleComponent} to render the variable which holds the react element in it.
    - {<TitleComponent/>} to render the functional component. here we can pass the properties.
    - {<TitleComponent></TitleComponent>} to render the functional component also we can give child component and elements in it.

### [JSX-in-Detail](https://reactjs.org/docs/jsx-in-depth.html)

## How can I write comments in JSX?

In JSX we can write comments with in the {} as shown below.

```js
const TitleComponent = () => {
  return (
    <div>
      <img src="../../xyz.jpeg" />
      {
        // hello this is comment
        /**
         *
         * This is multi-line comments
         * comments are given here
         **/
      }
    </div>
  );
};
```

## What is <React.Fragment></React.Fragment> and <></>?

In react we have a rule, that is we can have only one parent element. we can't write two parent elements with in a react element.
But if we want to render multiple elements or components at same time, we can either wrap them in a div element.But it is not best way. we are trying to add Div tag
unnecessary into DOM. To avoid it we can use React.Fragment.

"React.Fragment" is a pattern in React. component provided by the react library, for component to return multiple elements. Basically it allows us to group the children without adding extra nodes to the DOM.

```js
const render = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
```

<></> is a short-hand way of writing React.Fragment. Both are same at the end of the day.

## What is Virtual DOM?

- Virtual DOM is a representation of the actual DOM in our Code.the reason we need virtual DOM is make react faster by using Reconciliation concept.
- the Virtual DOM is a programming concept or strategy where a virtual representation of UI is kept in memory and synced with the actual DOM vy a library such as ReactDOM. this process is called reconciliation.

## what is Reconciliation in React?

- Reconciliation uses the Diffing Algorithm, when Diffing two trees (Virtual DOM and actual DOM), React finds out what needs to be updated & just updates that particular part of the tree instead of rendering the whole DOM tree.

###[Reconciliation in React](https://reactjs.org/docs/reconciliation.html)

## What is React Fiber?

Fibers are low-level abstraction of Reconciliator, A fiber represents a unit of work. a fiber is a Javascript object that contains information about a component it's inputs, and its output. A fibre corresponds to a stack frame, but it also corresponds to an instance of a component.

### Why we need a Fiber.

- Basically to improve the React performance, How it increases the performance??

The performance is increases by prioritizing the work coming from the User interactions (such as an animation caused by a button click) over less important background work (Such as rendering new content just loaded from the network) to avoid dropping frames.
<br />
"a Primary goal is to enable React to take advantage of the scheduling".

    - pause work and come back to it later.
    - assign priority to different types of work.
    - reuse previously completed work.
    - abort work if it's no longer needed.

### [Virtual DOM and Internals](https://reactjs.org/docs/faq-internals.html)

### [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

## Why we need keys in react? When do we needs keys in React?

- Keys: A key is a special string attribute you need to include when creating list elements.

### Why we need it?

- Key help React identify which have changed, are added, or removed. Keys should be given to the elements inside the array to give the elements a stable identity.
- Other wise React confuses and will render the whole list in worst cases, which will cause performance issues.

### When do we need keys in React?

Key is needed when ever there is a elements list present and that to we do some operations on top of the list elements, like adding new element removing element or sorting the elements.

- If we don't add the keys, In worst cases it will render the whole list of elements unnecessary, which will leads to performance issues.

### [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

### [Rendering Lists](https://beta.reactjs.org/learn/rendering-lists)

## What are the props in the React? Ways to?

- props are the arguments that we pass to a React Component.
- Basically props are the way of communication between the React components, A parent React component and pass some props to its children React components, So they can use those info to change the data. It is similar to the attributes in the HTML Tags, but we can pass any Javascript values, like object, array and a valid JS expression.

-

### [Components and Props](https://reactjs.org/docs/components-and-props.html)

### [First Component](https://beta.reactjs.org/learn/your-first-component)

### [Passing Props to a Component](https://beta.reactjs.org/learn/passing-props-to-a-component)

## What is a Config Driven UI?

An application that can change its look with the change in the configuration data is know as Config Driven UI.
Unlike a traditional way of building an application, CDD (Config Driven Development)

1. Independent components are build first at the atomic level. <br />
2. An Interface (JSON) is compose to define the High level UI acts as blue print. <br />
3. Combination of Independent components and UI blue print (JSON) used to build-up or build-out the application. <br />

### [Config driven UI ](https://iamrajatsingh1.medium.com/config-driven-ui-c8e93b730993)

## What is Optional Chaining?

The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

```js
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

### [Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## res Cloudinary - CDN

Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimizations to delivery.

## arguments and parameter

- You pass in arguments and receive parameters in function

```js
function fn(param1, param2) {} // parameter
fn("abc", "123"); // arguments
```

## props as argument and parameter

```js

// argument
const fn = () => {
  return (
    <RestaurantCard reataurantList={reataurantList[0]}>
    {
      // restaurantList works like argument in function RestaurantCard as
      RestaurantCard(reataurantList[0]);
    }
  )
}
```

```js
// parameter
const RestaurantCard = ({ reataurantList }) => {
  // props = {RestaurantCard}
  console.log(reataurantList);
};
```

**key:** React wraps all the properties into variables known as props (can be called anything).

```js
// const RestaurantCard = (props) => { we destructure data from props
const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data;

  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
      {/* <h2>{props.restaurant.data?.name}</h2> */}
      <h2>{name}</h2>
      {/* <h3>Burgers, American</h3> */}
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

// props - properties
const BodyComponent = () => {
  return (
    <div className="restro-card">
      {/* {RestaurantCard(restrauList[0])} - argument in function */}
      <RestaurantCard restaurant={restrauList[0]} />
      <RestaurantCard restaurant={restrauList[1]} />
      <RestaurantCard restaurant={restrauList[2]} />
      <RestaurantCard restaurant={restrauList[3]} />
    </div>
  );
};
```

### We can also destructure all the properties of restrauList in Card itself:

```js
// const RestaurantCard = (props) => { we destructure data from props
const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data;

  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
      {/* <h2>{props.restaurant.data?.name}</h2> */}
      <h2>{name}</h2>
      {/* <h3>Burgers, American</h3> */}
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

// props - properties
const BodyComponent = () => {
  return (
    <div className="restro-card">
      {/* {RestaurantCard(restrauList[0])} - argument in function */}
      {/* <RestaurantCard restaurant={restrauList[0]} />*/}
      <RestaurantCard {...restrauList[0].data} />
      <RestaurantCard {...restrauList[1].data} />
      <RestaurantCard {...restrauList[2].data} />
      <RestaurantCard {...restrauList[3].data} />
    </div>
  );
};
```

Using map() function to loop over number of cards - best way

```js
const BodyComponent = () => {
  return (
    <div className="restro-card">
      {/* {RestaurantCard(restrauList[0])} - argument in function */}
      {/* <RestaurantCard restaurant={restrauList[0]} />
      <RestaurantCard {...restrauList[0].data} />restrauList
      <RestaurantCard {...restrauList[1].data} />
      <RestaurantCard {...restrauList[2].data} />
      <RestaurantCard {...restrauList[3].data} /> */}

      {restrauList.map((restaurant) => {
        return <RestaurantCard {...restrauList.data} />;
      })}
    </div>
  );
};
```

### [map, filter & reduce - YouTube ](https://www.youtube.com/watch?v=zdp0zrpKzIE)
