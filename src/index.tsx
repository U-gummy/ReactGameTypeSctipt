import * as React from "react"
import * as ReactDOM from "react-dom"
import Fnc from "./components/GuGuDan/GuGuDanFnc"
import GuGuDan from "./components/GuGuDan/GuGuDan"

ReactDOM.render(
    <React.Fragment>
        <GuGuDan />
        <Fnc/>
    </React.Fragment>
, document.getElementById("app"))