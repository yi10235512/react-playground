import React, { useState } from 'react';
import "./Calculator.css";

const Calculator = () => {
    const [answer, setAnswer] = useState("")

    const clickPad = (value) => {
        if(value === "c") {
            setAnswer("");
        } else if (value === "<") {
            setAnswer(answer.slice(0, -1));
        } else if(value === "=") {
            calculate();
        } 
        else {
            setAnswer(answer + value);
        } 
    }

    const calculate = () => {
        try {
            // eslint-disable-next-line
            setAnswer((eval(answer) || "" ) + "");
        } catch (e) {
            setAnswer("ERROR");
        }
    };

    return(
        <table className="calculator">
            <input type="text" name="input" size="16" id="answer" value={answer}/>
            <br/>
            <input value="c" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="+/-" type="button" className="calculator-btn" disabled/>
            <input value="%" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="/" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <br/>
            <input value="7" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="8" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="9" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="x" type="button" className="calculator-btn" onClick={(e) => clickPad("*")}/>
            <br/>
            <input value="4" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="5" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="6" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="-" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <br/>
            <input value="1" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="2" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="3" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="+" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <br/>
            <input value="0" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="," type="button" className="calculator-btn" disabled/>
            <input value="&lt;" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
            <input value="=" type="button" className="calculator-btn" onClick={(e) => clickPad(e.target.value)}/>
        </table>
    )
}
export default Calculator;