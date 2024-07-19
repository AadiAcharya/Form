import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setError(null); // Clear any previous error
      };
      reader.onerror = () => {
        setError('Error uploading image. Please try again.'); // Handle FileReader errors
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='text-3xl flex flex-col h-screen justify-center items-center p-10'>
      <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-white py-10 h-screen flex flex-col items-center'>
        <h2>Method of payment</h2>
        <div className="pay flex py-10">
          <span className='flex flex-col items-center p-7'>
            <h2>Esewa:</h2>
            <p>Scan the given qr code to proceed with the payment</p>
            <div className='flex gap-10 py-10 '>
            <img src="./src/assets/esewa.png" alt="" width={200} />
            {image && ( <img src={image} alt="Uploaded Payment Image" className="w-[200px] h-[200px] rounded-md mt-4" />)}
            {error && <p className="text-red-500">{error}</p>}
            </div>
            <label htmlFor="image-upload" className='text-white border rounded-[20px] p-8 w-[28 0px] cursor-pointer'>Update Image</label>
            <input
              type="file"
              accept='image/jpeg,image/png,image/jpg'
              id="image-upload"
              name='image-upload'
              className='hidden'
              onChange={handleImageChange}
            />
            <p className='font-aadi leading-loose text-2xl text-slate-300'>Place screenshot of your transaction in the above input</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
