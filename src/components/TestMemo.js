import { useCallback, useEffect, useMemo, useState } from "react";
import st from '../sample.module.css';

function TestMemo(){

const [count, setCount] = useState(0);
const [count2,setCount2] = useState(0);
const calculationTotal = useMemo(() => calculator(count),[count]);


const incrementCount = useCallback(()=>{
    
        setCount(count + 1);
});
const update = (e) =>{

    setCount(parseInt(e.target.value));
}

const update2 = (e)=>{
    setCount2(parseInt(e.target.value));
}

useEffect( ()=>{
    console.log(count);

},[count])

return <>
<>{calculationTotal} <input type='text' onChange={update}/>
<input className = {st.bigfont} type='text' onChange={incrementCount} /></>
</>

}

const calculator = (num)=>{
    for(let i = 0; i<100; i++){
        num+=1;
    }

    return num;
}

export default TestMemo;