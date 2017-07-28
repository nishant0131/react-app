import React from 'react';

// const is a signal that the variable won’t be reassigned.
//  create a quick const variable 
// const Header = () => <h2>Header</h2>

//states c
class Header extends React.Component{
    constructor(){
        super();
        //setup the state of this component rather than React.Component which is parent
        this.state = {
            txt: 'this is a state txt',
            cat: 0
        }
    }
    //state meant to be change or update so below we created a custom event to change the text state
    update(e){
        this.setState({txt : e.target.value})
    }
    render(){
        return(
        <div>
            <input type="text" onChange={this.update.bind(this)}/>,
            <h2>{this.state.txt}-{this.state.cat}</h2>
        
        </div>
        )
    }

}

export default Header