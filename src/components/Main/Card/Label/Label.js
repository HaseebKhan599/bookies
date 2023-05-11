import Styles from "./Label.module.css";

const Label = (props) => {
  return (
    <div id={Styles.labelDiv}>
      <p id={Styles.labelText}>{props.labelText}</p>
    </div>
  );
};

export default Label;
