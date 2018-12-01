import React from 'react';
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { GameView } from './Components/Game';

import { rootReducer } from './Reducers/RootReducer';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <GameView/>
    </Provider>,
    document.getElementById("container")
)