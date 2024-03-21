import React, { useState } from 'react';
import QRCode from 'qrcode.react'; // Import QRCode component

function QRCodeGenerator() {
  const [text, setText] = useState('');

  const handleChange = (newValue) => {
    setText(newValue);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter text for QR code"
      />
      <br />
      {text && (
        <div>
          <QRCode value={text} />
          <p>Scan the QR code above</p>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
