import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import { GameView } from './Components/Game/Game';
import { TopScoresView } from './Components/TopScores/TopScoresView';

import { rootReducer } from './Reducers/RootReducer';

import { rootEpic } from './Epics/RootEpic';

import 'bootstrap/dist/css/bootstrap.min.css';


const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={GameView} />
                <Route exact path="/topscores" component={TopScoresView} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("container")
)