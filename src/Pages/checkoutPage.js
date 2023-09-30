import React, { useState, useEffect } from 'react';
import CountrySelect from '../components/partials/data/country';// Import the CountrySelect component

export default function CheckoutForm({ productPrice}) {
  const [name, setName] = useState('');
  const [cardExpiry, setCardExpiry] = useState(''); // Add city as a text input
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cvc, setCvc] = useState('');
  const [email, setEmail] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)
  const [emailError, setEmailError] = useState('');

    
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleSubmit = (e) => {
    const isValid = validateInputs()
    if (!isValid) {
        e.preventDefault(); // Prevent form submission if isValid is false
        alert('Please fix the validation errors.');
      } else {
        // Additional logic for submitting data to the server can go here
        alert('Your order is on the way...');
      }
    }
  const handleCartReset = () => {
    const isValid = validateInputs()
   isValid && localStorage.clear()
  }

  const shippingCost = 8

  useEffect(() => {
    const parsedProductPrice = parseFloat(productPrice);
    const parsedShippingCost = parseFloat(shippingCost);
    const calculatedTotalPrice = parsedProductPrice + parsedShippingCost;
    setTotalPrice(calculatedTotalPrice.toFixed(2)); // Format to 2 decimal places
  }, [productPrice, shippingCost]);


  const validateEmail = (value) => {
    // Use regex to validate email format (only @gmail.com addresses)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(value);
  };



  const validateInputs = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid @gmail.com email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    

    return valid;
  };

  function limitInputLength(input, maxLength) {
    const inputValue = input.value.toString(); // Convert input value to a string
    if (inputValue.length > maxLength) {
      input.value = inputValue.slice(0, maxLength); // Truncate the input to the maximum length
    }
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 return (
    <form onSubmit={handleSubmit}>
    <section className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      
      <section className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <article className="relative">
          <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <button
                className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
              <span className="font-semibold text-gray-900">Shop</span>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <button
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                href="#"
              >
                2
              </button>
              <span className="font-semibold text-gray-900">Shipping</span>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <button
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                href="#"
              >
                3
              </button>
              <span className="font-semibold text-gray-500">Product is on its way</span>
            </li>
          </ul>
        </article>
      </section>
    </section>
    <section className="grid sm:px-10 lg:grid-cols-5 lg:px-20 xl:px-32">
      
       <p className='col-span-1'></p>
     
      <article className="mt-10 bg-gray-50 col-span-3 px-4 pt-8 lg:mt-0">
        <p className="text-xl font-medium">Payment Details</p>
        <p className="text-gray-400">
          Complete your order by providing your payment details.
        </p>
        <h1 className="">
          <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
            Email
          </label>
          <p className="relative">
            <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              name="email"
              className={`${emailError ? 'border-red-500' : ''} w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
              placeholder="your.email@gmail.com"
            />
            <p className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </p>
          </p>
          <label
            htmlFor="card-holder"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Card Holder
          </label>
          <p className="relative">
            <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
              type="text"
              id="card-holder"
              name="card-holder"
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your full name here"
            />
            <p className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </p>
          </p>
          <label
            htmlFor="card-no"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Card Details
          </label>
          <p className="flex">
            <p className="relative w-7/12 flex-shrink-0">
              <input
              required
              value={creditCard}
              onChange={(e) => setCreditCard(e.target.value)}
                type="number"
                id="card-no"
                name="card-no"
               onInput={(e) => limitInputLength(e.target, 16)}
                className={` w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <p className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </p>
            </p>
            <input
            required
            value={cardExpiry}
            onChange={(e) => setCardExpiry(e.target.value)}
              type="number"
              onInput={(e) => limitInputLength(e.target, 4)}
              name="credit-expiry"
              className={` w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
              placeholder="MM/YY"
            />
            <input
            required
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
              type="number"
              name="credit-cvc"
              onInput={(e) => limitInputLength(e.target, 4)}
              className={` w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
              placeholder="CVC"
            />
          </p>
          <label
            htmlFor="billing-address"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Billing Address
          </label>
          <p className="flex flex-col sm:flex-row">
            <p className="relative flex-shrink-0 sm:w-7/12">
              <input
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="billing-address"
                name="billing-address"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Street Address"
              />
              <p className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <img
                  className="h-4 w-4 object-contain"
                  src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                  alt=""
                />
              </p>
            </p>
            <CountrySelect selectedCountry={selectedCountry} onCountryChange={handleCountryChange} style2={`hidden`} style={`w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`} />
           
            <input
            required
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
              type="number"
              name="billing-zip"
              onInput={(e) => limitInputLength(e.target, 5)}
              className={` flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
              placeholder="ZIP"
            />
          </p>
          {/* Total */}
          <section className="mt-6 border-t border-b py-2">
            <article className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">${productPrice}</p>
            </article>
            <article className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping</p>
              <p className="font-semibold text-gray-900">${shippingCost}</p>
            </article>
          </section>
          <article className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">${totalPrice}</p>
          </article>
        </h1>

        <button onClick={handleCartReset} className="relative w-full inline-block mb-12 text-lg group">
<span className="relative w-full z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute w-full left-0 h-48  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Place Oder</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1  transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
      </article>
    </section>
  </form>
  
  );
}
