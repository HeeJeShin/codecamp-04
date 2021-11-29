import { createContext } from "react"
import MyBoardWrite from "../../src/components/units/21-context-api/MyBoardWrite.container"

export const  myContext = createContext(null)
export default function ContextAPIPage(){

    const myValue ={
        isEdit: true
    }
    
    return(
        <myContext.Provider value={myValue}>
          <MyBoardWrite />   
        </myContext.Provider>     
    )
}

//contextapi주의점 .
// app에서 만든 스테이트 전부관통가능 