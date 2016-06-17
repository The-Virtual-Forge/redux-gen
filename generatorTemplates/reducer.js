import {
    SOME_ACTION,
} from '../actions/<%= nameLower %>';

export default function <%= nameLower %>(state = 0, action) {
    switch (action.type) {
        case SOME_ACTION:
            return state + 1;
        default:
            return state;
    }
}
