import Styles from "./Choice.module.css";

const Choice = ({ choiceText }) => {
  return (
    <div id={Styles.choiceDiv}>
      <input type="checkbox" />
      <p id={Styles.choiceText}>{choiceText}</p>
    </div>
  );
};

export default Choice;
