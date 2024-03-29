// QRCodeMaker.tsx
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import {Circles} from 'react-loader-spinner';

const QRCodeMaker: React.FC = () => {
  const [url, setUrl] = useState('');
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleGenerateQR = () => {
    setLoading(true);
    setTimeout(() => {
      setGenerated(true);
      setLoading(false);
    }, 2000); // Simulating a delay for generating QR code
  };

  const handleDownloadQR = () => {
    const canvas = document.getElementById('qr-code-canvas') as HTMLCanvasElement;
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <input 
        type="text" 
        value={url} 
        onChange={handleInputChange} 
        placeholder="Enter URL" 
        className="border border-gray-300 rounded px-4 py-2 mb-4"
      />
      <button 
        onClick={handleGenerateQR} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded"
      >
        Generate QR Code
      </button>
      {loading && (
        <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
      )}
      {generated && (
        <div className="mt-4 w-full">
          <div className='w-full flex justify-center mb-3'>
          <QRCode id="qr-code-canvas" value={url} />
          </div>
          <div className='w-full flex justify-center'>
          <button 
            onClick={handleDownloadQR} 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
                        Download QR Code
          </button>
          </div>
          

        </div>
      )}
    </div>
  );
};

export default QRCodeMaker;
