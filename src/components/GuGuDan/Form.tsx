import React, { PureComponent } from 'react'

interface FormProps {
    firstNum : number,
    secondNum : number,
    onChange : any;
}
interface FormState {
    value : string,
}

class Form extends PureComponent <FormProps, FormState> {
    constructor(props:FormProps) {
        super(props);
        this.state = {
            value : '',
        }
    }
    onSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        if(parseInt(this.state.value) === this.props.firstNum * this.props.secondNum) {
            this.setState({ 
                value : '',
            })
            this.props.onChange(this.state.value, true)
        } else {
            this.setState({
                value : '',
            });
            this.props.onChange('', false)
        }
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) : void =>  {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="number" 
                    value={this.state.value} 
                    onChange={this.onChange}
                />
                <button>입력</button>
            </form>
        )
    }
}

export default Form
