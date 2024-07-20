import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(); 
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); 
      };
      reader.onerror = () => {
        console.error('Error uploading image. Please try again.');
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/'); 
  };

  return (
    <div className='flex flex-col h-screen justify-center items-center p-6 bg-gray-100'>
      <div className='bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white py-8 px-6 w-full max-w-4xl mx-auto rounded-md shadow-lg'>
        <h2 className='text-3xl font-semibold mb-6'>Method of Payment</h2>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl font-semibold mb-2'>Esewa:</h3>
          <p className='text-lg mb-6 text-center'>
            Scan the given QR code to proceed with the payment
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-8 mb-6'>
            <div className='w-64 h-64 sm:max-w-72 sm:h-72 border border-gray-300 bg-white flex items-center justify-center overflow-hidden shadow-md'>
              <img 
                src="https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-6/451959897_1715141255906819_4364894322530061040_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XfMhSYdvdFkQ7kNvgF92frq&_nc_ht=scontent.fbhr4-1.fna&oh=00_AYCZFf-15CYqmVCxTG88NsoF0hy41LUOlpl1xkBnHlFUHA&oe=66A1D2A2" 
                alt="Esewa QR Code" 
                className='w-full h-full object-cover'
              />
            </div>
            {image && (
              <div className='w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-gray-300 bg-white flex items-center justify-center overflow-hidden shadow-md mt-4 sm:mt-0'>
                <img
                  src={image}
                  alt="Uploaded Payment Image"
                  className='w-full h-full object-cover'
                />
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className='w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg'>
            <label htmlFor="image-upload" className='bg-blue-600 text-white text-lg border rounded-lg p-4 cursor-pointer'>
              Upload Image
            </label>
            <input
              type="file"
              accept='image/jpeg,image/png,image/jpg'
              id="image-upload"
              className='hidden'
              onChange={handleImageChange}
              ref={fileInputRef}
            />
            <div>
              <button 
                type='submit' 
                className='bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-200'
              >
                Done!
              </button>
            </div>
          </form>
          <p className='text-base text-gray-300 mt-6 text-center'>
            Place a screenshot of your transaction in the above input
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
