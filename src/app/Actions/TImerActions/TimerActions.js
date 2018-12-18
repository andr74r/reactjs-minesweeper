
import { INCREMENT_SECONDS_COUNT, RESTART_TIMER, STOP_TIMER } from './TimerActionTypes';
export const incrementSeconds = () => {
    return {
        type: INCREMENT_SECONDS_COUNT
    }
}

export const restartTimer = () => {
    return {
        type: RESTART_TIMER
    }
}

export const stopTimer = () => {
    return {
        type: STOP_TIMER
    }
}