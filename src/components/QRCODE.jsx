import  { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        className="p-2 border rounded w-80 mb-4"
      />
      {text && (
        <QRCodeCanvas
          value={text}
          size={256}
          bgColor="grey"
          fgColor="#000000"
          level="H"/>
      )}
      
    </div>
  );
};

export default QRCodeGenerator;
