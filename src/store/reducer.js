const initialState = {
    calculator: '',
    doorLock: '',
    access: '',
};

const password = '6699';

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_SYMBOL") {
        if (state.calculator.length <= 18) {
            return {...state, calculator: state.calculator + action.value};
        }
    }
    if (action.type === "CLEAR_ONCE") {
        return {...state, calculator: (state.calculator).substring(0, state.calculator.length - 1)};
    }
    if (action.type === "CLEAR") {
        return {...state, calculator: ''};
    }
    if (action.type === "EQUAL") {
        return {...state, calculator: String(eval(state.calculator))};
    }
    if (action.type === "RADICAL") {
        if (!isNaN(Number(state.calculator))) {
            return {...state, calculator: String(Math.sqrt(Number(state.calculator)))};
        }
    }
    if (action.type === "PERCENT") {
        if (!isNaN(Number(state.calculator))) {
            return {...state, calculator: String(Number(state.calculator) / 100)};
        }
    }

    if (action.type === "ADD_NUMBER") {
        if (state.doorLock.length < 4) {
            return {...state, doorLock: state.doorLock + action.value};
        }
    }
    if (action.type === "CLEAR_NUMBER") {
        return {...state, doorLock: (state.doorLock).substring(0, state.doorLock.length - 1)};
    }
    if (action.type === "ENTER") {
        if (state.doorLock === password) {
            return {...state, access: 'Access Granted'};
        } else {
            return {...state, access: 'Access Denied'};
        }
    }
    if (action.type === "CLEAR_DISPLAY") {
        return {...state, access: '', doorLock: ''};
    }

    return state;
};

export default reducer;