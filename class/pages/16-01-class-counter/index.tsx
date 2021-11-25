import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";


interface IState{
    count: number;
}

export default class MyCounterPage extends Component{   // 컴포먼트 안에 셋스테이트 까지있음. 

    state = {
        count: 0
    }

    onClickCounter = () => {  //펑션 빼야됨
        //console.log(this.state.count);
        this.setState((prev:IState )=> ({
            count: prev.count + 1,
        }))
    };

    render(){
        return(
            <>
                <div>현재카운트: {this.state.count}</div>
                <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
                <MyComponent count={this.state.count} />
            </>
        );

    }
}