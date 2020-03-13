import React from 'react'
import {Modal, Button, Range} from 'react-materialize'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  deleteLogo = () => {
    this.props.deleteLogo(this.props.logo.key);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

          <Modal actions=
            {[
              <Button flat modal="close" node="button" waves="green" onClick={this.deleteLogo}>Yes</Button>,
              <Button flat modal="close" node="button" waves="green">No</Button>
            ]}
              bottomSheet={false}
              fixedFooter={false}
              header="Delete Logo?"
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
              trigger={<li style={ {cursor: "pointer"} } node="button">&#128465;</li>}
          >
          </Modal>


            
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;