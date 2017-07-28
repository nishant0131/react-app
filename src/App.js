//library to create component 
import React from 'react';

// const is a signal that the variable won’t be reassigned.
//  create a quick const variable 
// const App = () => <h1>Hello</h1>
// or
class App extends React.Component {
    // render(){
    // return <div> <h1>Main Heading</h1> <h2>Subheading</h2></div>  
    // or
    // return (
    //     <div>
    //         <h1>Main Heading</h1>
    //         <h2>Subheading</h2>
    //     </div>
    // )

    //adding or passing properties from index.js APP components and use it here in render method
    render() {

        let txt = this.props.txt
        let cat = this.props.cat
        // let prop_frm_comp = "I am prop from inside component"
        let prop_frm_comp = this.props.jump
        
        return (
            // <div>
            //      <h2>{this.props.txt}</h2>
            //     <h3>{this.props.cat}</h3> 
            // </div>

            //OR 
            <div>
                <h2>{txt}</h2>
                <h3>{cat}</h3>
                <h3>{prop_frm_comp}</h3>
            </div>
        )

    }
}
// We can also apply props from inner component by using ComponentName.propTypes below
App.propTypes = {
    prop_frm_comp: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "This default props of this component"
}

export default App