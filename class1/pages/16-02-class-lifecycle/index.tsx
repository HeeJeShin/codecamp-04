import router from "next/router";
import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";
import Router from 'next/router'

interface IState{
    count: number;
}

export default class MyLifecyclePage extends Component{   // 컴포먼트 안에 셋스테이트 까지있음. 

    state = {
        count: 0
    }

    componentDidMount(){
        console.log('마운트됨')
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
                <div>현재카운트: {this.state.count}</div>
                <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
                <button onClick={this.onClickMove}>페이지이동하기</button>
                <MyComponent count={this.state.count} />
            </>
        );

    }
}