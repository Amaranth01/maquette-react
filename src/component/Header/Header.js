import './Header.css';
import logo from '../../assets/images/logo.png';

export const Header = function () {
    return(
      <div className='header'>
          <img src={logo} alt="logo"/>
      </div>
    );
}