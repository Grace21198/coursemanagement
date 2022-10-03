import React from "react";
import ButtonUI from "./Button";

class HomePage extends React.Component{
title = <h1> Welcome to FITA </h1>

constructor(props){
    super();
    console.log('constructor fn working')
}
 
render(){

    return <> {this.title} <ButtonUI btnname = "Save" /> </>
}

}

export default HomePage;