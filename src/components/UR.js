import { useReducer } from "react"
import app from '../app.css'


const reducer = (state,action)=>{

    console.log(state,action);

    if(action == 'increment'){

        state = state+1;
    }

    if(action == 'decrement'){

        state = state-1;
    }
    return state;

}

const UR = () => {

const[data,dispatchData] = useReducer(reducer,12);


return <>

    <button onClick={() => { dispatchData('increment'); } } >Increment </button> 
    <button onClick={() => { dispatchData('decrement'); } } > Decrement</button> 

    <h1> {data}</h1>
    </>


}

export default UR;

