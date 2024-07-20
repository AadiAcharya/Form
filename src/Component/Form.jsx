import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const sendEmail = (e) => {
    e.preventDefault();

    // Clear previous messages
    setFormError('');
    setFormSuccess('');

    // Validate form fields
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);

    // Email validation for Gmail
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
    if (!data.from_name || !data.from_email || !data.from_phone || !data.from_college || !data.message) {
      setFormError('All fields are required.');
      return;
    }

    if (!gmailRegex.test(data.from_email)) {
      setFormError('Please enter a valid Gmail address.');
      return;
    }

    if (!/^\d+$/.test(data.from_phone)) {
      setFormError('Please enter a valid phone number (numbers only).');
      return;
    }

    emailjs.sendForm('service_ltzv5hg', 'template_di6c658', form.current, '3ERo9wAPnsHLrBSEo')
      .then((result) => {
        setFormSuccess('Email sent successfully!');
        form.current.reset();
        // Navigate to the image upload page after success
        setTimeout(() => navigate('/imageupload'), 1000); // Delay to show success message
      }, (error) => {
        setFormError('Failed to send email.');
        console.error('Failed to send email:', error.text);
      });
  };

  return (
    <div className='bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 flex flex-col justify-center items-center gap-6 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 w-full max-w-screen mx-auto'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold mt-4'>
        Contact Detail
        <hr className='mt-2 border-t-2 border-white'/>
      </h1>
      <p className='text-lg sm:text-xl md:text-2xl mb-6'>Please fill your information so we can get in touch with you.</p>

      <form ref={form} onSubmit={sendEmail} className='w-full max-w-md'>
        <div className='w-full mb-4'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>Name</h2>
          <input
            type="text"
            name="from_name"
            placeholder='Your Full Name'
            className='w-full h-12 shadow-lg shadow-black opacity-70 p-2 rounded-md text-base sm:text-lg' autoComplete='on' required
          />
        </div>

        <div className='w-full mb-4'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>Email</h2>
          <input
            type="email"
            name="from_email"
            placeholder='Your Gmail Address'
            className='w-full h-12 shadow-lg shadow-black opacity-70 p-2 rounded-md text-base sm:text-lg'
            pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
            title="Please enter a valid Gmail address"
            required autoComplete='on'
          />
        </div>

        <div className='w-full mb-4'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>Phone Number</h2>
          <input
            type="tel"
            name="from_phone"
            placeholder='Your contact info'
            className='w-full h-12 shadow-lg shadow-black opacity-70 p-2 rounded-md text-base sm:text-lg'
            pattern="\d*"
            title="Please enter a valid phone number (numbers only)"
            required autoComplete='on'
          />
        </div>

        <div className='w-full mb-4'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>College</h2>
          <input
            type="text"
            name="from_college"
            placeholder='Your College Name'
            className='w-full h-12 shadow-lg shadow-black opacity-70 p-2 rounded-md text-base sm:text-lg' autoComplete='on'
          />
        </div>

        <div className='w-full mb-4'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>Message</h2>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="w-full border border-gray-300 rounded-md shadow-lg shadow-black opacity-70 p-3 text-base sm:text-lg focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
            required autoComplete='on'
          ></textarea>
        </div>

        {formError && (
          <p className="text-red-500 text-sm mb-4">{formError}</p>
        )}
        {formSuccess && (
          <p className="text-green-500 text-sm mb-4">{formSuccess}</p>
        )}

        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className='bg-blue-600 text-white text-lg sm:text-xl border-none rounded-2xl px-12 py-3 hover:text-yellow-300 hover:bg-blue-500 shadow-lg shadow-black transition-all duration-300'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
