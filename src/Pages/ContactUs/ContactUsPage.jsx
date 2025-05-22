import { IoCall } from "react-icons/io5";
import SectionBanner from "../../Components/SectionBanner";
import SectionBorder from "../../Components/SectionBorder";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function ContactUsPage() {
  return (
    <section>
      <SectionBanner heading={"Contact Us"} />

      {/* contact us form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-[var(--accent-yellow)] text-lg font-semibold mb-2">
            Contact Form
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Send Us A Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-[var(--primary-light)]/20 text-[var(--primary)] placeholder-gray-600"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-[var(--primary-light)]/20 text-[var(--primary)] placeholder-gray-600"
            />
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="w-full p-3 rounded-lg bg-[var(--primary-light)]/20 text-[var(--primary)] placeholder-gray-600"
            />
            <button
              type="submit"
              className="w-full bg-[var(--primary-light)] text-white font-bold p-3 rounded-lg hover:bg-[var(--primary)]"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-[var(--accent-yellow)] text-lg font-semibold mb-2">
            Contact Info
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Contact With Us
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[var(--primary)] w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                <IoCall className="text-2xl font-bold" />
              </span>
              <div>
                <p className="text-gray-800">+1235-375-0745</p>
                <p className="text-gray-800">+1238-765-0795</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--primary)] w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                <MdEmail className="text-2xl font-bold"/>
              </span>
              <div>
                <p className="text-gray-800">support@sasencygmail.com</p>
                <p className="text-gray-800">helpline@sasencygmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--primary)] w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                <FaLocationDot className="text-2xl font-bold"/>
              </span>
              <p className="text-gray-800">
                Sidney Street, 102, Adelaide, Australia
              </p>
            </div>
          </div>
        </div>
      </div>

      
      {/* google map */}
      <div className="mt-12">
       <iframe 
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117987.8685531865!2d91.88865702096098!3d22.462090898997413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2f1dac23e023%3A0xa8390badc675b5e7!2sIT%20Business%20Incubator%2C%20CUET!5e0!3m2!1sen!2sbd!4v1747323761792!5m2!1sen!2sbd" 
       width="100%"  
       style={{border:0}}
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade"
       className="rounded-lg h-[200px] md:h-[300px] lg:h-[450px]"
       />
      </div>
      <SectionBorder />
    </section>
  );
}

export default ContactUsPage;
