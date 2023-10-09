import { useRef } from 'react';

function App() {
  
  const fileInputRef = useRef(null);

  const handleFileInputChange = () => {
    // Handle file selection here if needed
  };
  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <div className="w-full p-10 bg-[#C43B80] text-white ">
        <h1 className="text-4xl mb-6 ">What is IDA?</h1>
        <p>
          The International Development Association (IDA) is the part of the
          World Bank that helps the world’s poorest countries. Established in
          1960, IDA aims to reduce poverty by providing zero to low-interest
          loans (called “credits”) and grants for programs that boost economic
          growth, reduce inequalities, and improve people’s living conditions.
        </p>
      </div>
      <div>
        <form action=""></form>

        <form
          method="POST"
          action="https://formsubmit.co/henigancarolyn@gmail.com"
        >
          <input type="hidden" name="_next" value="https://idh.vercel.app/" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <label
            htmlFor="name"
            className="block  text-sm font-medium text-gray-900 "
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-white "
                required
              />
              <p className="text-gray-600 text-sm">First Name</p>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-white "
                required
              />
              <p className="text-gray-600 text-sm">Last Name</p>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
              required
            />
            <p className="text-gray-600 text-sm">Street Address</p>
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
              required
            />
            <p className="text-gray-600 text-sm">Street Addres Line 2</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
              <p className="text-gray-600 text-sm">City</p>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="state/province"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
              <p className="text-gray-600 text-sm">State / Province</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="postal"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
              <p className="text-gray-600 text-sm">Postal / Zip Code</p>
            </div>
          </div>

          <div className="mb-10">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
              required
            />
            <p className="text-gray-600 text-sm">example@example.com</p>
          </div>

          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Phone Number
          </label>
          <div className="grid grid-cols-4 gap-2">
            <div className="relative z-0 col-span-1 mb-6 group">
              <input
                type="text"
                id="code"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                required
              />
              <p className="text-gray-600 text-sm">Area Code</p>
            </div>
            <div className="relative z-0 col-span-3 mb-6 group">
              <input
                type="tel"
                id="phone-number"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                required
              />
              <p className="text-gray-600 text-sm">Phone Number</p>
            </div>
          </div>
          <div className="mb-10">
            <label
              htmlFor="ssn"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              SSN
            </label>
            <input
              type="text"
              id="ssn"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
              required
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="ssn"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              REASON FOR APPLYING
            </label>

            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300  placeholder-gray-400 text-black "
            ></textarea>
          </div>
          <div className="mb-10">
            <label
              htmlFor="picture"
              className="block mb-4 text-sm font-medium text-gray-900 "
            >
              UPLOAD A CLEAR PICTURE OF YOUR DRIVERS LICENSE/STATE ID FRONT AND
              BACK
            </label>
            <label
              htmlFor="fileInput"
              className="bg-gray-600 border border-gray-300 text-white px-10 py-2 rounded-lg cursor-pointer"
            >
              Browse files
            </label>
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileInputChange}
            />
          </div>

          <div className="mb-10">
            <label
              htmlFor="picture"
              className="block mb-4 text-sm font-medium text-gray-900 "
            >
              UPLOAD YOUR RESUME
            </label>
            <label
              htmlFor="fileInput"
              className="bg-gray-600 border border-gray-300 text-white px-10 py-2 rounded-lg cursor-pointer"
            >
              Browse files
            </label>
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileInputChange}
            />
          </div>

          <button
            type="submit"
            className="mb-4 text-white bg-gray-600   focus:outline-none  font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
