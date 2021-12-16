import { React, useState } from 'react';
import './LineNumRemover.css';

const regexPattern = {
    lineGroup: /([0-9]+ )(.*)(\n){0,1}/ig ,
    lineCodeSyntax: /([0-9]+ )((.*)(\n){0,1})/
}

const LineNumRemover = () => {
    const [code, setCode] = useState("");
    const handleOnChange = (e) => {
        let result = []
        var lineGroup = e.target.value.match(regexPattern.lineGroup)
        let lineMatch = "";
        if(!lineGroup) {
            setCode("")
            return;
        }
        lineGroup.forEach((line) => {
            lineMatch = line.match(regexPattern.lineCodeSyntax)
            // lineMatch[1] match to line num
            result.push(lineMatch[2])
        })

        setCode(result.join(""))
    }

    return(
        <div className="line-remover">
            <textarea className="raw-code" placeholder=" paste your code here" onChange={handleOnChange}></textarea>
            <textarea className="result-code" readOnly disabled value={code}></textarea>
        </div>
    )
}

export default LineNumRemover;