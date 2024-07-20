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
    <div className='flex flex-col h-screen justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white max-h-screen py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 lg:px-10 w-full max-w-4xl mx-auto rounded-md shadow-lg'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-4'>Method of Payment</h2>
        <div className="pay flex flex-col items-center py-4 sm:py-6 md:py-8">
          <div className='flex flex-col items-center w-full'>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-2'>Esewa:</h3>
            <p className='text-base sm:text-lg md:text-xl mb-4 text-center'>
              Scan the given QR code to proceed with the payment
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mb-4'>
              <img src="./src/assets/esewa.png" alt="Esewa QR Code" className='w-40 h-40 sm:w-48 sm:h-48 object-contain'/>
              {image && (
                <img
                  src={image}
                  alt="Uploaded Payment Image"
                  className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md mt-4 sm:mt-0"
                />
              )}
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <label htmlFor="image-upload" className='bg-blue-600 text-white text-lg sm:text-xl border rounded-lg p-4 sm:p-6 cursor-pointer'>
              Update Image
            </label>
            <input
              type="file"
              accept='image/jpeg,image/png,image/jpg'
              id="image-upload"
              name='image-upload'
              className='hidden'
              onChange={handleImageChange}
            />
            <p className='text-base sm:text-lg md:text-xl text-gray-300 mt-4 text-center'>
              Place a screenshot of your transaction in the above input
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
