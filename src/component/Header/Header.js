import './Header.css';
import logo from '../../assets/images/logo.png';

export const Header = function () {
    return(
      <div className='header'>
          <img src={logo} alt="logo"/>
          <h1>New shop</h1>
      </div>
    );
}