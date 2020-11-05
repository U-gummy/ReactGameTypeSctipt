import React, { useState } from 'react'

interface FormProps {
    first : number,
    second : number,
    onChange : any
}

const FormFunc : React.FC<FormProps> = props => {
    const [value, setValue] = useState('');
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(parseInt(value) === props.first * props.second) {
            setValue('')
            props.onChange('정답'+value, true);
        } else {
            setValue('')
            props.onChange('땡땡땡',false);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="number" 
                value={value} 
                onChange={onChange}
            />
            <button>입력</button>
        </form>
    )
}

export default FormFunc

