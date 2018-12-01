import React from 'react';
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import { GameView } from './Components/Game';

import { rootReducer } from './Reducers/RootReducer';

import { rootEpic } from './Epics/RootEpic';


const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

render(
    <Provider store={store}>
        <GameView/>
    </Provider>,
    document.getElementById("container")
)