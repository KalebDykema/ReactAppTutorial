import React from 'react';

// Stateless/Funcional Compoment
// Can use props as an argument to pass various parameters through
// function HelloWorld(props){
//     return(
//         <h1>Hello {props.name}</h1>
//     );
// };

// Class Based Syntax for Stateless/Funcional Compoments
class HelloWorld extends React.Component{
    render(){
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
};


export default HelloWorld;