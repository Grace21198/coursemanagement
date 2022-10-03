import React from "react";

class ButtonUI extends React.Component{

constructor(props){
    super();
    console.log(props.btnname)
}
 
render(){

    return <> <button> {this.props.btnname} </button> </>
}

}

export default ButtonUI;