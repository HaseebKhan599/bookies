import Styles from "./Navbar.module.css";
import Location from "./Location/Location";
import SearchBar from "./SearchBar/SearchBar";
import NavIcons from "./NavIcons/NavIcons";

function Navbar() {
  return (
    <div id={Styles.navbarDiv}>
      <Location />
      <SearchBar />
      <NavIcons />
    </div>
  );
}

export default Navbar;
