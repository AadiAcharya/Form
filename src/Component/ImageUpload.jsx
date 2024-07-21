import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const email = 'npidigitalmela@gmail.com';
  const subject = 'Esewa screenshot';
  const body = 'This is certain message';
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

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='flex flex-col h-screen justify-center items-center p-6 bg-gray-100'>
      <div className='h-screen bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white py-8 px-6 w-full max-w-4xl mx-auto rounded-md shadow-lg'>
        <h2 className='text-3xl font-semibold mb-6'>Method of Payment</h2>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl font-semibold mb-2'>Esewa:</h3>
          <p className='text-lg mb-6 text-center'>
            Scan the given QR code to proceed with the payment
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-6 mb-6 h-[100%]'>
            <img 
              src="https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-6/451987409_1715520712535540_1034657711014250464_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kfaSfZKBixgQ7kNvgHJu6Yd&_nc_ht=scontent.fbhr4-1.fna&oh=00_AYC40CA1QU5-isl-_7sGgAjvwb1pHHlevgGWoSP9jzOKAQ&oe=66A2A388" 
              alt="Esewa QR Code" 
              className='w-40 h-40 sm:w-48 sm:h-48 object-contain border border-gray-300 rounded-lg shadow-md'
            />
            {image && (
              <img
                src={image}
                alt="Uploaded Payment Image"
                className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg shadow-md mt-4 sm:mt-0"
              />
            )}
          </div>
          <form onSubmit={handleSubmit2}>
            <button 
              type='submit' 
              className='bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-200'
            >
              Attach screen shot here!
            </button>
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
