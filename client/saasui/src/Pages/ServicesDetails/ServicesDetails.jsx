import SectionBanner from "../../Components/SectionBanner";
import SectionBorder from "../../Components/SectionBorder";
import Categories from "../../Shared/Categories/Categories";
import ContactUs from "./Sections/ContactUs";
import ServicesDetailsSection from "./Sections/ServicesDetailsSection";
import TestomonialCarosol from "./Sections/TestomonialCarosol";

function ServicesDetails() {
  return (
    <section>
      {/* header */}
      <SectionBanner heading={"Services Details"} />
      <SectionBorder />

      {/* layout */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12">
        {/* left side */}
        <div className="w-full md:w-2/3 lg:w-3/4">
        {/* service details */}
        <ServicesDetailsSection />
        </div>

        {/* right side */}
        <div className="w-full md:w-1/3 lg:1/4 space-y-16">
          {/* category */}
          <Categories />

          {/* carosel */}
          <TestomonialCarosol />

          {/* contact us */}
          <ContactUs />
        </div>
      </div>
      <SectionBorder />

      {/* frequently question and answer */}

      {/* newsletterr */}
    </section>
  );
}

export default ServicesDetails;
