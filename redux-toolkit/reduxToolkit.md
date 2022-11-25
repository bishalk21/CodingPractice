# Redux Toolkit

## What is Redux?

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

## 1. What is Redux Toolkit?

Redux Toolkit is a package that contains a set of tools to help you write Redux logic. It is intended to be the standard way to write Redux logic.

## 2. Why use Redux Toolkit?

Redux Toolkit is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"

## 3. What is the alternative to Redux Toolkit?

The alternative to Redux Toolkit is to write your own Redux logic. This is fine, but it can be a lot of work to set up a Redux store from scratch.

## 4. How to use Redux Toolkit?

### 4.1. Installation

```bash
npm install @reduxjs/toolkit
```

### 4.2. Usage

```js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // ...reducers
  },
});
```

## 5. What are the APIs included in Redux toolkit?

### 5.1. configureStore

- `configureStore` is the primary API in Redux Toolkit. It sets up the store and configures it to add support for Redux Thunk and Redux DevTools Extension automatically.

- `configureStore` accepts a single object argument with the following fields:

  - `reducer`: a single reducer function that will be used as the root reducer, or an object of slice reducers that will be passed to `combineReducers()`

  - `preloadedState`: the initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you use `combineReducers()` to produce the root reducer function (either directly or indirectly by passing an object as `reducer`), this must be an object with the same shape as `combineReducers()` keys.

  - `middleware`: an array of Redux middleware to install. See Redux's `applyMiddleware()` documentation for details.

  - `enhancers`: an array of Redux store enhancers to install. See Redux's `compose()` documentation for details.

  - `devTools`: if `false`, Redux DevTools Extension integration will be disabled. If `true`, it will be enabled with default options. If an object, it will be passed as options to the Redux DevTools Extension. See Redux DevTools Extension documentation for details.

- `configureStore` returns the Redux store instance.

### 5.2. createSlice

- `createSlice` is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

- `createSlice` accepts a single object argument with the following fields:

  - `name`: a string name for this slice of state. Used to namespace the generated action types.

  - `initialState`: the initial state value for this slice of state.

  - `reducers`: an object full of reducer functions. Each field will be converted into a generated action creator and action type.

  - `extraReducers`: an object full of reducer functions that should be run for all actions. This is similar to the `default` case in a `switch` statement.

- `createSlice` returns an object with the following fields:

  - `reducer`: the reducer function generated from the `reducers` argument

  - `actions`: an object with the generated action creators

  - `actionTypes`: an object with the generated action types

### 5.3. createAsyncThunk
