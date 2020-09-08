import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Calculator.css';

const Calculator = () => {
    const buttons = ['7', '8', '9', '+', '-', '4', '5', '6', '/', '*', '1', '2', '3', '0', '.'];

    const calculator = useSelector(state => state.calculator);
    const dispatch = useDispatch();

    const addSymbol = (symbol) => dispatch({type: "ADD_SYMBOL", value: symbol});
    const clear = () => dispatch({type: "CLEAR"});
    const equal = () => {
        if (calculator.length !== 0) {
            dispatch({type: "EQUAL"});
        }
    };
    const clearOnce = () => {
            dispatch({type: "CLEAR_ONCE"});
    };

    const radical = () => {
        dispatch({type: "RADICAL"});
    };

    const calcButtons = buttons.map(btn => {
        return (
            <button
                type="button"
                className="btn"
                key={btn}
                onClick={() => addSymbol(btn)}
            >{btn}</button>
        )
    });

    const percent = () => {
        dispatch({type: "PERCENT"});
    };

    return (
        <div className="Calculator">
            <div className="display">{calculator}</div>
            <div className="buttons">
                {calcButtons}
                <button
                    type="button"
                    className="clear"
                    onClick={clear}
                >c
                </button>
                <button
                    className="clear"
                    type="button"
                    onClick={equal}
                >=
                </button>
                <button
                    type="button"
                    className="clear"
                    onClick={clearOnce}
                >&lt;
                </button>
                <button
                    type="button"
                    className="clear"
                    onClick={radical}
                >&#8730;
                </button>
                <button
                    type="button"
                    className="clear"
                    onClick={percent}
                >%
                </button>
            </div>
        </div>
    );
};

export default Calculator;