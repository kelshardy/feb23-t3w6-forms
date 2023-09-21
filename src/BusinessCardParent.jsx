import { Component } from "react";

import BusinessCardDisplay from "./BusinessCardDisplay";

export default class BusinessCardParent extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <BusinessCardParent></BusinessCardParent>
            </div>
        )
    }
}

// import React from "react";
// class BlahBlah extends React.Component {
//     constructor(){

//     }
// }