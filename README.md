# incremental-redux-reducers
Incrementally load Redux reducers into a single store

## Purpose

Redux is an awesome library and has enabled a lot for web developers.
However the trend has been towards including every reducer into a single store.
While this works for small applications where there are only a few reducers,
it can be problematic for large apps where reducers can really bloat the initial payload.

That is where incremental-redux-reducers comes in.
It enables a Redux application to incrementally add reducers into a single store.

If you use a technology like Webpack and have employed code-split points,
this can reduce the initial payload quite dramatically for a large app.

And even if you don't need to reduce your initial payload,
this library enables placement of your reducers throughout your application so that you aren't restricted
to loading all the reducers in a single `reducers` folder.

## How it works

When you use `addReducer`, it will take the name that you provided for Redux's state tree.
It will then replace the Redux reducer (but not the state!) with the set of added reducers.

You can then use `mapReducersToProps` with an object map of the props for your component and each reducer.
This will extract the relevant parts of Redux's state tree for you.
It also tells your bundler (i.e. Webpack, Browserify, etc.) which files require your reducers so that they can be bundled appropriately.

## How to use

This is used on the [torontojs.com's Repo](https://github.com/torontojs/torontojs.com) which you can use as an example.

1. Install it and its dependencies:

  `npm install --save incremental-redux-reducers redux`
  
2. Setup your single Redux store for incremental-redux-reducers:

  ```js
  var setupIncrementalReduxReducers = require("incremental-redux-reducers").setupIncrementalReduxReducers;
  
  // your own code to get a Redux store
  
  setupIncrementalReduxReducers(yourReduxStore);
  ```
  
3. Define your reducers with `addReducer(name, reducerFunction)`:

  ```js
  // yourAwesomeReducer.js
  var addReducer = require("incremental-redux-reducers").addReducer;
  
  module.exports = addReducer("yourAwesomeReducer", function(state, action) {
    // your Redux reducer code here
  });
  ```
  
4. Require and extract relevant bits from Redux's state tree for your application:

  ```js
  var mapReducersToProps = require("incremental-redux-reducers").mapReducersToProps;
  var yourAwesomeReducer = require("./yourAwesomeReducer");
  
  var yourStateMapping = mapReducersToProps({
    yourAwesomeState: yourAwesomeReducer
  });
  
  var yourReduxState = yourStateMapping(yourReduxStore.getState());
  ```
  
5. That's it! Give yourself a pat on the back :)

## Fun facts

`addReducers` will return the reducer function that you defined that's tagged with the name that you provided.
In practice, this means that the export from that module will be a function as you're used to in Redux.

Behind the scenes, `incremental-redux-reducers` actually uses a Redux store to manage the final mapping of all the reducers you add.

Take a look at the code base. It's pretty small and you can see how it all works.

## Disussion

Join the [TorontoJS Slack](http://slack.torontojs.com) chat in the #help channel.

## Licence

MIT
