import React from 'react';
import logo from './NetfixImg.png';
class Logo extends React.Component {
  render() {
    return (
      <div>
        <img className="LogoSize" src={logo} alt="Logo" />
      </div>
    )
  }
}
export default Logo;