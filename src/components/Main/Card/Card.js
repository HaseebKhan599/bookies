import Styles from "./Card.module.css";
import VerifiedLogo from "./VerifiedLogo/VerifiedLogo";
import Label from "./Label/Label";

const Card = ({ bookName, imageURL, rating, bookPrice, writerName }) => {
  return (
    <div id={Styles.cardDiv} className={`col-lg-3`}>
      <div
        id={Styles.cardImageDiv}
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <Label labelText="Flash Sale" />
      </div>
      <div id={Styles.cardInfoDiv}>
        <p id={Styles.bookName} className={Styles.boldText}>
          {bookName}
        </p>
        <div id={Styles.writerNameDiv}>
          <p id={Styles.name}>{writerName}</p>
          <VerifiedLogo />
        </div>
        <p id={Styles.bookPrice} className={Styles.boldText}>
          {bookPrice}
        </p>
      </div>
    </div>
  );
};

export default Card;
