## JavaScript class

- JavaScript classes are just a thin mirage over regular functions and prototypal inheritance.
  - The constructor function is called with the new keyword.
  - The constructor function, by convention, starts with a capital letter.
  - The constructor function controls the setting of data on the objects that will be created.
  - "Inherited" methods are placed on the constructor function's prototype object.

### ES5 classes

```js
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

Plane.prototype.startEngines = function () {
  console.log("starting engines...");
  this.enginesActive = true;
};
```

### ES6 classes

- ES6 provides a new `class` syntax.
- A `class` is just a function.
- When creating a new instance, the `new` keyword must be used. Otherwise, an error will be thrown.
- Use keyword `static` to mark a method as static.

```js
class Plane {
  // everything inside the constructor function
  // is inside the new constructor method
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  // methods are placed inside the class
  startEngines() {
    console.log("starting engines…");
    this.enginesActive = true;
  }
}

typeof Plane; // function
```

- Benefits of classes
  - Less setup
  - Clearly defined constructor function
  - Everything is contained

## ES6 subclasses

- Use `super` and `extends` to extend a class.
- In the constructor function, `super` must be called before `this` can be used.

```js
// ES6 version

class Tree {
  constructor(
    size = "10",
    leaves = { spring: "green", summer: "green", fall: "orange", winter: null }
  ) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === "spring") {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    // super as a function
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    // super as an object
    super.changeSeason(season);
    if (season === "spring") {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

// ES5 version

function Tree(size, leaves) {
  this.size = typeof size === "undefined" ? 10 : size;
  const defaultLeaves = {
    spring: "green",
    summer: "green",
    fall: "orange",
    winter: null,
  };
  this.leaves = typeof leaves === "undefined" ? defaultLeaves : leaves;
  this.leafColor;
}

Tree.prototype.changeSeason = function (season) {
  this.leafColor = this.leaves[season];
  if (season === "spring") {
    this.size += 1;
  }
};

function Maple(syrupQty, size, leaves) {
  Tree.call(this, size, leaves);
  this.syrupQty = typeof syrupQty === "undefined" ? 15 : syrupQty;
}

Maple.prototype = Object.create(Tree.prototype);
// maple's prototype has been overwritten, so
// the constructor property and the original
// constructor function needs to be reconnected
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function (season) {
  Tree.prototype.changeSeason.call(this, season);
  if (season === "spring") {
    this.syrupQty += 1;
  }
};

Maple.prototype.gatherSyrup = function () {
  this.syrupQty -= 3;
};
```
