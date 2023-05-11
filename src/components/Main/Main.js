import Styles from "./Main.module.css";
import Card from "./Card/Card";
import image1 from "./Card/images/storytellingwb.jpg";
import image2 from "./Card/images/companyOfOne-paulJarvis.jpg";
import image3 from "./Card/images/milkAndHoney-rupiKaur.jpg";
import image4 from "./Card/images/pictureOfDorian-oscarWilde.jpg";
import image5 from "./Card/images/theVampyres-christopherFrayling.jpg";

const Main = () => {
  const cardsInfo = [
    {
      bookName: "Company of One",
      imageURL: image2,
      rating: 5,
      bookPrice: "1.700.000",
      writerName: "Paul Jarvis",
    },
    {
      bookName: "Milk and Honey",
      imageURL: image3,
      rating: 4.5,
      bookPrice: "685.000",
      writerName: "Rupi Kaur",
    },
    {
      bookName: "The Picture of Dorian",
      imageURL: image4,
      rating: 4.8,
      bookPrice: "250.000",
      writerName: "Oscar Wilde",
    },
    {
      bookName: "The Vampyres",
      imageURL: image5,
      rating: 4.2,
      bookPrice: "2.750.000",
      writerName: "Christopher Frayling",
    },
  ];

  return (
    <div id={Styles.mainDiv} className={`container`}>
      <div id={Styles.mainRow1} className={`row g-0 ${Styles.mainRows}`}>
        <div id={Styles.bigSaleCol} className={`col-lg-9`}>
          <div id={Styles.bigSaleDiv}>
            <div id={Styles.bigSaleText}>
              <p>A book is a gift you can open again and again</p>
              <p id={Styles.textCredit}>- Garrison Keillor</p>
            </div>
            <div id={Styles.saleBtnsDiv}>
              <button id={Styles.saleBtn1} className={Styles.saleBtns}>
                Claim Discout
              </button>
              <button id={Styles.saleBtn2} className={Styles.saleBtns}>
                Open Flash Sale
              </button>
            </div>
          </div>
        </div>
        <Card
          bookName="Storytelling Workbook"
          imageURL={image1}
          rating="4.9"
          bookPrice="810.000"
          writerName="James Squarespace"
        />
      </div>
      <div id={Styles.mainRow2} className={`row g-0 ${Styles.mainRows}`}>
        {cardsInfo.map((card) => {
          return (
            <Card
              bookName={card.bookName}
              imageURL={card.imageURL}
              rating={card.rating}
              bookPrice={card.bookPrice}
              writerName={card.writerName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
