import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.nav}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Order</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
