import React, { useState } from 'react'
import FormFunc from './FormFunc'

// interface gugudanProps {}

const GuGuDanFnc : React.FC = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [result, setResult] = useState('');
    
    const onChange = (answer:any, flag:boolean) => {
        if(flag){
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setResult(answer)
        }else {
            setResult(answer)
        }
    }

    return (
        <React.Fragment> 
            <div>{first} 곱하기 {second} 는 ?</div> 
            <FormFunc first={first} second={second} onChange={onChange}/>
            <div>{result}</div>
        </React.Fragment>
    )
}

export default GuGuDanFnc

