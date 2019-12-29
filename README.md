# Robofriends

React is one `way data flow` -> data flows from top to bottom and never the other way around.
`Virtual DOM` is a js object(just a copy of the DOM). It describes the current state of the app. I just give that that object to react and it will automatically make changes to the DOM and paint the picture in the most optimal way.

`create-react-app` is a global package installed from npm. Creates a starter project that contains webpack, babel, linting, debugging etc. Creates the infrastructure so I right away start writing the app.

`react-scripts`

`manifest.json` allows people to download a shortcut to my website and have an icon on their desktop.

`favicon` is the little icon in front the site name.

React has webpack that does the bundling(I can import React directly).

`react` is the core of the package that does the manipulation for us. React can be used for VR, mobile... so you can plug in differnt libraries like `react-dom` for the browser.

`registerServiceWorkers` is a new feature that allows the app to run faster and potentially work offline.

`CardsArray` is  a pure function. It receives an input and than allways returns an output. -> pure(dumb) components.

`state` is the description of an app. It is simply an object that describes the app. The state is the robots and whatever is in the searchbox. State is able to change. Is the memory of the app(it needs to remenber things)

`props` are simply things that come out of state.
A parent feeds state into a child component and as soon as the child component receives the state it's a property. That child can never change that property. The parent just tells it what the state is and the child receives it as robots.

### Redux
* good for state managemnet
* useful for sharing data between containers
* predictable state management using 3 principles:
    - `single source of truth`(one object that describes the entire state of the app)
    - s`tate is read only` -> the state object we create with redux will never get modified -> create new state after each user action
    - `changes using pure functions` -> recives an input and allways returns

`action reator` - function that returns an action

`action` - payload of information(object)

`middleware` - a tunnel the action goes through. It can modify an action or trigger another one. 
        `redux-logger`
        `redux-thunk` - handles async actions
        
`reducer` - pure function. Specifies how the app's state changes in response to actions sent to the store. A function that reads the action and returns the a state of the app.

`store` - the entire state of the app

### Utilities and libraries

#### [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

#### [Ramda](https://ramdajs.com)
#### [Lodash](https://lodash.com)

#### [glamorous](https://glamorous.rocks)
#### [styled-components](https://www.styled-components.com)
#### [css-modules](https://github.com/css-modules/css-modules)

#### [Gatsby](https://www.gatsbyjs.org)

#### [Next.js](https://nextjs.org)

#### [Material-UI](https://material-ui.com)

#### [Semantic-UI](https://material-ui.com)

#### [reselect](https://github.com/reduxjs/reselect)

#### [Redux-Saga](https://redux-saga.js.org)

#### [imutable-js](https://github.com/immutable-js/immutable-js)


## 6. Testing

### Types of tests
1. Unit tests
2. Integration tests
3. Automation tests

### Testing libraries
1. testing library (Jasmine, Jest, Mocha)
2. assertion library (Jasmine, Jest, Chai)
3. test runner (Jasmine, Jest, Mocha, Karma)
4. mocks, spies and stubs(Jasmine, Jest, Sinon.js)
5. code coverage(Istanbul, Jest)

### Unit tests
* should cover all small pure functions
* easy with fp
* react components are pure functions(dumb components)
* don't test the contract(connection between things: server-db, fn-fn)

### Integration tests
* cross communication between different unit of tests

### Automation tests
* end-to-end testing
* UI tests - running in a browser(need to
* simulate user behaviour)
* hardest to set up(TestCafe, cypress...)
* longer time(different browsers, devices...), cost more to run
* run them not so often(once a day/week, on release...)

### Final note on testing


### Testing React apps

#### [Enzyme](https://airbnb.io/enzyme/)
