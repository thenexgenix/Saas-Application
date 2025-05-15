
import Marquee from "react-fast-marquee";

function Sponser() {
  return (
    <section>
      {/* heading */}
      <div className="text-center max-w-[600px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold">
          Our{" "}
          <span className="inline-block">
            {" "}
            Sponsors
            <div className="-mt-3 h-3 w-full bg-[var(--accent-yellow)]"></div>
          </span>
        </h1>
        <p className="text-xl my-8">
          We are blessed to work with leading brands and companies.
        </p>
      </div>

      {/* marquee */}
      <div>
        <Marquee>
          this is exaple text
        </Marquee>
      </div>
    </section>
  );
}

export default Sponser;
