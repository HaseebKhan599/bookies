import Styles from "./Location.module.css";

const Location = function () {
  return (
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
  );
};

export default Location;
