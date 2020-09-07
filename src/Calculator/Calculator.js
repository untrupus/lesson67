import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Calculator.css';

const Calculator = () => {
    const [disabled, setDisabled] = useState(false);

    const buttons = ['7', '8', '9', '+', '-', '4', '5', '6', '/', '*', '1', '2', '3', '0', '.'];

    const calcButtons = buttons.map(btn => {
        return (
            <button
                type="button"
                className="btn"
                key={btn}
                onClick={() => addSymbol(btn)}
                disabled={disabled}
            >{btn}</button>
        )
    });
    const calculator = useSelector(state => state.calculator);
    const dispatch = useDispatch();
    useEffect(() => {
        if (calculator.length >= 20) {
            setDisabled(true);
        }
    },[calculator.length]);


    const addSymbol = (symbol) => dispatch({type: "ADD_SYMBOL", value: symbol});
    const clear = () => {
        dispatch({type: "CLEAR"});
        setDisabled(false);
    };
    const equal = () => dispatch({type: "EQUAL"});

    return (
        <div className="Calculator">
            <div className="display">{calculator}</div>
            <div className="buttons">
                {calcButtons}
                <button
                    className="clear"
                    type="button"
                    onClick={equal}
                >=</button>
                <button
                    type="button"
                    className="clear"
                    onClick={clear}
                >clear</button>

            </div>
        </div>
    );
};

export default Calculator;