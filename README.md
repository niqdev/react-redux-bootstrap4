# react-redux-bootstrap4

Just another boilerplate:

* [webpack](https://webpack.github.io)
* [react](https://facebook.github.io/react)
* [redux](http://redux.js.org)
* [redux-devtools](https://github.com/gaearon/redux-devtools)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [react-router](https://github.com/reactjs/react-router)
* [react-intl](https://github.com/yahoo/react-intl)
* [redux-form](http://redux-form.com) TODO
* [Bootstrap 4](http://v4-alpha.getbootstrap.com)
* [gh-pages](https://pages.github.com)

Directory structure:
```
public/ <-- your static generated app is here
src/
├── core/
│   ├── DevTools.js *
│   ├── reducers.js <-- combine your reducers
│   ├── root/ *
│   ├── routes.js <-- change your routes
│   ├── storage.js *
│   └── store/ *
├── index.js
├── locales/ <-- all your translations
│   ├── index.js
│   ├── locale-en.json
│   └── locale-it.json
└── modules/ <-- all your isolated component should go here
    ├── index.js
    ├── app/ <-- main component
    │   ├── AppComponent.js
    │   └── app.scss
    ├── counter/ <-- example of component with redux
    │   ├── CounterActionTypes.js
    │   ├── CounterActions.js
    │   ├── CounterComponent.js
    │   ├── CounterContainer.js
    │   ├── CounterReducer.js
    │   └── counter.scss
    └
    ...

* Generally you shouldn't modify this unless needed
```

### Run
```bash
# first time
npm install

# run development
npm start

# build static site
npm run build

# publish gh-pages
npm run publish
```
