import React from 'react';
import Calculator from './Calculator/Calculator';
import LineNumRemover from './LineNumRemover/LineNumRemover';
import './Tools.css';

const Tools = () => {
    return(
        <div>
            <div className="calculator-tool">
                <Calculator />
            </div>
            <div className="line-num-remover-tool">
                <LineNumRemover />
            </div>
        </div>
    )
}

export default Tools;