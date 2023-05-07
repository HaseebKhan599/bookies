import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div id={Styles.sidebarDiv}>
        <div id={Styles.categoryDiv} className={Styles.sidebarSections}>
          <div id={Styles.addressDiv}>
            <p id={Styles.addressBookiesText} className={Styles.addressText}>
              Bookies
            </p>
            <svg
              id={Styles.rightArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <p id={Styles.addressFlashText} className={Styles.addressText}>
              Flash Sale Book
            </p>
          </div>
        </div>
        <div id={Styles.locationDiv} className={Styles.sidebarSections}></div>
        <div id={Styles.priceDiv} className={Styles.sidebarSections}></div>
      </div>
    </>
  );
};

export default Sidebar;
