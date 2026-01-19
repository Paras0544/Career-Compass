import * as React from "react";

function ContactForm() {
  return (
    <section className="flex flex-col items-center self-stretch px-10 py-16 my-auto rounded-3xl bg-slate-100 min-w-[240px] w-[584px] max-md:px-5 max-md:max-w-full">
      <header className="flex flex-col items-center max-w-full text-black w-[323px]">
        <h2 className="text-3xl font-bold">Contact Info</h2>
        <p className="mt-5 text-base text-center">
          Nibh dis faucibus proin lacus tristique
        </p>
      </header>
      <form className="flex flex-col mt-10 w-full text-base max-w-[504px] max-md:max-w-full">
        <div className="flex flex-wrap items-start gap-6 leading-none max-md:max-w-full">
          <div className="flex flex-col w-60">
            <label htmlFor="firstName" className="font-semibold text-black">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Your name"
              className="flex-1 shrink gap-2 self-stretch px-4 py-2.5 mt-1.5 w-full text-gray-500 bg-white rounded-md"
            />
          </div>
          <div className="flex flex-col w-60">
            <label htmlFor="lastName" className="font-semibold text-black">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Your last name"
              className="flex-1 shrink gap-2 self-stretch px-4 py-2.5 mt-1.5 w-full text-gray-500 bg-white rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-6 leading-none max-md:max-w-full">
          <label htmlFor="email" className="font-semibold text-black">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your E-mail address"
            className="flex-1 shrink gap-2 self-stretch px-4 py-2.5 mt-1.5 w-full text-gray-500 bg-white rounded-md max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col w-full mt-6 max-md:max-w-full">
          <div className="flex flex-col w-full leading-none min-h-[178px] max-md:max-w-full">
            <label htmlFor="message" className="font-medium text-black">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message..."
              className="flex-1 shrink gap-2 px-4 py-2.5 mt-1.5 text-gray-500 bg-white rounded-md size-full max-md:max-w-full"
            />
          </div>
          <button
            type="submit"
            className="overflow-hidden gap-2.5 self-stretch px-5 py-4 mt-10 max-w-full font-semibold text-white capitalize bg-teal-600 rounded-lg min-h-[40px] w-[248px]"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;