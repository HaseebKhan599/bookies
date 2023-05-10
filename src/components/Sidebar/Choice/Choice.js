import Styles from "./Choice.module.css";

const Choice = (props) => {
  return (
    <div id={Styles.choiceDiv}>
      <input type="checkbox" />
      <p id={Styles.choiceText}>{props.choiceText}</p>
    </div>
  );
};

export default Choice;
