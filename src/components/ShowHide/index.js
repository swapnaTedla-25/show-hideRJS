import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowHideFname: false, isShowHideLname: false}

  isFNameButtonClicked = () => {
    this.setState(prevState => ({isShowHideFname: !prevState.isShowHideFname}))
  }

  isLNameButtonClicked = () => {
    this.setState(prevState => ({isShowHideLname: !prevState.isShowHideLname}))
  }

  render() {
    const {isShowHideFname, isShowHideLname} = this.state

    const displayFname = isShowHideFname
      ? 'hidefNamecontainer'
      : 'showfNamecontainer'

    const displayLname = isShowHideLname
      ? 'hideLNamecontainer'
      : 'showLNamecontainer'
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="container">
            <button
              type="button"
              className="button"
              onClick={this.isFNameButtonClicked}
            >
              Show/Hide FirstName
            </button>
            <div className={`${displayFname} container`}>
              <h1 className="name">Joe</h1>
            </div>
          </div>
          <div className="container">
            <button
              type="button"
              className="button"
              onClick={this.isLNameButtonClicked}
            >
              Show/Hide LastName
            </button>
            <div className={`${displayLname} container`}>
              <h1 className="name">Jonas</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
