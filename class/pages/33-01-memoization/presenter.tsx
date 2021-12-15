import { memo } from 'react'

const MemoizationPresenterPage = (props) =>{
    console.log("프리젠터가 렌더링 됩니다!!!")
    return(
        <>
            <div>====================</div>
            <div>이것은 프리젠터입니다.</div>
            <div>=====================</div>
        </>

    )
        
}
export default memo(MemoizationPresenterPage)