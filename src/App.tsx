import QRCodeMaker from './components/QRCodeMaker';

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">QR Code Maker</h1>
      <QRCodeMaker />
    </div>
    </>
  )
}

export default App
