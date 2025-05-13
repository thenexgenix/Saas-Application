import React, { useEffect, useRef } from "react";
import officeImg from "../../../assets/About Us/officeGrp.jpg";
import person from "../../../assets/About Us/singlePersson.jpg";
import video from "../../../assets/About Us/office-video.mp4";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function AboutUsDetails() {
    const videoRef = useRef(null)
    useEffect(()=>{
        videoRef.current.play();
    }, [])
  return (
    <section>
      {/* heading */}
      <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold">
        We Create Digital Products{" "}
      </h1>
      <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mt-4">
        {" "}
        That Enhance The{" "}
        <span className="bg-[var(--primary-light)]/9 text-[var(--primary)] py-0 rounded-2xl px-2">
          User Experience
        </span>
      </h1>

      {/* image */}
      <div className="w-full flex flex-col md:flex-row my-12 md:my-16 lg:my-24 gap-6 md:gap-0">
        {/* left side elements */}
        <div className="w-xs md:h-[600px] rounded-2xl md:rounded-l-2xl md:rounded-r-none overflow-hidden">
          <div className="text-center bg-[var(--accent-yellow)] text-white font-semibold w-full py-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">14+</h1>
            <p>
              Years <br />
              Experience
            </p>
          </div>
          <div className="w-full h-full object-cover object-center hidden md:flex">
            <img src={person} alt="a person working" />
          </div>
        </div>
        {/* right side elements */}
        <div
          className="w-full bg-cover bg-center h-[500px] md:h-[600px] rounded-2xl md:rounded-r-2xl md:rounded-l-none flex items-center md:items-end"
          style={{ backgroundImage: `url(${officeImg})` }}
        >
          {/* left card */}
          <div className="bg-[var(--primary)] text-white p-6 text-xl h-[300px] w-sm">
            <h3>What We Do?</h3>
            <h1 className="text-2xl md:text-3xl font-semibold my-4">
              We Provide Solutions For Your Company's Need.
            </h1>
            <div className="mt-8 flex justify-start items-center gap-2 hover:gap-4 cursor-pointer hover:font-semibold transition">
              Learn More <FaArrowRightLong className="text-xl" />
            </div>
          </div>
          {/* video card */}
          <div
            className="bg-[var(--primary-light)] hover:bg-[var(--primary)] cursor-pointer text-white w-[120px] h-[120px] flex items-center justify-center"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <FaPlay className="text-5xl" />
          </div>

          {/* video modal */}
          <dialog id="my_modal_1" className="modal p-0">
            <div className="modal-box w-11/12 max-w-5xl">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-1">
                  <IoMdClose className="text-2xl"/>
                </button>
              </form>
             
             {/* video */}
                <video ref={videoRef} autoPlay muted controls className="rounded-2xl">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            
            </div>
          </dialog>
        </div>
      </div>

      {/* paragraph */}
      <div className="w-full md:px-12 lg:px-24 text-gray-600 text-justify text-xl">
        <p>
          Develop a website by finding a product identity that has value and
          branding to become a characteristic of a company. We will also
          facilitate the business marketing of these products with our SEO
          experts so that they become a ready-to-use website and help sell a
          product from the company.
        </p>
        <p className="mt-8">
          Founded in 2014 by Diane Davis and featured in the hit show Silicon
          Valley, Growthly has expanded to over three hundred thousand users. In
          2020, Growthly joined the newly-launched, agency-focused, marketing
          technology suite — Traject. Made up of passionate team members from 22
          cities and 11 countries, Traject represents 7 brands in the marketing
          technology space. We remain true to our roots, committed to delivering
          the easiest out-of-the-box dashboarding solution while also
          innovating, expanding integrations, improving usability. Sasency
          supports hundreds of thousands of users and businesses from
          solopreneur to enterprise with a focus on helping growing agencies
          track their efforts and deliver value.
        </p>
      </div>
    </section>
  );
}

export default AboutUsDetails;
