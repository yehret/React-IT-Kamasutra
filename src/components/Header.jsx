import h from './Header.module.css';

const Header = () => {
  return (
    <header className={h.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
