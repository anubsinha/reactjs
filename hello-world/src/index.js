// $ create-react-app hello-world
// $ rm -rf src/*
// $ touch src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, world!</h1>
// The markup here is called JSX (Javascript XML) and gets compiled into react code by Babel
// The compiled version looks something like React.createElement() and so reference to React is needed
// import React from 'react' helps resolves reference to React in React.createElement() call


console.log(element); 
// This will give you the object representation of the JSX element on your browser console
// Virtual DOM which is light weight in-memory representation of the UI
// When the state of a react element changes, react compares the new version of the element with the earlier version
// and then applies the diff to the real DOM which the browser uses

ReactDOM.render(element, document.getElementById('root'));
// render takes in the which element to render as its first argument and 
// where to render this element as its second argument
// where to render needs to be a place in the real DOM

// $ npm run start
