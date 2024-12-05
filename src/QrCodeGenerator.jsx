import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export const QrCodeGenerator = () => {
  const [enteredText, setEnteredText] = useState("");

  const onClickHandler = () => {};
  const onChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  console.log(enteredText)

  return (
    <div>
      <QRCodeSVG value="FUCK YOU!" />,
      <input type="text" value={enteredText} onChange={onChangeHandler}></input>
      <button type="button" onClick={onClickHandler}>
        Generate
      </button>
    </div>
  );
};
