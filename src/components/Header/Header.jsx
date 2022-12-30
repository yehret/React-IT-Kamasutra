import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

const Header = (props) => {
  return (
    <header className={h.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="logo" />
      <div className={h.loginBlock}>
        { props.isAuth ? <span>{props.login}</span> : '' }
        <NavLink to={'/login'}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
