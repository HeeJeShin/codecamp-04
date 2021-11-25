import { useState } from "react";
import { Rate } from 'antd';



export default function LibrayStarPage(){
    const[value, setValue] = useState(3)

    function handleChange(value : number){
        setValue(value);
    }

    return(
        <span>
        <Rate onChange={handleChange} value={value} />
        
      </span>

    );
}
