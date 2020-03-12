import React, { Component } from 'react'
import {Modal, Button} from 'react-materialize'
import TextInput from 'react-materialize/lib/TextInput';

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : "#FF0000",
            fontSize : 24,
            inputFieldText : "",
            text: this.props.logo.text,
            backgroundColor: ""
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize, this.state.backgroundColor);
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleInputFieldText = () => {
        var input = this.state.inputFieldText;
        console.log("handleInputFieldText to " + this.state.inputFieldText);
        if (input.trim() == "") {
            alert("Invalid!");
        } else {
            this.setState({ text: input}, this.completeUserEditing)
        }
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <Modal actions={[
                            <Button flat modal="close" node="button" waves="green" onClick={this.handleInputFieldText}>Save</Button>
                        ]}
                        bottomSheet={false}
                        fixedFooter={false}
                        header="Modal Header"
                        id="modal-0"
                        options={{
                            dismissible: true,
                            endingTop: '10%',
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            opacity: 0.5,
                            outDuration: 250,
                            preventScrolling: true,
                            startingTop: '4%'
                        }}
                        trigger={<Button node="button">&#9998;</Button>}
                    >
                        <TextInput onChange={(event)=>this.setState({ inputFieldText: event.target.value })}/>
                        </Modal>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={undoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar