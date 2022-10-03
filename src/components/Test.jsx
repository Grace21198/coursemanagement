import { useContext } from "react";
import { useState } from "react";
import { userContext } from "./userContext";




function Test(){
    const [name,updateName] = useState('in Fita')
    const [status,showStatus] = useState(true);
    const [listitems,setItems] = useState(1,2,10,20);
    const titlename = useContext(userContext)

    const [form,setForm] = useState({username:'',password:''});



    const updateUsername = (e) =>{
        setForm({...form,username:e.target.value});
        console.log(form);
    }


    const updatePassword = (e) =>{
        setForm({...form,password:e.target.value});
        console.log(form);
    }

    const onupdateName = () => {

        if(name == 'Text Changed'){
            updateName('in Fita');
        }
        else if('in Fita'){
            updateName('Text Changed');
        }
    }
  
    return<>
    
    <h1 onClick={onupdateName}> Welcome to React Js {name} {titlename}</h1>
    
    </>

}

export default Test;