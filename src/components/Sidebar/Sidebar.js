import Choice from "./Choice/Choice";
import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  const locations = ["Yogyakarta", "Jakarta", "Semarang", "Palembang"];
  const categories = ["Adventure", "Fantasy", "Science fiction", "Romance"];

  return (
    <>
      <div id={Styles.sidebarDiv}>
        <div id={Styles.categoryDiv} className={Styles.sidebarSections}>
          <div id={Styles.addressDiv}>
            <p id={Styles.addressBookiesText} className={Styles.boldText}>
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
            <p id={Styles.addressFlashText} className={Styles.boldText}>
              Flash Sale Book
            </p>
          </div>
          <div id={Styles.filterDiv}>
            <svg
              id={Styles.slider}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-sliders2-vertical"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"
              />
            </svg>
            <p id={Styles.filterText} className={Styles.boldText}>
              Filter
            </p>
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
          <div id={Styles.categories}>
            <div id={Styles.categoryTextDiv}>
              <p id={Styles.categoryText} className={Styles.boldText}>
                Category
              </p>
            </div>
            <div id={Styles.choicesDiv}>
              {categories.map((category) => (
                <Choice choiceText={category} />
              ))}
            </div>
          </div>
        </div>
        <div id={Styles.locationDiv} className={Styles.sidebarSections}>
          <div id={Styles.locations}>
            <div id={Styles.locationTextDiv}>
              <p id={Styles.locationText} className={Styles.boldText}>
                Location
              </p>
            </div>
            <div id={Styles.choicesDiv}>
              {locations.map((location) => (
                <Choice choiceText={location} />
              ))}
            </div>
          </div>
        </div>
        <div id={Styles.priceDiv} className={Styles.sidebarSections}>
          <div id={Styles.filterDiv}>
            <svg
              id={Styles.pricetag}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-tag"
              viewBox="0 0 16 16"
            >
              <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
              <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
            </svg>
            <p id={Styles.filterText} className={Styles.boldText}>
              Price
            </p>
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
          <div id={Styles.priceRange1} className={Styles.priceRanges}>
            <p>Rp200 rb - Rp900 rb</p>
          </div>
          <div id={Styles.priceRange2} className={Styles.priceRanges}>
            <p>Rp900 rb - Rp3.5 jt</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
