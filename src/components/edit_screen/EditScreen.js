// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'

export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false
        }
    }

    componentDidMount = () => {
        console.log("\tEditScreen component did mount");
        document.addEventListener("keydown", this.checkKeyDown);
    }

    checkKeyDown = (event) => {
        
        if (event.key === 'z' && event.ctrlKey){
            console.log("Ctrl-Z Pressed");
            this.props.undoCallback();
        } else if (event.key === 'y' && event.ctrlKey) {
            console.log("Ctrl-Y Pressed");
            this.props.redoCallback();
        }
    }

    componentWillUnmount = () => {
        console.log("\tEditScreen component will unmount");
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <Navbar 
                    goToHomeCallback={this.props.goToHomeCallback} 
                    deleteLogo={this.props.deleteLogo}
                    logo={this.props.logo}
                />
                <div className="row">
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}                                          
                        canUndo={this.props.canUndo}  
                        redoCallback={this.props.redoCallback}                       
                    />
                    <TextEditWorkspace
                        logo={this.props.logo} />
                </div>
            </div>
        )
    }
}

export default EditScreen