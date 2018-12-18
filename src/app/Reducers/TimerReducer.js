import { INCREMENT_SECONDS_COUNT, RESTART_TIMER, STOP_TIMER } from '../Actions/TImerActions/TimerActionTypes';

export const timerReducer = function (state = { seconds: 0, isCounting: false }, action) {
    switch (action.type) {
        case INCREMENT_SECONDS_COUNT:
            return { seconds: state.isCounting ? state.seconds + 1 : state.seconds, isCounting: state.isCounting}
        case RESTART_TIMER:
            return { seconds: 0, isCounting: true }
        case STOP_TIMER:
            return { seconds: state.seconds, isCounting: false }
        default:
            return state;
    }
}