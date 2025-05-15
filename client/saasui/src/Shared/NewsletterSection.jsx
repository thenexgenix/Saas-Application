import React from "react";

function NewsletterSection() {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="card bg-[var(--primary)] text-white rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl">
            {/* Text Content */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold">
                Subscribe To Our{" "}
                <span className="inline-block">
                  {" "}
                  Newsletter
                  <div className="-mt-3 h-3 w-full bg-[var(--accent-yellow)]"></div>
                </span>
              </h2>
              <p className="my-8 text-xl">
                We try to make easy and simple for every professionals. Get 30
                days free trial - No credit card required.
              </p>
            </div>

            {/* Input and Button */}
            <div className="flex flex-col md:flex-row gap-4 w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered border border-violet-800 w-full md:w-64 bg-transparent text-white placeholder-white p-4 rounded-lg"
              />
              <button className="btn btn-md rounded-lg bg-white text-[var(--primary)] hover:scale-[1.05] w-full md:w-auto">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Icon */}
          <div className="mt-4 md:mt-0">
            <div className="flex justify-center items-center">
              <div className="w-sm h-[24rem] rounded-full bg-[var(--primary-light)]/9 flex justify-center items-center">
                <div className="w-[250px] h-[250px] rounded-full bg-[var(--primary-light)] flex justify-center items-center z-10">
                  <span className="inline-block  rounded-full p-3">
                    <svg
                      className="w-24 h-24 text-[var(--accent-yellow)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
