import img from "../../../assets/About Us/officeGrp.jpg";

function ContactUs() {
  return (
    <section>
      <div
        className="card bg-[var(--primary)] text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
      >
        <div className="bg-black/25 w-full h-full absolute"></div>
        <div className="z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Do You Need Any Consulting Service?
          </h2>
          <button className="cursor-pointer text-white bg-[var(--primary-light)] hover:bg-[var(--primary)] px-6 py-3 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
