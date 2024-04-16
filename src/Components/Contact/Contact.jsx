import React from "react";

function Contact() {
  return (
    <>
      <div
        id="main"
        className="h-screen flex items-center justify-center flex-col gap-3 w-screen"
      >
        <h1 className="text-8xl font-semibold">Contact Us</h1>
        <p className="text-center w-10/12">
          We love hearing from our customers. Feel free to share your experience
          or ask any questions you may have.
        </p>
        <div
          id="contact"
          className="flex items-center justify-between flex-col md:flex-row gap-3 w-9/12 p-5"
        >
          <div
            id="map"
            className="flex-1
           border-2 h-full flex items-center justify-center "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4512694867403!2d55.39990637538481!3d25.28903817765196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4864f8311f%3A0x98bafd52606ee794!2sFoodio%20Restaurant!5e0!3m2!1sen!2sin!4v1712931842599!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <form action="" className="flex-1 w-10/12 flex flex-col gap-3 ">
            <input
              type="text"
              required
              placeholder="First name"
              className="border-2 px-5 w-full rounded-lg py-2"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              className="border-2 px-5 w-full rounded-lg py-2"
            />
            <input
              type="email"
              required
              placeholder="Enter Email"
              className="border-2 px-5 w-full rounded-lg py-2"
            />
            <input
              type="text"
              required
              placeholder="Subject"
              className="border-2 px-5 w-full rounded-lg py-2"
            />
            <input
              type="text"
              required
              placeholder="Message"
              className="border-2 px-5 w-full rounded-lg py-2"
            />
            <input
              type="submit"
              value="Submit"
              className="border-2 px-5  bg-red-500 text-white font-medium rounded-lg py-3 cursor-pointer hover:bg-black hover:text-white duration-300"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
