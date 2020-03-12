import React, { Component } from 'react'
import {Modal, Button, Range} from 'react-materialize'
import TextInput from 'react-materialize/lib/TextInput';

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            inputFieldText : "",
            text: this.props.logo.text,
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin,
            borderRadius: this.props.borderRadius,
            borderThickness: this.props.borderThickness        
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

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handlePaddingSizeChange = (event) => {
        console.log("handlePaddingSizeChange to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);       
    }
    
    handleMarginSizeChange = (event) => {
        console.log("handleMarginSizeChange to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);       
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChange to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);       
    }

    handleBorderThicknessChange = (event) => {
        console.log("handleBorderThicknessChange to " + event.target.value);
        this.setState({ borderThickness: event.target.value }, this.completeUserEditing);       
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(
            this.props.logo, this.props.logo.key, this.state.text, 
            this.state.textColor, this.state.fontSize, this.state.backgroundColor, 
            this.state.borderColor, this.state.padding, this.state.margin,
            this.state.borderRadius, this.state.borderThickness
            );
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
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <Range min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <Range min="4" max="144" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <Range min="4" max="144" 
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderThickness} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <Range min="4" max="144" 
                                    onChange={this.handlePaddingSizeChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <Range min="4" max="144" 
                                    onChange={this.handleMarginSizeChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar