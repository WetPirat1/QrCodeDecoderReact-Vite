import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import s from "./QrCodeScanner.module.css";

export default function QrCodeScanner() {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
  };

  const setting = {
    audio: false,
    finder: false,
    finder: false,
  };
  return (
    <div className={s.container}>
      <Scanner
        allowMultiple
        onScan={scanHandler}
        components={setting}
        styles={{ container: { width: 250 } }}
      />
      
      <p className={s.result}>{scanned}</p>
    </div>
  );
}
