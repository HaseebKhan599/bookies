import Styles from "./Logo.module.css";

const Logo = function () {
  return (
    <div className={Styles.logoDiv}>
      <div className={Styles.logo}>
        <h3>B</h3>
      </div>
      <h3 id={Styles["logo-title"]}>Bookies</h3>
    </div>
  );
};

export default Logo;
