import Styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div id={Styles.navbarDiv}>
      <div id={Styles.sentToDiv}>
        <div id={Styles.sentToInnerDiv}>
          <div className={Styles.sentToInnerMostDiv}>
            <p id={Styles.sentTo}>Sent to</p>
            <svg
              id={Styles.downArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          <div className={Styles.sentToInnerMostDiv}>
            <svg
              id={Styles.locIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <p id={Styles.sentToLoc}>Yogyakarta 55283</p>
          </div>
        </div>
      </div>
      <div id={Styles.searchDiv}>
        <div id={Styles.searchIconDiv}>
          <svg
            id={Styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <input
          id={Styles.inputSearch}
          type="text"
          placeholder="Find the best selling book of 2023..."
        />
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
