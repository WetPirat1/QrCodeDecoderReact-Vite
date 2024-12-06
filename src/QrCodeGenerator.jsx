import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./QrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [enteredText, setEnteredText] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = (event) => {
    setResult(enteredText);
    setEnteredText("");
  };

  const onChangeHandler = (event) => {
    setEnteredText(event.target.value);
    setResult("");
  };

  console.log("result: ", result);

  return (
    <div className={s.container}>
      <div className={s.qrWrapper}>
        {result !== "" && <QRCodeSVG value={enteredText} />}
      </div>

      <input
        placeholder="enter text"
        type="text"
        value={enteredText}
        onChange={onChangeHandler}
        className={s.input}
      ></input>
      <button className={s.button} type="button" onClick={onClickHandler}>
        Generate
      </button>
    </div>
  );
};
