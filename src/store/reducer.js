const initialState = {
    calculator: '',
};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_SYMBOL") {
        return {...state, calculator: state.calculator + action.value};
    }
    if (action.type === "CLEAR") {
        return {...state, calculator: ''};
    }
    if (action.type === "EQUAL") {
            return {...state, calculator: eval(state.calculator)}
    }
    return state;
};

export default reducer;