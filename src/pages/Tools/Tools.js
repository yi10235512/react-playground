import React from 'react';
import Calculator from './Calculator/Calculator';
import LineNumRemover from './LineNumRemover/LineNumRemover';
import { HashLink as Link } from 'react-router-hash-link';
import './Tools.css';

const Tools = () => {
    return(
        <div className="tool-page">
            <div className="tool-card-container">
                <div className="tool-card">
                    <div className="tool-box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Calculator</h3>
                            <p>A simple calculator.</p>
                            <Link to='/tools#calculator_tool'>Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="tool-card">
                    <div className="tool-box">
                        <div className="content">
                            <h2>02</h2>
                            <h3>Line Number Remover</h3>
                            <p>A tool that help user remove the line number which copy from internet (eg. github, stackoverflow, etc.)</p>
                            <Link to='/tools#lineNumRemover_tool'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tool-section">
                <div className="calculator-tool" id="calculator_tool">
                    <Calculator />
                </div>
                <div className="line-num-remover-tool" id="lineNumRemover_tool">
                    <LineNumRemover />
                </div>
            </div>
        </div>
    )
}

export default Tools;