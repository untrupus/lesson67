import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './DoorLock.css';

const DoorLock = () => {
    const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

    const doorLock = useSelector(state => state.doorLock);
    const dispatch = useDispatch();
    const access = useSelector(state => state.access);

    const addSymbol = (number) => dispatch({type: "ADD_NUMBER", value: number});
    const clearOnce = () => dispatch({type: "CLEAR_NUMBER"});
    const enter = () => dispatch({type: "ENTER"});
    const clearDisplay = () => dispatch({type: "CLEAR_DISPLAY"});

    const className = ['lockDisplay'];
    if (access === "Access Granted") {
        className.push('green');
    }
    if (access === "Access Denied") {
        className.push('red');
    }


    const lockButtons = buttons.map(btn => {
        return (
            <button
                type="button"
                className="btnLock"
                key={btn}
                onClick={() => addSymbol(btn)}
            >{btn}</button>
        )
    });
    return (
        <div className="doorLock">
            <div
                className={className.join(' ')}
                onClick={clearDisplay}
            >
                {'*'.repeat(doorLock.length)}
                <br/>
                {access}
            </div>
            <div className="lockButtons">
                {lockButtons}
                <button
                    type="button"
                    className="btnLock"
                    onClick={clearOnce}
                >&lt;</button>
                <button
                    type="button"
                    className="btnLock"
                    onClick={enter}
                >E
                </button>
            </div>
        </div>
    );
};

export default DoorLock;