import qrCodeImage from "/image-qr-code.png"

function App() {
  return (
    <div className="w-full">
      <div className="rounded-2xl shadow-xl bg-white w-[18.5rem] p-4 mx-auto my-24 flex flex-col font_outfit">
        <img
          src={qrCodeImage}
          draggable="false"
          className="w-full rounded-lg mx-auto object-contain select-none"
          alt="QR Code Image"
        />
        <h3 className="font-bold mt-6 w-full leading-snug">
          Improve your front-end skills by building projects
        </h3>
        <p className="w-full mt-3.5 mb-4 leading-snug">
          Scan the QR Code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}

export default App
