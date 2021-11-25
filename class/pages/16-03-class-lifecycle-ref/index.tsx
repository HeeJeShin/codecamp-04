import router from "next/router";
import { Component, createRef } from "react";
import MyComponent from "../../src/components/units/classcomponent";
import Router from 'next/router'

interface IState{
    count: number;
}

export default class MyLifecyclePage extends Component{   // 컴포먼트 안에 셋스테이트 까지있음. 

    inputRef = createRef<HTMLInputElement>();

    state = {
        count: 0
    }

    componentDidMount(){
        console.log('마운트됨');
        this.inputRef.current?.focus();
        //인풋찾아서 포커스 깜빡거리기 
    }

    componentDidUpdate(){
        console.log('수정됨')
    }

    componentWillUnmount(){
        console.log('잘가요~~')
    }

    onClickCounter = () => {  //펑션 빼야됨
        //console.log(this.state.count);
        this.setState((prev:IState )=> ({
            count: prev.count + 1,
        }))
    };

    onClickMove = () => {
        Router.push("/");
    }

    render(){
        return(
            <>
             <input type="text" ref={this.inputRef}/>
                <div>현재카운트: {this.state.count}</div>
                <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
                <button onClick={this.onClickMove}>페이지이동하기</button>
                <MyComponent count={this.state.count} />
            </>
        );

    }
}