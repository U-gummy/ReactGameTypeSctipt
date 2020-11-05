import React, { PureComponent } from 'react'
import Form from './Form'
interface gugudanProps {}

interface gugudanState {
    first :number,
    second : number,
    result_flag : boolean,
    result: string,
}

class GuGuDan extends PureComponent <gugudanProps, gugudanState> {
    constructor(props:gugudanProps) {
        super(props);
        this.state = {
            first : Math.ceil(Math.random() * 9),
            second : Math.ceil(Math.random() * 9),
            result: '', 
            result_flag :false,
        }
    }

    public onChange = (res : any, flag : boolean) : void =>{
        if(flag){
            this.setState({
                first : Math.ceil(Math.random() * 9),
                second : Math.ceil(Math.random() * 9),
                result: '정답 : '+res,
            });
            const { first } = this.state;
            console.log(first);
        }else {
            this.setState({
                result: '땡땡땡',
            });
        }
    }

    render() {
        return (
            <React.Fragment> 
            <div>{this.state.first} 곱하기 {this.state.second} 는 ?</div>
            <Form firstNum={this.state.first} secondNum={this.state.second} onChange={this.onChange}/>
            <div>{this.state.result}</div>
        </React.Fragment>
        )
    }
}

export default GuGuDan
